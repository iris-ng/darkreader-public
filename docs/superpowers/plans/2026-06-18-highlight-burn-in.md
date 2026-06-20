# Highlight Burn-In (Export Annotated PDF) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let the user export a copy of the current PDF with their highlights written in as real, selectable `/Highlight` annotations, via an explicit toolbar button — leaving the original file untouched.

**Architecture:** Highlight capture/display is migrated to pdf.js's own `PageViewport` coordinate conversion (rotation- and crop-correct), so stored highlight coordinates are true PDF user-space points. A new `burn-in` module uses `pdf-lib` to add `/Highlight` annotations (QuadPoints + appearance stream) from those coordinates; a `save` orchestrator gathers highlights, burns, and triggers a download; a toolbar button + toast wire it into the viewer. Dark-mode styling is display-only and never written into the file.

**Tech Stack:** TypeScript (ESM), pdf.js (`pdfjs-dist`) viewer engine, **`pdf-lib`** (new), Vitest (node environment), esbuild via `node build.mjs`.

## Global Constraints

- MV3 + thin pdf.js engine component (`window.__pdfApp`, no `PDFViewerApplication`) — do not reintroduce it.
- Build: `node build.mjs`. Type-check: `corepack pnpm@9.15.0 exec tsc --noEmit`. Test: `corepack pnpm@9.15.0 exec vitest run`. If a `corepack pnpm@9.15.0 exec …` invocation fails in the environment, fall back to `npx …` and report which was used.
- Dependency installs use `corepack pnpm@9.15.0` with `NODE_OPTIONS=--use-system-ca`.
- Vitest `environment` is **node** (`vitest.config.ts`). Do NOT add a DOM environment. Pure logic is unit-tested; DOM/UI modules (`toast.ts`, `toolbar.ts`, boot wiring) are verified manually in-browser, matching the existing untested UI modules (`overlay-layer.ts`, `toolbar.ts`).
- Burned annotations are **real `/Highlight` annotations** (QuadPoints + generated appearance stream), opacity **`/CA 0.4`** (appearance ExtGState `/ca 0.4` + `/BM /Multiply`).
- **Dark-mode is never written into the exported file** — only highlights.
- No backward compatibility for previously stored highlights — the coordinate change discards them, which is acceptable.

---

### Task 1: `coords.ts` — viewport-based coordinate conversion

**Files:**
- Create: `src/viewer/highlight/coords.ts`
- Test: `test/coords.test.ts`

**Interfaces:**
- Consumes: `PdfRect`, `ScreenRect` from `src/viewer/highlight/highlight-model.ts` (existing types).
- Produces:
  - `interface PageViewportLike { convertToPdfPoint(x: number, y: number): number[]; convertToViewportPoint(x: number, y: number): number[]; }`
  - `screenRectToPdf(s: ScreenRect, vp: PageViewportLike): PdfRect`
  - `pdfRectToScreen(r: PdfRect, vp: PageViewportLike): ScreenRect`

- [ ] **Step 1: Write the failing test**

Create `test/coords.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { screenRectToPdf, pdfRectToScreen, type PageViewportLike } from "../src/viewer/highlight/coords";
import type { ScreenRect } from "../src/viewer/highlight/highlight-model";

// Build a PageViewport-like from a 2D affine transform [a,b,c,d,e,f], matching
// pdf.js: viewportPoint = [a*x + c*y + e, b*x + d*y + f]; convertToPdfPoint is
// its inverse. This lets us exercise scale, y-flip, rotation and offset.
function vpFromTransform(t: number[]): PageViewportLike {
  const [a, b, c, d, e, f] = t;
  const det = a * d - b * c;
  return {
    convertToViewportPoint(x, y) { return [a * x + c * y + e, b * x + d * y + f]; },
    convertToPdfPoint(x, y) {
      const xt = x - e, yt = y - f;
      return [(d * xt - c * yt) / det, (-b * xt + a * yt) / det];
    },
  };
}

// Upright page: scale 2, y-down, height 800 -> [2,0,0,-2,0,1600].
const upright = vpFromTransform([2, 0, 0, -2, 0, 1600]);
// 90deg-style rotation + offset (non-zero b,c and origin).
const rotated = vpFromTransform([0, 2, 2, 0, 50, 30]);

describe("coords", () => {
  it("round-trips screen->pdf->screen on an upright page", () => {
    const s: ScreenRect = { left: 100, top: 40, width: 80, height: 24 };
    const back = pdfRectToScreen(screenRectToPdf(s, upright), upright);
    expect(back.left).toBeCloseTo(s.left);
    expect(back.top).toBeCloseTo(s.top);
    expect(back.width).toBeCloseTo(s.width);
    expect(back.height).toBeCloseTo(s.height);
  });

  it("round-trips on a rotated, offset page", () => {
    const s: ScreenRect = { left: 10, top: 10, width: 30, height: 12 };
    const back = pdfRectToScreen(screenRectToPdf(s, rotated), rotated);
    expect(back.left).toBeCloseTo(s.left);
    expect(back.top).toBeCloseTo(s.top);
    expect(back.width).toBeCloseTo(s.width);
    expect(back.height).toBeCloseTo(s.height);
  });

  it("maps screen-top to the higher pdf y (y-flip) on an upright page", () => {
    const p = screenRectToPdf({ left: 0, top: 0, width: 10, height: 10 }, upright);
    expect(Math.max(p.y0, p.y1)).toBeCloseTo(800);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `corepack pnpm@9.15.0 exec vitest run test/coords.test.ts`
Expected: FAIL — cannot resolve `../src/viewer/highlight/coords`.

- [ ] **Step 3: Write minimal implementation**

Create `src/viewer/highlight/coords.ts`:

```ts
import type { PdfRect, ScreenRect } from "./highlight-model";

/**
 * The subset of pdf.js's PageViewport we use. Its transform already encodes
 * scale, rotation (/Rotate) and crop/origin, so converting screen<->pdf through
 * it yields true PDF default-user-space points — correct on rotated and cropped
 * pages, and directly usable as annotation coordinates at burn time.
 */
export interface PageViewportLike {
  convertToPdfPoint(x: number, y: number): number[];
  convertToViewportPoint(x: number, y: number): number[];
}

/** Screen rect (CSS px relative to the page) -> PDF rect (user space). */
export function screenRectToPdf(s: ScreenRect, vp: PageViewportLike): PdfRect {
  const [x0, y0] = vp.convertToPdfPoint(s.left, s.top + s.height); // bottom-left
  const [x1, y1] = vp.convertToPdfPoint(s.left + s.width, s.top);  // top-right
  return { x0, y0, x1, y1 };
}

/** PDF rect (user space) -> screen rect (CSS px relative to the page). */
export function pdfRectToScreen(r: PdfRect, vp: PageViewportLike): ScreenRect {
  const [ax, ay] = vp.convertToViewportPoint(r.x0, r.y0);
  const [bx, by] = vp.convertToViewportPoint(r.x1, r.y1);
  return {
    left: Math.min(ax, bx),
    top: Math.min(ay, by),
    width: Math.abs(bx - ax),
    height: Math.abs(by - ay),
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `corepack pnpm@9.15.0 exec vitest run test/coords.test.ts`
Expected: PASS — 3/3.

- [ ] **Step 5: Commit**

```bash
git add src/viewer/highlight/coords.ts test/coords.test.ts
git commit -m "feat: add viewport-based highlight coordinate conversion"
```

---

### Task 2: Migrate capture + display to `coords.ts`

**Files:**
- Modify: `src/viewer/highlight/highlight-model.ts` (remove `Viewport`, `pdfRectToScreen`, `screenRectToPdf`, and the stale limitations comment; keep `PdfRect`, `ScreenRect`, `Highlight`, `HighlightColor`, `COLOR_HEX`)
- Modify: `src/viewer/highlight/highlighter.ts` (use `coords.screenRectToPdf`, type viewport as `PageViewportLike`)
- Modify: `src/viewer/highlight/overlay-layer.ts` (use `coords.pdfRectToScreen`, type viewport as `PageViewportLike`)
- Modify: `src/viewer/boot.ts` (`viewportFor` returns the live pdf.js viewport; update imports)
- Delete: `test/highlight-model.test.ts` (its functions moved to `coords.ts`, covered by `test/coords.test.ts`)

**Interfaces:**
- Consumes: `PageViewportLike`, `screenRectToPdf`, `pdfRectToScreen` from `./coords` (Task 1).
- Produces: `PageRef.viewport` is now a `PageViewportLike`; `renderHighlights(pageDiv, highlights, vp: PageViewportLike, onClick)`.

- [ ] **Step 1: Delete the obsolete coordinate test**

```bash
git rm test/highlight-model.test.ts
```

This file only tested `pdfRectToScreen`/`screenRectToPdf`, which move to `coords.ts` (covered by `test/coords.test.ts`).

- [ ] **Step 2: Trim `highlight-model.ts`**

In `src/viewer/highlight/highlight-model.ts`, delete the `Viewport` interface, both transform functions, and the multi-line limitations comment. Replace the top of the file (everything before `export type HighlightColor`) with:

```ts
export interface PdfRect { x0: number; y0: number; x1: number; y1: number; } // pdf points, y-up
export interface ScreenRect { left: number; top: number; width: number; height: number; }
```

Leave `HighlightColor`, `Highlight`, and `COLOR_HEX` exactly as they are.

- [ ] **Step 3: Update `highlighter.ts` to use coords**

In `src/viewer/highlight/highlighter.ts`:

Change the imports at the top from:

```ts
import { screenRectToPdf, COLOR_HEX, type Highlight, type HighlightColor, type Viewport } from "./highlight-model";
```

to:

```ts
import { COLOR_HEX, type Highlight, type HighlightColor } from "./highlight-model";
import { screenRectToPdf, type PageViewportLike } from "./coords";
```

Change the `PageRef` interface from:

```ts
interface PageRef { div: HTMLElement; pageNumber: number; viewport: Viewport; }
```

to:

```ts
interface PageRef { div: HTMLElement; pageNumber: number; viewport: PageViewportLike; }
```

No other changes — the `screenRectToPdf({ left, top, width, height }, page.viewport)` call site is unchanged.

- [ ] **Step 4: Update `overlay-layer.ts` to use coords**

In `src/viewer/highlight/overlay-layer.ts`, change the import line from:

```ts
import { pdfRectToScreen, COLOR_HEX, type Highlight, type Viewport } from "./highlight-model";
```

to:

```ts
import { COLOR_HEX, type Highlight } from "./highlight-model";
import { pdfRectToScreen, type PageViewportLike } from "./coords";
```

Change the `renderHighlights` signature parameter `vp: Viewport` to `vp: PageViewportLike`. The body (`pdfRectToScreen(r, vp)`) is unchanged.

- [ ] **Step 5: Update `boot.ts` to pass the live viewport**

In `src/viewer/boot.ts`:

Change the import on line 8 from:

```ts
import type { Viewport } from "./highlight/highlight-model";
```

to:

```ts
import type { PageViewportLike } from "./highlight/coords";
```

Replace `viewportFor`:

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function viewportFor(pageView: any): PageViewportLike {
  return pageView.viewport;
}
```

(The live pdf.js `PageViewport` already implements `convertToPdfPoint` / `convertToViewportPoint`.)

- [ ] **Step 6: Run the full suite + type-check**

Run: `corepack pnpm@9.15.0 exec vitest run`
Expected: PASS — all remaining suites green (the deleted `highlight-model.test.ts` is gone; `coords.test.ts` covers the math).

Run: `corepack pnpm@9.15.0 exec tsc --noEmit`
Expected: no output (clean) — confirms no dangling `Viewport` references.

- [ ] **Step 7: Build**

Run: `node build.mjs`
Expected: build succeeds.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "refactor: capture/display highlights via pdf.js viewport (rotation/crop correct)"
```

---

### Task 3: `burn-in.ts` — write `/Highlight` annotations with pdf-lib

**Files:**
- Modify: `package.json` (add `pdf-lib` dependency)
- Create: `src/viewer/export/burn-in.ts`
- Test: `test/burn-in.test.ts`

**Interfaces:**
- Consumes: `COLOR_HEX`, `Highlight`, `PdfRect` from `../highlight/highlight-model`.
- Produces:
  - `interface BurnResult { bytes: Uint8Array; burned: number; skipped: number; }`
  - `burnHighlights(srcBytes: Uint8Array, highlights: Highlight[]): Promise<BurnResult>`

- [ ] **Step 1: Add the pdf-lib dependency**

Edit `package.json` `dependencies` to add `pdf-lib`:

```json
  "dependencies": {
    "pdf-lib": "^1.17.1",
    "pdfjs-dist": "4.5.136"
  }
```

Install:

```bash
NODE_OPTIONS=--use-system-ca corepack pnpm@9.15.0 install
```

Expected: lockfile updated, `node_modules/pdf-lib` present.

- [ ] **Step 2: Write the failing test**

Create `test/burn-in.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { PDFDocument, PDFName, PDFDict } from "pdf-lib";
import { burnHighlights } from "../src/viewer/export/burn-in";
import type { Highlight } from "../src/viewer/highlight/highlight-model";

async function blankPdf(): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.addPage([600, 800]); // mediabox origin (0,0)
  return doc.save();
}

const inBounds: Highlight = {
  id: "a", page: 1, color: "yellow", createdAt: 0,
  rects: [{ x0: 50, y0: 700, x1: 200, y1: 720 }],
};
const outOfBounds: Highlight = {
  id: "b", page: 1, color: "green", createdAt: 0,
  rects: [{ x0: 5000, y0: 9000, x1: 5200, y1: 9020 }],
};

describe("burnHighlights", () => {
  it("writes one /Highlight annotation for an in-bounds highlight", async () => {
    const out = await burnHighlights(await blankPdf(), [inBounds]);
    expect(out.burned).toBe(1);
    expect(out.skipped).toBe(0);

    const doc = await PDFDocument.load(out.bytes);
    const annots = doc.getPages()[0].node.Annots();
    expect(annots?.size()).toBe(1);
    const dict = annots!.lookup(0, PDFDict);
    expect(dict.get(PDFName.of("Subtype"))?.toString()).toBe("/Highlight");
    expect(dict.get(PDFName.of("QuadPoints"))).toBeDefined();
    expect(dict.get(PDFName.of("AP"))).toBeDefined();
  });

  it("skips and counts an out-of-bounds highlight", async () => {
    const out = await burnHighlights(await blankPdf(), [outOfBounds]);
    expect(out.burned).toBe(0);
    expect(out.skipped).toBe(1);
    const doc = await PDFDocument.load(out.bytes);
    expect(doc.getPages()[0].node.Annots()?.size() ?? 0).toBe(0);
  });

  it("preserves the page count", async () => {
    const out = await burnHighlights(await blankPdf(), [inBounds]);
    const doc = await PDFDocument.load(out.bytes);
    expect(doc.getPageCount()).toBe(1);
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `corepack pnpm@9.15.0 exec vitest run test/burn-in.test.ts`
Expected: FAIL — cannot resolve `../src/viewer/export/burn-in`.

- [ ] **Step 4: Write the implementation**

Create `src/viewer/export/burn-in.ts`:

```ts
import { PDFDocument, PDFName, PDFString } from "pdf-lib";
import { COLOR_HEX, type Highlight, type PdfRect } from "../highlight/highlight-model";

export interface BurnResult { bytes: Uint8Array; burned: number; skipped: number; }

interface Box { minX: number; minY: number; maxX: number; maxY: number; }

function hexToRgb01(hex: string): [number, number, number] {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return [1, 1, 0];
  const n = parseInt(m[1], 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function toBox(r: PdfRect): Box {
  return {
    minX: Math.min(r.x0, r.x1), minY: Math.min(r.y0, r.y1),
    maxX: Math.max(r.x0, r.x1), maxY: Math.max(r.y0, r.y1),
  };
}

function isValid(b: Box, mb: { x: number; y: number; width: number; height: number }): boolean {
  if (![b.minX, b.minY, b.maxX, b.maxY].every(Number.isFinite)) return false;
  if (b.maxX - b.minX <= 0 || b.maxY - b.minY <= 0) return false;
  const tol = 2;
  return b.minX >= mb.x - tol && b.minY >= mb.y - tol
    && b.maxX <= mb.x + mb.width + tol && b.maxY <= mb.y + mb.height + tol;
}

/**
 * Returns the source bytes with one real /Highlight annotation per highlight
 * whose rects fall inside the page. A highlight with no placeable rect (out of
 * bounds, degenerate, or a missing page) is skipped and counted. Dark-mode is
 * NOT applied — only highlights are written.
 */
export async function burnHighlights(srcBytes: Uint8Array, highlights: Highlight[]): Promise<BurnResult> {
  const doc = await PDFDocument.load(srcBytes);
  const pages = doc.getPages();
  let burned = 0, skipped = 0;

  for (const h of highlights) {
    const page = pages[h.page - 1];
    if (!page) { skipped++; continue; }
    const mb = page.getMediaBox();
    const boxes = h.rects.map(toBox).filter((b) => isValid(b, mb));
    if (boxes.length === 0) { skipped++; continue; }

    const union: Box = {
      minX: Math.min(...boxes.map((b) => b.minX)),
      minY: Math.min(...boxes.map((b) => b.minY)),
      maxX: Math.max(...boxes.map((b) => b.maxX)),
      maxY: Math.max(...boxes.map((b) => b.maxY)),
    };
    const [r, g, b] = hexToRgb01(COLOR_HEX[h.color]);
    const bbox = [union.minX, union.minY, union.maxX, union.maxY];

    // QuadPoints per rect: UL, UR, LL, LR (8 numbers each).
    const quad: number[] = [];
    for (const x of boxes) quad.push(x.minX, x.maxY, x.maxX, x.maxY, x.minX, x.minY, x.maxX, x.minY);

    // Appearance stream: translucent multiply fill of each rect, in user space.
    const ops = ["/GS0 gs", `${r} ${g} ${b} rg`];
    for (const x of boxes) ops.push(`${x.minX} ${x.minY} ${x.maxX - x.minX} ${x.maxY - x.minY} re`);
    ops.push("f");

    const apStream = doc.context.stream(ops.join("\n"), {
      Type: "XObject", Subtype: "Form", FormType: 1, BBox: bbox,
      Resources: doc.context.obj({
        ExtGState: doc.context.obj({ GS0: doc.context.obj({ ca: 0.4, BM: "Multiply" }) }),
      }),
    });
    const apRef = doc.context.register(apStream);

    const annot = doc.context.obj({
      Type: "Annot", Subtype: "Highlight", Rect: bbox, QuadPoints: quad,
      C: [r, g, b], CA: 0.4, AP: doc.context.obj({ N: apRef }),
    });
    if (h.note) annot.set(PDFName.of("Contents"), PDFString.of(h.note));
    const annotRef = doc.context.register(annot);

    let annots = page.node.Annots();
    if (!annots) { annots = doc.context.obj([]); page.node.set(PDFName.of("Annots"), annots); }
    annots.push(annotRef);
    burned++;
  }

  const bytes = await doc.save();
  return { bytes, burned, skipped };
}
```

Note on pdf-lib API: `doc.context.stream(contents, dict)`, `doc.context.obj(value)`, and `doc.context.register(obj)` are the low-level factories used here; `page.node.Annots()` returns a `PDFArray | undefined`. If a factory name differs in the installed 1.17.x, adjust the call to satisfy the test — **the re-parsing test in Step 2 is the contract** (a `/Highlight` annotation with QuadPoints + AP must exist for the in-bounds case, and none for the out-of-bounds case).

- [ ] **Step 5: Run test to verify it passes**

Run: `corepack pnpm@9.15.0 exec vitest run test/burn-in.test.ts`
Expected: PASS — 3/3.

- [ ] **Step 6: Type-check**

Run: `corepack pnpm@9.15.0 exec tsc --noEmit`
Expected: no output (clean).

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-lock.yaml src/viewer/export/burn-in.ts test/burn-in.test.ts
git commit -m "feat: burn highlights into PDF as real /Highlight annotations (pdf-lib)"
```

---

### Task 4: `save.ts` — orchestrate gather → burn → download

**Files:**
- Create: `src/viewer/export/save.ts`
- Test: `test/save.test.ts`

**Interfaces:**
- Consumes: `burnHighlights` from `./burn-in` (Task 3); `Highlight` from `../highlight/highlight-model`.
- Produces:
  - `deriveHighlightedName(name: string): string`
  - `interface SaveDeps { getHighlights: () => Promise<Highlight[]>; getSrcBytes: () => Promise<Uint8Array>; download: (bytes: Uint8Array, filename: string) => void; sourceName: string; }`
  - `interface SaveResult { status: "saved" | "empty" | "error"; filename?: string; burned?: number; skipped?: number; }`
  - `saveHighlighted(deps: SaveDeps): Promise<SaveResult>`

- [ ] **Step 1: Write the failing test**

Create `test/save.test.ts`:

```ts
import { describe, it, expect, vi } from "vitest";
import { deriveHighlightedName, saveHighlighted } from "../src/viewer/export/save";
import type { Highlight } from "../src/viewer/highlight/highlight-model";

const hl: Highlight = {
  id: "a", page: 1, color: "yellow", createdAt: 0,
  rects: [{ x0: 10, y0: 700, x1: 100, y1: 720 }],
};

describe("deriveHighlightedName", () => {
  it("inserts (highlighted) before .pdf", () => {
    expect(deriveHighlightedName("report.pdf")).toBe("report (highlighted).pdf");
  });
  it("handles names with extra dots and spaces", () => {
    expect(deriveHighlightedName("Q1 v2.final.pdf")).toBe("Q1 v2.final (highlighted).pdf");
  });
  it("is case-insensitive on the extension", () => {
    expect(deriveHighlightedName("A.PDF")).toBe("A (highlighted).pdf");
  });
  it("falls back to 'document' for an empty name", () => {
    expect(deriveHighlightedName("")).toBe("document (highlighted).pdf");
  });
});

describe("saveHighlighted", () => {
  it("returns 'empty' and does not download when there are no highlights", async () => {
    const download = vi.fn();
    const res = await saveHighlighted({
      getHighlights: async () => [],
      getSrcBytes: async () => new Uint8Array(),
      download, sourceName: "x.pdf",
    });
    expect(res.status).toBe("empty");
    expect(download).not.toHaveBeenCalled();
  });

  it("burns and downloads when highlights exist", async () => {
    const { PDFDocument } = await import("pdf-lib");
    const d = await PDFDocument.create(); d.addPage([600, 800]);
    const src = await d.save();
    const download = vi.fn();
    const res = await saveHighlighted({
      getHighlights: async () => [hl],
      getSrcBytes: async () => src,
      download, sourceName: "report.pdf",
    });
    expect(res.status).toBe("saved");
    expect(res.filename).toBe("report (highlighted).pdf");
    expect(res.burned).toBe(1);
    expect(download).toHaveBeenCalledOnce();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `corepack pnpm@9.15.0 exec vitest run test/save.test.ts`
Expected: FAIL — cannot resolve `../src/viewer/export/save`.

- [ ] **Step 3: Write the implementation**

Create `src/viewer/export/save.ts`:

```ts
import { burnHighlights } from "./burn-in";
import type { Highlight } from "../highlight/highlight-model";

export interface SaveDeps {
  getHighlights: () => Promise<Highlight[]>;
  getSrcBytes: () => Promise<Uint8Array>;
  download: (bytes: Uint8Array, filename: string) => void;
  sourceName: string;
}

export interface SaveResult {
  status: "saved" | "empty" | "error";
  filename?: string;
  burned?: number;
  skipped?: number;
}

/** "report.pdf" -> "report (highlighted).pdf"; empty -> "document (highlighted).pdf". */
export function deriveHighlightedName(name: string): string {
  const base = (name || "").trim().replace(/\.pdf$/i, "") || "document";
  return `${base} (highlighted).pdf`;
}

export async function saveHighlighted(deps: SaveDeps): Promise<SaveResult> {
  const highlights = await deps.getHighlights();
  if (highlights.length === 0) return { status: "empty" };
  try {
    const src = await deps.getSrcBytes();
    const { bytes, burned, skipped } = await burnHighlights(src, highlights);
    const filename = deriveHighlightedName(deps.sourceName);
    deps.download(bytes, filename);
    return { status: "saved", filename, burned, skipped };
  } catch (e) {
    console.error("[PDF Dark Reader] burn-in failed", e);
    return { status: "error" };
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `corepack pnpm@9.15.0 exec vitest run test/save.test.ts`
Expected: PASS — 6/6.

- [ ] **Step 5: Commit**

```bash
git add src/viewer/export/save.ts test/save.test.ts
git commit -m "feat: add saveHighlighted orchestrator + highlighted filename derivation"
```

---

### Task 5: Toast + toolbar button + boot wiring (UI integration)

**Files:**
- Create: `src/viewer/ui/toast.ts`
- Modify: `src/viewer/ui/toolbar.ts` (add `onSave` to `ToolbarHandlers` + a button)
- Modify: `src/viewer/boot.ts` (track source filename; implement the save handler; download via DOM; show toast)

**Interfaces:**
- Consumes: `saveHighlighted` from `./export/save` (Task 4); `showToast` from `./ui/toast`.
- Produces: `showToast(message: string, ms?: number): void`; `ToolbarHandlers.onSave: () => void`.

No unit tests — per the Global Constraints, DOM/UI modules are verified manually in-browser (Step 5 below), matching the existing untested `toolbar.ts` / `overlay-layer.ts`. Type-check + build are the automated gates.

- [ ] **Step 1: Create the toast**

Create `src/viewer/ui/toast.ts`:

```ts
/** A minimal transient toast at the bottom-center of the viewer. */
export function showToast(message: string, ms = 4000): void {
  const el = document.createElement("div");
  el.textContent = message;
  el.setAttribute("role", "status");
  Object.assign(el.style, {
    position: "fixed", bottom: "16px", left: "50%", transform: "translateX(-50%)",
    background: "#2b2d31", color: "#d7d4cc", padding: "8px 14px", borderRadius: "8px",
    font: "13px 'Segoe UI', system-ui", boxShadow: "0 6px 22px rgba(0,0,0,.45)",
    zIndex: "20", maxWidth: "80vw", textAlign: "center",
    opacity: "0", transition: "opacity .15s ease",
  });
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity = "1"; });
  setTimeout(() => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 200);
  }, ms);
}
```

- [ ] **Step 2: Add the Save button to the toolbar**

In `src/viewer/ui/toolbar.ts`, add `onSave` to the `ToolbarHandlers` interface:

```ts
export interface ToolbarHandlers {
  onTheme: (t: ThemeName) => void;
  onToggleHighlight: (on: boolean) => void;
  onColor: (c: HighlightColor) => void;
  onShade: (value: number) => void;
  onTextLevel: (value: number) => void;
  onSave: () => void;
}
```

Then, just before the final `host.append(...)` line, create the button:

```ts
  const saveBtn = document.createElement("button");
  saveBtn.style.cssText = BTN;
  saveBtn.textContent = "💾 Save with highlights";
  saveBtn.title = "Download a copy of this PDF with your highlights burned in";
  saveBtn.addEventListener("click", () => handlers.onSave());
```

and change the final append to include it:

```ts
  host.append(themeBtn, shade, textCtl, hlBtn, swatches, saveBtn);
```

- [ ] **Step 3: Wire boot.ts**

In `src/viewer/boot.ts`:

Add imports near the other relative imports:

```ts
import { saveHighlighted } from "./export/save";
import { showToast } from "./ui/toast";
```

Add a module-level variable beside the existing `let docHash = "";`:

```ts
let sourceName = "";
```

Add these two helpers above `main()`:

```ts
function downloadBytes(bytes: Uint8Array, filename: string): void {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function onSaveHighlights(): Promise<void> {
  if (!app.document) return;
  const res = await saveHighlighted({
    getHighlights: () => store.get(docHash),
    getSrcBytes: () => app.document!.getData(),
    download: downloadBytes,
    sourceName,
  });
  if (res.status === "empty") {
    showToast("No highlights to save");
  } else if (res.status === "error") {
    showToast("Couldn't save highlighted PDF");
  } else {
    const n = res.burned ?? 0;
    const skip = res.skipped ? ` (${res.skipped} skipped)` : "";
    showToast(`Saved "${res.filename}" — ${n} highlight${n === 1 ? "" : "s"}${skip}`);
  }
}
```

Add `onSave` to the `mountToolbar` handlers object (alongside `onTheme`, etc.):

```ts
    onSave: () => void onSaveHighlights(),
```

Set `sourceName` when the file is known. Immediately after the existing `if (!file) return;` line in `main()`, add:

```ts
  try {
    sourceName = decodeURIComponent(new URL(file, location.href).pathname.split("/").pop() ?? "");
  } catch {
    sourceName = "";
  }
```

- [ ] **Step 4: Type-check + build**

Run: `corepack pnpm@9.15.0 exec tsc --noEmit`
Expected: no output (clean).

Run: `node build.mjs`
Expected: build succeeds; `dist/viewer/boot.js` rebuilt (now includes pdf-lib).

- [ ] **Step 5: Manual verification (browser)**

Load `dist/` unpacked in Edge (and Chrome). Open a local PDF, enable Highlight, make 2–3 highlights across pages, click **💾 Save with highlights**.
Expected: a `<name> (highlighted).pdf` downloads; a toast reports the count. Open the downloaded file in a different reader (e.g. Acrobat/Edge native) and confirm the highlights appear as real, selectable highlight annotations over the correct text, and that the page is NOT dark (dark-mode not burned in). With no highlights, the button shows the "No highlights to save" toast and downloads nothing.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add 'Save with highlights' toolbar action with toast feedback"
```

---

### Task 6: Final verification + docs

**Files:**
- Modify: `progress.md` (append a dated entry)
- Modify: `README.md` (document the Save-with-highlights feature, if a feature list exists)

**Interfaces:**
- Consumes: everything above.
- Produces: nothing.

- [ ] **Step 1: Full green check**

Run: `corepack pnpm@9.15.0 exec vitest run`
Expected: PASS — all suites (coords, burn-in, save, plus the pre-existing highlight-store/settings/doc-hash/pdf-url/file-param suites).

Run: `corepack pnpm@9.15.0 exec tsc --noEmit`
Expected: clean.

Run: `node build.mjs`
Expected: success.

- [ ] **Step 2: Update README**

In `README.md`, add a bullet to the feature list describing the highlight burn-in: an explicit "💾 Save with highlights" button downloads a copy of the PDF with highlights written in as real annotations (original untouched; dark-mode not baked in).

- [ ] **Step 3: Record progress**

Append a dated entry to `progress.md` summarizing: the burn-in feature (real `/Highlight` annotations via pdf-lib), the coordinate migration to pdf.js viewport conversion (rotation/crop correct; old stored highlights discarded), the fix+detect skip behavior, and the manual verification result. Note that Chrome is now verified.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "docs: document highlight burn-in feature and record progress"
```

---

## Self-Review

**1. Spec coverage:**
- Real `/Highlight` annotations (QuadPoints + appearance stream, `/CA 0.4`, Multiply) → Task 3.
- Coordinate fidelity "fix" (pdf.js viewport conversion) → Tasks 1–2.
- Coordinate "detect" (skip + count out-of-bounds/degenerate/missing-page) → Task 3 (`isValid`, `skipped`).
- Delivery: explicit button → download `<name> (highlighted).pdf` + toast with burned/skipped counts → Tasks 4–5.
- Dark-mode never burned → Task 3 only writes annotations (no rendering); called out in Task 5 manual check.
- Original never modified → burn-in loads bytes and outputs a new file; download is a copy.
- Error handling (try/catch → error toast; zero-highlights → empty toast) → Tasks 4–5.
- `note` → `/Contents` when present → Task 3.
- New dependency pdf-lib → Task 3 Step 1.
- Testing matrix (coords round-trip incl. rotation/offset; burn-in re-parse incl. skip; save filename + zero branch) → Tasks 1, 3, 4. Toast/UI manual per node-only test env → Task 5. No gaps.

**2. Placeholder scan:** No TBD/TODO/"handle edge cases"/"similar to Task N". All code shown in full. The pdf-lib API note in Task 3 names concrete factories and pins the test as the contract — not a placeholder.

**3. Type consistency:** `PageViewportLike` defined in Task 1 and consumed unchanged in Task 2 (`highlighter.ts`, `overlay-layer.ts`, `boot.ts`). `BurnResult`/`burnHighlights` defined in Task 3 and consumed in Task 4. `SaveDeps`/`SaveResult`/`saveHighlighted`/`deriveHighlightedName` defined in Task 4 and consumed in Task 5. `ToolbarHandlers.onSave` added in Task 5 and supplied by boot in the same task. `showToast(message, ms?)` defined and called consistently. `Highlight`/`PdfRect`/`ScreenRect`/`COLOR_HEX` retained from `highlight-model.ts` and imported consistently. Consistent.
