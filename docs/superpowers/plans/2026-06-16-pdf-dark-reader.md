# PDF Dark Reader Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Manifest V3 Edge/Chrome extension that replaces the native PDF viewer with a pdf.js-based dark reader whose WebGL shader inverts page backgrounds/text while preserving highlight colors, with a built-in highlighter persisted locally.

**Architecture:** An MV3 extension redirects PDF navigations (via dynamic `declarativeNetRequest` rules) to a vendored pdf.js viewer. A boot module hooks the pdf.js `eventBus`: on each `pagerendered` event it recolors the page canvas with a WebGL shader (2D-canvas fallback), and renders a highlight overlay. Highlights are stored in `chrome.storage.local` keyed by a content hash of the PDF, in PDF coordinate space.

**Tech Stack:** TypeScript, `pdfjs-dist` (pinned 4.x), esbuild (bundling), Node copy script (vendor pdf.js + static assets), Vitest (unit tests), pnpm. WebGL2 for the shader; Web Crypto for hashing; `chrome.storage.local` for persistence.

---

## Reference: the approved spec

`docs/superpowers/specs/2026-06-16-pdf-dark-reader-design.md`. Read it before starting. Key invariants this plan must preserve:
- White bg → `#1e1f22` (Smart Dark); black text → `#d7d4cc`; saturated pixels pass through (highlights keep color).
- Dark text stays dark inside colored regions (text-in-highlight legibility).
- Themes: Smart Dark (default), Warm Sepia, Off. Toggle re-applies without reload.
- Highlights keyed by PDF content hash, stored in PDF coordinate space, data model reserved for future `pdf-lib` burn-in.

## File structure

```
darkmode/
├─ package.json                     # deps, scripts
├─ tsconfig.json                    # TS config
├─ vitest.config.ts                 # test config
├─ build.mjs                        # esbuild bundle + copy pdf.js runtime assets + static
├─ src/
│  ├─ manifest.json                 # MV3 manifest (copied to dist as-is)
│  ├─ background/
│  │  └─ service-worker.ts          # installs dynamic DNR redirect rules
│  ├─ viewer/
│  │  ├─ viewer.html                # our own viewer shell (toolbar + #viewerContainer)
│  │  ├─ pdf-app.ts                 # instantiates pdf.js PDFViewer/EventBus; loads document
│  │  ├─ boot.ts                    # entry: creates pdf-app, wires theme/highlight modules to eventBus
│  │  ├─ theme/
│  │  │  ├─ themes.ts               # ThemeColors constants (smartDark, warmSepia)
│  │  │  ├─ color-map.ts            # PURE pixel mapping logic (unit tested)
│  │  │  ├─ shader.ts               # WebGL2 program implementing color-map in GLSL
│  │  │  ├─ canvas2d.ts             # 2D fallback applying color-map per pixel
│  │  │  └─ theme-engine.ts         # per-page apply, theme switching, fallback selection
│  │  ├─ highlight/
│  │  │  ├─ highlight-model.ts      # types + PDF<->viewport coord transforms (unit tested)
│  │  │  ├─ doc-hash.ts             # PDF content hash (unit tested)
│  │  │  ├─ highlight-store.ts      # chrome.storage.local CRUD keyed by hash (unit tested)
│  │  │  ├─ overlay-layer.ts        # renders stored highlights aligned to a page
│  │  │  └─ highlighter.ts          # text selection -> create highlight, color popover
│  │  └─ ui/
│  │     ├─ toolbar.ts              # injects theme toggle + highlight buttons into pdf.js toolbar
│  │     └─ error-card.ts           # dark error UI for load failures
│  ├─ popup/
│  │  ├─ popup.html
│  │  └─ popup.ts                   # default settings UI
│  └─ common/
│     └─ settings.ts                # typed get/set over chrome.storage.local (unit tested)
├─ test/
│  ├─ color-map.test.ts
│  ├─ doc-hash.test.ts
│  ├─ highlight-model.test.ts
│  ├─ highlight-store.test.ts
│  └─ settings.test.ts
└─ docs/superpowers/...
```

Files split by responsibility. The pure-logic units (`color-map`, `highlight-model`, `doc-hash`, `highlight-store`, `settings`) carry the real test coverage; integration units (`boot`, `pdf-app`, `theme-engine`, `highlighter`, `toolbar`) carry concrete code plus manual verification because they depend on the live browser + pdf.js.

---

## ⚠️ ARCHITECTURE UPDATE (2026-06-16, after Task 0.2)

**Discovered during implementation:** the `pdfjs-dist` npm package does NOT ship the prebuilt standalone viewer app (`web/viewer.html` + its toolbar/find-bar/thumbnail UI, and the `PDFViewerApplication` global). It ships only:
- the **viewer engine component** at `node_modules/pdfjs-dist/web/pdf_viewer.mjs` (+ `pdf_viewer.css`) — exporting `EventBus`, `PDFViewer`, `PDFLinkService`, `PDFFindController`, plus text-layer and annotation-layer rendering; and
- the **core + worker** at `build/pdf.mjs` and `build/pdf.worker.mjs`; plus `cmaps/` and `standard_fonts/`.

**Resolution (approved):** build a **thin custom viewer**. We provide our own `src/viewer/viewer.html` shell and a `src/viewer/pdf-app.ts` module that instantiates `PDFViewer` from the component. esbuild bundles `pdf.mjs` + `pdf_viewer.mjs` into our `boot.js`; the worker, css, images, cmaps and fonts are copied as runtime assets.

**Consequences for later tasks:**
- There is **no `PDFViewerApplication` global.** `boot.ts` creates an app object via `createPdfApp()` and exposes it as `window.__pdfApp`. Everywhere the original plan said `PDFViewerApplication`, use the `PdfApp` instance instead (`app.eventBus`, `app.pdfViewer`, `app.document`). The `pagerendered` event still fires on `app.eventBus` with `e.source.canvas` and `e.pageNumber`; `app.pdfViewer.getPageView(i)` and `pageView.viewport` still exist.
- The toolbar mounts into **our** `#toolbar` element (we control the markup), not pdf.js's `#toolbarViewerRight`.
- Document bytes for hashing come from `app.document.getData()`.
- **Deferred to future work (scope change from spec §):** the prebuilt **thumbnail sidebar** and **polished find-bar UI**. The search *engine* (`PDFFindController`) is available; a minimal find input is in scope, full find-bar UI is not.

Tasks 0.3, 0.4, 2.4, 4.3, 5.1, 5.2, 5.4 below reflect this update.

---

## Phase 0 — Scaffold & build pipeline

### Task 0.1: Initialize the toolchain

**Files:**
- Create: `package.json`, `tsconfig.json`, `vitest.config.ts`, `.gitignore` (already exists — extend)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "pdf-dark-reader",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "node build.mjs",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "esbuild": "^0.21.0",
    "typescript": "^5.4.0",
    "vitest": "^1.6.0",
    "@types/chrome": "^0.0.268"
  },
  "dependencies": {
    "pdfjs-dist": "4.5.136"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "types": ["chrome"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true
  },
  "include": ["src", "test"]
}
```

- [ ] **Step 3: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["test/**/*.test.ts"],
  },
});
```

- [ ] **Step 4: Install deps**

Run: `pnpm install`
Expected: lockfile created, `pdfjs-dist` + dev deps installed, no errors.

- [ ] **Step 5: Verify the empty test runner works**

Run: `pnpm test`
Expected: Vitest reports "No test files found" (exit 0 acceptable) — confirms wiring.

- [ ] **Step 6: Commit**

```bash
git add package.json tsconfig.json vitest.config.ts pnpm-lock.yaml
git commit -m "chore: scaffold toolchain (esbuild, vitest, pdfjs-dist)"
```

### Task 0.2: Manifest + service worker (PDF redirect)

**Files:**
- Create: `src/manifest.json`, `src/background/service-worker.ts`

- [ ] **Step 1: Create `src/manifest.json`**

```json
{
  "manifest_version": 3,
  "name": "PDF Dark Reader",
  "version": "0.1.0",
  "description": "A clean, graceful dark mode for PDFs — highlights keep their color.",
  "permissions": ["declarativeNetRequest", "storage"],
  "host_permissions": ["<all_urls>"],
  "background": { "service_worker": "background/service-worker.js", "type": "module" },
  "action": { "default_popup": "popup/popup.html", "default_title": "PDF Dark Reader" },
  "web_accessible_resources": [
    { "resources": ["viewer/*", "pdfjs/*"], "matches": ["<all_urls>"] }
  ]
}
```

- [ ] **Step 2: Create `src/background/service-worker.ts`**

Dynamic DNR rules build the redirect URL from `chrome.runtime.getURL` (the extension id is only known at runtime, so static rules cannot embed it). `\\0` substitutes the whole matched URL as the `file` param.

```ts
const VIEWER_URL = chrome.runtime.getURL("viewer/viewer.html");

// rule ids we own, removed-then-added so re-install is idempotent
const RULE_IDS = [1, 2];

async function installRules(fileAccess: boolean): Promise<void> {
  const addRules: chrome.declarativeNetRequest.Rule[] = [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { regexSubstitution: `${VIEWER_URL}?file=\\0` },
      },
      condition: {
        regexFilter: "^https?://.*\\.pdf\\b.*$",
        resourceTypes: ["main_frame"],
      },
    },
  ];
  if (fileAccess) {
    addRules.push({
      id: 2,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { regexSubstitution: `${VIEWER_URL}?file=\\0` },
      },
      condition: {
        regexFilter: "^file://.*\\.pdf$",
        resourceTypes: ["main_frame"],
      },
    });
  }
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: RULE_IDS,
    addRules,
  });
}

chrome.runtime.onInstalled.addListener(() => void installRules(false));
chrome.runtime.onStartup.addListener(() => void installRules(false));

// allow the popup to toggle file:// support later
chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "set-file-access") void installRules(!!msg.value);
});
```

- [ ] **Step 3: Commit**

```bash
git add src/manifest.json src/background/service-worker.ts
git commit -m "feat: manifest + DNR redirect of PDF navigations to viewer"
```

### Task 0.3: Build pipeline + thin pdf.js viewer shell

**Files:**
- Create: `build.mjs`, `src/viewer/viewer.html`, `src/viewer/pdf-app.ts`, `src/viewer/boot.ts`, `src/popup/popup.html` (stub), `src/popup/popup.ts` (stub)

This task gets a PDF rendering in our own viewer (no theming yet). It copies pdf.js runtime assets, bundles our TS (esbuild bundles `pdf.mjs` + `pdf_viewer.mjs` into `boot.js`), and provides the viewer shell + the `pdf-app` module that instantiates `PDFViewer`.

- [ ] **Step 1: Create `src/viewer/pdf-app.ts`** — the pdf.js engine wrapper (our replacement for `PDFViewerApplication`).

```ts
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist/build/pdf.mjs";
import { EventBus, PDFViewer, PDFLinkService, PDFFindController } from "pdfjs-dist/web/pdf_viewer.mjs";

// pdfjs-dist ships types under its exports map; if an import fails to resolve types under strict
// mode, narrow with a local cast rather than disabling checks broadly. Keep `any` to a minimum.
export interface PdfApp {
  eventBus: EventBus;
  pdfViewer: PDFViewer;
  linkService: PDFLinkService;
  findController: PDFFindController;
  document: Awaited<ReturnType<typeof getDocument>["promise"]> | null;
}

export function createPdfApp(container: HTMLDivElement): PdfApp {
  GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("pdfjs/pdf.worker.mjs");
  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus });
  const findController = new PDFFindController({ eventBus, linkService });
  const pdfViewer = new PDFViewer({ container, eventBus, linkService, findController });
  linkService.setViewer(pdfViewer);
  eventBus.on("pagesinit", () => { pdfViewer.currentScaleValue = "auto"; });
  return { eventBus, pdfViewer, linkService, findController, document: null };
}

export async function loadDocument(app: PdfApp, url: string) {
  const task = getDocument({
    url,
    cMapUrl: chrome.runtime.getURL("pdfjs/cmaps/"),
    cMapPacked: true,
    standardFontDataUrl: chrome.runtime.getURL("pdfjs/standard_fonts/"),
  });
  const doc = await task.promise;
  app.document = doc;
  app.pdfViewer.setDocument(doc);
  app.linkService.setDocument(doc, null);
  return doc;
}
```

- [ ] **Step 2: Create `src/viewer/boot.ts`** — entry that builds the app and loads the document. (Theming/highlighting wired in later tasks.)

```ts
import { createPdfApp, loadDocument, type PdfApp } from "./pdf-app";

declare global { interface Window { __pdfApp?: PdfApp } }

async function main() {
  const container = document.getElementById("viewerContainer") as HTMLDivElement;
  const app = createPdfApp(container);
  window.__pdfApp = app; // consumed by later tasks (theme/highlight) + the spike
  const file = new URLSearchParams(location.search).get("file");
  console.log("[PDF Dark Reader] boot loaded", { file });
  if (file) {
    try { await loadDocument(app, file); }
    catch (e) { console.error("[PDF Dark Reader] load failed", e); }
  }
}
void main();
```

- [ ] **Step 3: Create `src/viewer/viewer.html`** — our shell. The `#viewerContainer`/`#viewer.pdfViewer` structure and `pdf_viewer.css` are required by `PDFViewer`.

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>PDF Dark Reader</title>
  <link rel="stylesheet" href="../pdfjs/web/pdf_viewer.css">
  <style>
    html, body { margin: 0; height: 100%; background: #1e1f22; }
    #toolbar { position: fixed; inset: 0 0 auto 0; height: 40px; display: flex;
      align-items: center; gap: 8px; padding: 0 10px; background: #1e1f22;
      color: #d7d4cc; z-index: 10; border-bottom: 1px solid #ffffff14;
      font: 13px "Segoe UI", system-ui; transition: transform .2s ease; }
    #viewerContainer { position: absolute; inset: 40px 0 0 0; overflow: auto; }
    .pdfViewer .page { margin: 10px auto; box-shadow: 0 6px 22px rgba(0,0,0,.45); border: 0; }
  </style>
</head>
<body>
  <div id="toolbar"></div>
  <div id="viewerContainer"><div id="viewer" class="pdfViewer"></div></div>
  <script type="module" src="./boot.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create stub popup files**

`src/popup/popup.html`:
```html
<!doctype html>
<html><head><meta charset="utf-8"><style>body{width:240px;font:13px Segoe UI,system-ui;padding:12px;background:#1e1f22;color:#d7d4cc}</style></head>
<body><h3>PDF Dark Reader</h3><div id="root">Settings coming soon.</div><script type="module" src="popup.js"></script></body></html>
```

`src/popup/popup.ts`:
```ts
console.log("[PDF Dark Reader] popup loaded");
```

- [ ] **Step 5: Create `build.mjs`**

Copies pdf.js runtime assets (worker, css, images, cmaps, fonts), bundles our TS entries (esbuild pulls `pdf.mjs` + `pdf_viewer.mjs` into `viewer/boot.js`), and copies our static html + manifest.

```js
import * as esbuild from "esbuild";
import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = "dist";
const PDFJS = "node_modules/pdfjs-dist";

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

// 1. pdf.js runtime assets loaded at runtime (worker is a separate Worker file; the rest are fetched).
await cp(`${PDFJS}/build/pdf.worker.mjs`, `${OUT}/pdfjs/pdf.worker.mjs`);
await cp(`${PDFJS}/web/pdf_viewer.css`, `${OUT}/pdfjs/web/pdf_viewer.css`);
await cp(`${PDFJS}/web/images`, `${OUT}/pdfjs/web/images`, { recursive: true });
await cp(`${PDFJS}/cmaps`, `${OUT}/pdfjs/cmaps`, { recursive: true });
await cp(`${PDFJS}/standard_fonts`, `${OUT}/pdfjs/standard_fonts`, { recursive: true });

// 2. Bundle TS entry points (pdf.mjs + pdf_viewer.mjs get bundled into viewer/boot.js).
await esbuild.build({
  entryPoints: {
    "background/service-worker": "src/background/service-worker.ts",
    "viewer/boot": "src/viewer/boot.ts",
    "popup/popup": "src/popup/popup.ts",
  },
  outdir: OUT,
  bundle: true,
  format: "esm",
  target: "es2022",
  splitting: false,
  logLevel: "info",
});

// 3. Static assets.
await cp("src/manifest.json", `${OUT}/manifest.json`);
await cp("src/viewer/viewer.html", `${OUT}/viewer/viewer.html`);
await cp("src/popup/popup.html", `${OUT}/popup/popup.html`);

console.log("Build complete ->", resolve(OUT));
```

- [ ] **Step 6: Build + verify dist layout**

Run: `node build.mjs` (or via corepack pnpm if esbuild isn't resolvable: `NODE_OPTIONS=--use-system-ca COREPACK_HOME="$LOCALAPPDATA/node/corepack" corepack pnpm@9.15.0 build`).
Expected `dist/` contains: `manifest.json`, `background/service-worker.js`, `viewer/viewer.html`, `viewer/boot.js`, `popup/popup.html`, `popup/popup.js`, `pdfjs/pdf.worker.mjs`, `pdfjs/web/pdf_viewer.css`, `pdfjs/web/images/`, `pdfjs/cmaps/`, `pdfjs/standard_fonts/`. Confirm `viewer/boot.js` is a non-trivial bundle (pdf.js inlined → hundreds of KB).

- [ ] **Step 7: Typecheck**

Run: `... corepack pnpm@9.15.0 typecheck`. Resolve any type errors. If `pdfjs-dist` subpath types don't resolve cleanly under `verbatimModuleSyntax`, prefer a narrow module-declaration or local cast over broad `any`. Also fix any `@types/chrome` enum-vs-string-literal errors in `service-worker.ts` (e.g. cast `"redirect"`/`"main_frame"` to the expected types) since this is the first task that typechecks the whole `src`.

- [ ] **Step 8: Commit**

```bash
git add build.mjs src/viewer/viewer.html src/viewer/pdf-app.ts src/viewer/boot.ts src/popup/popup.html src/popup/popup.ts
# include service-worker.ts only if you had to adjust its types:
git add src/background/service-worker.ts 2>/dev/null || true
git commit -m "build: thin pdf.js viewer (pdf-app + shell), esbuild pipeline, runtime assets"
```

### Task 0.4: Integration spike — load unpacked, open a PDF

This task **verifies the runtime before we build on it.** It is manual (extensions need a real browser). The controller (not a subagent) performs it.

- [ ] **Step 1: Load the extension** — Edge: `edge://extensions` → Developer mode → "Load unpacked" → select `dist/`.
- [ ] **Step 2: Open any web PDF** (e.g. an arXiv PDF link).
  - Expected: the URL redirects to our `viewer/viewer.html?file=...` and the PDF renders in our shell (dark page margins, white pages for now). Console shows `[PDF Dark Reader] boot loaded { file: "..." }`.
- [ ] **Step 3: In the viewer page DevTools console, confirm the hook points on OUR app:**

```js
window.__pdfApp                                   // object
window.__pdfApp.eventBus                          // truthy
window.__pdfApp.eventBus.on("pagerendered", e => console.log("page", e.pageNumber, e.source.canvas));
window.__pdfApp.pdfViewer.getPageView(0)?.viewport // has scale + viewBox
```
  - Expected: scrolling logs each page number with a real `<canvas>` (`e.source.canvas`); `viewport` exposes `scale` and `viewBox` (a 4-number array; `viewBox[3]` is page height in PDF units).
- [ ] **Step 4: Record findings** (exact `pagerendered` detail shape + how to read page height) in a comment atop `src/viewer/boot.ts`, then commit.

```bash
git add src/viewer/boot.ts
git commit -m "docs: record verified pdf.js eventBus hook points"
```

> If `e.source.canvas` or `viewport` differ in the installed version, adjust here once; later tasks consume the `getPageCanvas(e)` helper (Task 2.3) and `viewportFor()` (Task 4.3), so fixes stay localized.

---

## Phase 1 — Color mapping core (pure, fully TDD)

### Task 1.1: Theme constants

**Files:**
- Create: `src/viewer/theme/themes.ts`

- [ ] **Step 1: Implement**

```ts
export type RGB = readonly [number, number, number]; // 0..255

export interface ThemeColors {
  /** target for white (lightest) input */
  bg: RGB;
  /** target for black (darkest) input */
  text: RGB;
}

export const SMART_DARK: ThemeColors = { bg: [30, 31, 34], text: [215, 212, 204] };   // #1e1f22 / #d7d4cc
export const WARM_SEPIA: ThemeColors = { bg: [34, 32, 27], text: [221, 210, 191] };    // #22201b / #ddd2bf

export type ThemeName = "smartDark" | "warmSepia" | "off";

export const THEMES: Record<Exclude<ThemeName, "off">, ThemeColors> = {
  smartDark: SMART_DARK,
  warmSepia: WARM_SEPIA,
};
```

- [ ] **Step 2: Commit**

```bash
git add src/viewer/theme/themes.ts
git commit -m "feat: theme color constants (smart dark, warm sepia)"
```

### Task 1.2: Pixel color-mapping function (TDD)

**Files:**
- Create: `src/viewer/theme/color-map.ts`
- Test: `test/color-map.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from "vitest";
import { mapPixel, SAT_LOW, SAT_HIGH } from "../src/viewer/theme/color-map";
import { SMART_DARK } from "../src/viewer/theme/themes";

const near = (a: number, b: number, tol = 3) => Math.abs(a - b) <= tol;
const eqRGB = (got: readonly number[], exp: readonly number[], tol = 3) =>
  got.every((v, i) => near(v, exp[i]!, tol));

describe("mapPixel", () => {
  it("maps white background to theme bg", () => {
    const out = mapPixel(255, 255, 255, SMART_DARK, 0);
    expect(eqRGB(out, SMART_DARK.bg)).toBe(true);
  });

  it("maps black text to theme text", () => {
    const out = mapPixel(0, 0, 0, SMART_DARK, 0);
    expect(eqRGB(out, SMART_DARK.text)).toBe(true);
  });

  it("maps mid grey to a value between bg and text", () => {
    const out = mapPixel(128, 128, 128, SMART_DARK, 0);
    // between bg(30) and text(215) on each channel
    expect(out[0]).toBeGreaterThan(SMART_DARK.bg[0]);
    expect(out[0]).toBeLessThan(SMART_DARK.text[0]);
  });

  it("passes a saturated yellow highlight through nearly unchanged", () => {
    const out = mapPixel(255, 242, 122, SMART_DARK, 0.7);
    expect(eqRGB(out, [255, 242, 122], 12)).toBe(true);
  });

  it("keeps a dark glyph dark when its neighborhood is colored (text on highlight)", () => {
    // dark pixel (low own saturation) but high local saturation => stays dark, not inverted to light
    const out = mapPixel(20, 20, 20, SMART_DARK, 0.7);
    expect(out[0]).toBeLessThan(60);
  });

  it("exposes ordered saturation thresholds", () => {
    expect(SAT_LOW).toBeLessThan(SAT_HIGH);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run test/color-map.test.ts`
Expected: FAIL — `mapPixel` not found.

- [ ] **Step 3: Implement `src/viewer/theme/color-map.ts`**

```ts
import type { RGB, ThemeColors } from "./themes";

export const SAT_LOW = 0.12;  // below: treat as grayscale (invert)
export const SAT_HIGH = 0.28; // above: treat as colored (pass through)

function rgbToSL(r: number, g: number, b: number): { s: number; l: number } {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return { s, l };
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function mix3(a: RGB, b: RGB, t: number): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

/**
 * Map one pixel for dark mode.
 * @param localSaturation saturation (0..1) of the pixel's neighborhood — lets dark glyphs
 *   inside a colored highlight stay dark instead of inverting to light.
 */
export function mapPixel(
  r: number, g: number, b: number,
  theme: ThemeColors,
  localSaturation: number,
): [number, number, number] {
  const { s, l } = rgbToSL(r, g, b);

  // text-in-color rule: dark, low-saturation glyph sitting in a colored region -> keep dark
  if (localSaturation > SAT_HIGH && s < SAT_LOW && l < 0.5) {
    return [r, g, b];
  }

  // grayscale mapping: white(l=1)->bg, black(l=0)->text
  const gray = mix3(theme.bg, theme.text, 1 - l);
  // colored passthrough
  const colored: [number, number, number] = [r, g, b];

  const t = smoothstep(SAT_LOW, SAT_HIGH, s); // 0 grayscale .. 1 colored
  return mix3(gray, colored, t);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run test/color-map.test.ts`
Expected: PASS (all 6).

- [ ] **Step 5: Commit**

```bash
git add src/viewer/theme/color-map.ts test/color-map.test.ts
git commit -m "feat: pixel color-mapping with highlight preservation (TDD)"
```

---

## Phase 2 — Applying the theme to pages

### Task 2.1: 2D-canvas fallback application

**Files:**
- Create: `src/viewer/theme/canvas2d.ts`

This uses the *same* `mapPixel` logic, so its correctness is already covered by Task 1.2 tests. It also computes the low-res local-saturation map used by the text-in-color rule.

- [ ] **Step 1: Implement**

```ts
import type { ThemeColors } from "./themes";
import { mapPixel } from "./color-map";

/** Downsample saturation into an NxN grid so each pixel can read its neighborhood saturation cheaply. */
function buildSaturationMap(data: Uint8ClampedArray, w: number, h: number, grid = 48): Float32Array {
  const map = new Float32Array(grid * grid);
  const counts = new Uint32Array(grid * grid);
  for (let y = 0; y < h; y++) {
    const gy = Math.min(grid - 1, (y * grid / h) | 0);
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = data[i]!, g = data[i + 1]!, b = data[i + 2]!;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const s = max === 0 ? 0 : (max - min) / max;
      const gi = Math.min(grid - 1, (x * grid / w) | 0) + gy * grid;
      map[gi]! += s; counts[gi]!++;
    }
  }
  for (let i = 0; i < map.length; i++) map[i] = counts[i] ? map[i]! / counts[i]! : 0;
  return map;
}

export function applyTheme2D(canvas: HTMLCanvasElement, theme: ThemeColors): void {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  const { width: w, height: h } = canvas;
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const grid = 48;
  const sat = buildSaturationMap(d, w, h, grid);
  for (let y = 0; y < h; y++) {
    const gy = Math.min(grid - 1, (y * grid / h) | 0) * grid;
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const local = sat[Math.min(grid - 1, (x * grid / w) | 0) + gy]!;
      const [nr, ng, nb] = mapPixel(d[i]!, d[i + 1]!, d[i + 2]!, theme, local);
      d[i] = nr; d[i + 1] = ng; d[i + 2] = nb;
    }
  }
  ctx.putImageData(img, 0, 0);
}
```

- [ ] **Step 2: Typecheck**

Run: `pnpm typecheck`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/theme/canvas2d.ts
git commit -m "feat: 2D-canvas theme application with local saturation map"
```

### Task 2.2: WebGL2 shader application

**Files:**
- Create: `src/viewer/theme/shader.ts`

The GLSL fragment shader mirrors `mapPixel`. It samples a downscaled saturation texture for the local-saturation term. Output is drawn to an offscreen canvas, then composited back over the page canvas.

- [ ] **Step 1: Implement**

```ts
import type { ThemeColors } from "./themes";
import { SAT_LOW, SAT_HIGH } from "./color-map";

const VERT = `#version 300 es
in vec2 p; out vec2 uv;
void main(){ uv = (p + 1.0) * 0.5; uv.y = 1.0 - uv.y; gl_Position = vec4(p,0.0,1.0); }`;

const FRAG = `#version 300 es
precision highp float;
in vec2 uv; out vec4 o;
uniform sampler2D page;     // rendered page
uniform sampler2D satmap;   // low-res local saturation
uniform vec3 bg; uniform vec3 txt;
uniform float satLow; uniform float satHigh;
float sat(vec3 c){ float mx=max(c.r,max(c.g,c.b)); float mn=min(c.r,min(c.g,c.b)); return mx<=0.0?0.0:(mx-mn)/mx; }
float light(vec3 c){ return (max(c.r,max(c.g,c.b))+min(c.r,min(c.g,c.b)))*0.5; }
void main(){
  vec3 c = texture(page, uv).rgb;
  float s = sat(c); float l = light(c);
  float local = texture(satmap, uv).r;
  if(local > satHigh && s < satLow && l < 0.5){ o = vec4(c,1.0); return; } // keep dark glyph in colored region
  vec3 gray = mix(bg, txt, 1.0 - l);
  float t = smoothstep(satLow, satHigh, s);
  o = vec4(mix(gray, c, t), 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const sh = gl.createShader(type)!; gl.shaderSource(sh, src); gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
  return sh;
}

export class ShaderEngine {
  private gl: WebGL2RenderingContext;
  private prog: WebGLProgram;
  private out: HTMLCanvasElement;
  constructor() {
    this.out = document.createElement("canvas");
    const gl = this.out.getContext("webgl2");
    if (!gl) throw new Error("no-webgl2");
    this.gl = gl;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) ?? "link");
    this.prog = prog;
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  }

  /** Render `src` recolored into `src` (in place) using the given theme + low-res saturation grid. */
  apply(src: HTMLCanvasElement, theme: ThemeColors, satGrid: Float32Array, grid: number): void {
    const gl = this.gl;
    this.out.width = src.width; this.out.height = src.height;
    gl.viewport(0, 0, src.width, src.height);
    gl.useProgram(this.prog);

    // page texture from the source canvas
    const tPage = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tPage);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);

    // saturation texture (single channel via R32F)
    const tSat = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tSat);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, grid, grid, 0, gl.RED, gl.FLOAT, satGrid);

    gl.uniform1i(gl.getUniformLocation(this.prog, "page"), 0);
    gl.uniform1i(gl.getUniformLocation(this.prog, "satmap"), 1);
    gl.uniform3f(gl.getUniformLocation(this.prog, "bg"), theme.bg[0]/255, theme.bg[1]/255, theme.bg[2]/255);
    gl.uniform3f(gl.getUniformLocation(this.prog, "txt"), theme.text[0]/255, theme.text[1]/255, theme.text[2]/255);
    gl.uniform1f(gl.getUniformLocation(this.prog, "satLow"), SAT_LOW);
    gl.uniform1f(gl.getUniformLocation(this.prog, "satHigh"), SAT_HIGH);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // composite result back onto the page canvas
    const ctx = src.getContext("2d");
    ctx?.drawImage(this.out, 0, 0);
  }
}
```

- [ ] **Step 2: Typecheck**

Run: `pnpm typecheck`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/theme/shader.ts
git commit -m "feat: WebGL2 shader engine mirroring color-map logic"
```

### Task 2.3: Theme engine — orchestrate per-page application + fallback

**Files:**
- Create: `src/viewer/theme/theme-engine.ts`

- [ ] **Step 1: Implement**

```ts
import { THEMES, type ThemeName } from "./themes";
import { applyTheme2D } from "./canvas2d";
import { ShaderEngine } from "./shader";

const GRID = 48;

function buildSatGrid(canvas: HTMLCanvasElement): Float32Array {
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  const { width: w, height: h } = canvas;
  const d = ctx.getImageData(0, 0, w, h).data;
  const map = new Float32Array(GRID * GRID);
  const counts = new Uint32Array(GRID * GRID);
  for (let y = 0; y < h; y++) {
    const gy = Math.min(GRID - 1, (y * GRID / h) | 0) * GRID;
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const max = Math.max(d[i]!, d[i + 1]!, d[i + 2]!), min = Math.min(d[i]!, d[i + 1]!, d[i + 2]!);
      const s = max === 0 ? 0 : (max - min) / max;
      const gi = Math.min(GRID - 1, (x * GRID / w) | 0) + gy;
      map[gi]! += s; counts[gi]!++;
    }
  }
  for (let i = 0; i < map.length; i++) map[i] = counts[i] ? map[i]! / counts[i]! : 0;
  return map;
}

export class ThemeEngine {
  private theme: ThemeName;
  private shader: ShaderEngine | null = null;
  private useShader = true;
  /** keep originals so toggling to "off" / re-theming doesn't require pdf.js re-render */
  private originals = new WeakMap<HTMLCanvasElement, ImageData>();

  constructor(initial: ThemeName) {
    this.theme = initial;
    try { this.shader = new ShaderEngine(); } catch { this.useShader = false; }
  }

  setTheme(theme: ThemeName, pages: HTMLCanvasElement[]): void {
    this.theme = theme;
    for (const c of pages) this.applyToPage(c);
  }

  applyToPage(canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    // cache the pristine render once
    if (!this.originals.has(canvas)) {
      this.originals.set(canvas, ctx.getImageData(0, 0, canvas.width, canvas.height));
    } else {
      ctx.putImageData(this.originals.get(canvas)!, 0, 0); // restore before re-theming
    }
    if (this.theme === "off") return;
    const theme = THEMES[this.theme];
    if (this.useShader && this.shader) {
      try { this.shader.apply(canvas, theme, buildSatGrid(canvas), GRID); return; }
      catch { this.useShader = false; } // fall through on first failure
    }
    applyTheme2D(canvas, theme);
  }
}

/** Localized canvas accessor — single place to adjust if pdf.js changes its event shape (see Task 0.4). */
export function getPageCanvas(evt: { source?: { canvas?: HTMLCanvasElement } }): HTMLCanvasElement | null {
  return evt.source?.canvas ?? null;
}
```

- [ ] **Step 2: Typecheck**

Run: `pnpm typecheck`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/theme/theme-engine.ts
git commit -m "feat: theme engine with original caching, fallback, theme toggle"
```

### Task 2.4: Wire theme engine into boot + manual verify

**Files:**
- Modify: `src/viewer/boot.ts`

- [ ] **Step 1: Implement boot wiring**

```ts
import { ThemeEngine, getPageCanvas } from "./theme/theme-engine";
import type { ThemeName } from "./theme/themes";

declare const PDFViewerApplication: {
  eventBus: { on(name: string, cb: (e: any) => void): void };
};

const engine = new ThemeEngine("smartDark");
const pages = new Set<HTMLCanvasElement>();

function start() {
  PDFViewerApplication.eventBus.on("pagerendered", (e) => {
    const canvas = getPageCanvas(e);
    if (!canvas) return;
    pages.add(canvas);
    engine.applyToPage(canvas);
  });
  // expose a temporary console hook for verification
  (window as any).__setTheme = (t: ThemeName) => engine.setTheme(t, [...pages]);
}

if (typeof PDFViewerApplication !== "undefined") start();
else window.addEventListener("webviewerloaded", start);
```

- [ ] **Step 2: Build + reload + verify**

Run: `pnpm build`
Then reload the unpacked extension, open a PDF.
Expected:
  - Pages render in **Smart Dark** (dark grey bg, off-white text).
  - A colored highlight in the PDF **keeps its color**; text on it stays dark.
  - In console: `__setTheme("warmSepia")` re-themes instantly; `__setTheme("off")` restores original; `__setTheme("smartDark")` returns to dark.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/boot.ts
git commit -m "feat: apply dark theme to each rendered page via eventBus"
```

---

## Phase 3 — Document identity, settings & highlight storage (pure, TDD)

### Task 3.1: Document content hash (TDD)

**Files:**
- Create: `src/viewer/highlight/doc-hash.ts`
- Test: `test/doc-hash.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from "vitest";
import { hashPdf } from "../src/viewer/highlight/doc-hash";

const bytes = (s: string) => new TextEncoder().encode(s);

describe("hashPdf", () => {
  it("returns a 64-char hex string", async () => {
    const h = await hashPdf(bytes("%PDF-1.4 hello"));
    expect(h).toMatch(/^[0-9a-f]{64}$/);
  });
  it("is deterministic", async () => {
    const a = await hashPdf(bytes("same"));
    const b = await hashPdf(bytes("same"));
    expect(a).toBe(b);
  });
  it("differs for different content", async () => {
    const a = await hashPdf(bytes("one"));
    const b = await hashPdf(bytes("two"));
    expect(a).not.toBe(b);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run test/doc-hash.test.ts`
Expected: FAIL — `hashPdf` not found.

- [ ] **Step 3: Implement**

```ts
/** Content fingerprint of a PDF. Hashes length + up to the first 256 KB so large files stay fast. */
export async function hashPdf(bytes: Uint8Array): Promise<string> {
  const head = bytes.subarray(0, 256 * 1024);
  const lenTag = new TextEncoder().encode(`:${bytes.byteLength}`);
  const buf = new Uint8Array(head.byteLength + lenTag.byteLength);
  buf.set(head, 0);
  buf.set(lenTag, head.byteLength);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run test/doc-hash.test.ts`
Expected: PASS (3).

- [ ] **Step 5: Commit**

```bash
git add src/viewer/highlight/doc-hash.ts test/doc-hash.test.ts
git commit -m "feat: PDF content hash for document identity (TDD)"
```

### Task 3.2: Highlight model + coordinate transforms (TDD)

**Files:**
- Create: `src/viewer/highlight/highlight-model.ts`
- Test: `test/highlight-model.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from "vitest";
import { pdfRectToScreen, screenRectToPdf, type PdfRect, type Viewport } from "../src/viewer/highlight/highlight-model";

// PDF space: origin bottom-left, y up. Viewport: origin top-left, y down.
const vp: Viewport = { scale: 2, pageHeightPdf: 800 };

describe("coordinate transforms", () => {
  it("round-trips a rect pdf->screen->pdf", () => {
    const r: PdfRect = { x0: 100, y0: 200, x1: 300, y1: 260 };
    const screen = pdfRectToScreen(r, vp);
    const back = screenRectToPdf(screen, vp);
    for (const k of ["x0", "y0", "x1", "y1"] as const) {
      expect(Math.abs(back[k] - r[k])).toBeLessThan(1e-6);
    }
  });
  it("scales by viewport scale", () => {
    const s = pdfRectToScreen({ x0: 0, y0: 0, x1: 10, y1: 10 }, vp);
    expect(s.width).toBeCloseTo(20); // 10 * scale(2)
  });
  it("flips the y axis", () => {
    // a rect at the top of the page (high pdf-y) maps near screen top (small screen-y)
    const s = pdfRectToScreen({ x0: 0, y0: 790, x1: 10, y1: 800, }, vp);
    expect(s.top).toBeCloseTo(0); // (800 - 800) * scale
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run test/highlight-model.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
export interface PdfRect { x0: number; y0: number; x1: number; y1: number; } // pdf points, y-up
export interface ScreenRect { left: number; top: number; width: number; height: number; }
export interface Viewport { scale: number; pageHeightPdf: number; }

export type HighlightColor = "yellow" | "green" | "pink" | "blue";

export interface Highlight {
  id: string;
  page: number;        // 1-based
  rects: PdfRect[];    // multiple line-boxes for a multi-line selection
  color: HighlightColor;
  note?: string;
  createdAt: number;
}

export function pdfRectToScreen(r: PdfRect, vp: Viewport): ScreenRect {
  const left = Math.min(r.x0, r.x1) * vp.scale;
  const right = Math.max(r.x0, r.x1) * vp.scale;
  // y-up pdf -> y-down screen
  const topPdf = Math.max(r.y0, r.y1);
  const bottomPdf = Math.min(r.y0, r.y1);
  const top = (vp.pageHeightPdf - topPdf) * vp.scale;
  const bottom = (vp.pageHeightPdf - bottomPdf) * vp.scale;
  return { left, top, width: right - left, height: bottom - top };
}

export function screenRectToPdf(s: ScreenRect, vp: Viewport): PdfRect {
  const x0 = s.left / vp.scale;
  const x1 = (s.left + s.width) / vp.scale;
  const topPdf = vp.pageHeightPdf - s.top / vp.scale;
  const bottomPdf = vp.pageHeightPdf - (s.top + s.height) / vp.scale;
  return { x0, y0: bottomPdf, x1, y1: topPdf };
}

export const COLOR_HEX: Record<HighlightColor, string> = {
  yellow: "#fff27a", green: "#9cf08a", pink: "#ff9ec4", blue: "#8ecbff",
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run test/highlight-model.test.ts`
Expected: PASS (3).

- [ ] **Step 5: Commit**

```bash
git add src/viewer/highlight/highlight-model.ts test/highlight-model.test.ts
git commit -m "feat: highlight model + pdf<->screen coordinate transforms (TDD)"
```

### Task 3.3: Settings store (TDD)

**Files:**
- Create: `src/common/settings.ts`
- Test: `test/settings.test.ts`

- [ ] **Step 1: Write the failing test** (mocks `chrome.storage.local`)

```ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { getSettings, saveSettings, DEFAULTS } from "../src/common/settings";

function mockChrome() {
  const store: Record<string, unknown> = {};
  (globalThis as any).chrome = {
    storage: { local: {
      get: vi.fn(async (k: string) => ({ [k]: store[k] })),
      set: vi.fn(async (obj: Record<string, unknown>) => Object.assign(store, obj)),
    } },
  };
}

describe("settings", () => {
  beforeEach(mockChrome);
  it("returns defaults when nothing stored", async () => {
    const s = await getSettings();
    expect(s).toEqual(DEFAULTS);
  });
  it("persists and merges partial updates", async () => {
    await saveSettings({ defaultTheme: "warmSepia" });
    const s = await getSettings();
    expect(s.defaultTheme).toBe("warmSepia");
    expect(s.toolbarPinned).toBe(DEFAULTS.toolbarPinned); // untouched
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run test/settings.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
import type { ThemeName } from "../viewer/theme/themes";
import type { HighlightColor } from "../viewer/highlight/highlight-model";

export interface Settings {
  defaultTheme: ThemeName;
  toolbarPinned: boolean;
  fileAccess: boolean;
  highlightColors: HighlightColor[];
}

export const DEFAULTS: Settings = {
  defaultTheme: "smartDark",
  toolbarPinned: false,
  fileAccess: false,
  highlightColors: ["yellow", "green", "pink", "blue"],
};

const KEY = "settings";

export async function getSettings(): Promise<Settings> {
  const got = await chrome.storage.local.get(KEY);
  return { ...DEFAULTS, ...(got[KEY] as Partial<Settings> | undefined) };
}

export async function saveSettings(patch: Partial<Settings>): Promise<void> {
  const next = { ...(await getSettings()), ...patch };
  await chrome.storage.local.set({ [KEY]: next });
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run test/settings.test.ts`
Expected: PASS (2).

- [ ] **Step 5: Commit**

```bash
git add src/common/settings.ts test/settings.test.ts
git commit -m "feat: typed settings store over chrome.storage.local (TDD)"
```

### Task 3.4: Highlight store (TDD)

**Files:**
- Create: `src/viewer/highlight/highlight-store.ts`
- Test: `test/highlight-store.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { HighlightStore } from "../src/viewer/highlight/highlight-store";
import type { Highlight } from "../src/viewer/highlight/highlight-model";

function mockChrome() {
  const store: Record<string, unknown> = {};
  (globalThis as any).chrome = {
    storage: { local: {
      get: vi.fn(async (k: string) => ({ [k]: store[k] })),
      set: vi.fn(async (obj: Record<string, unknown>) => Object.assign(store, obj)),
    } },
  };
}
const hl = (id: string): Highlight => ({
  id, page: 1, color: "yellow", createdAt: 0,
  rects: [{ x0: 0, y0: 0, x1: 1, y1: 1 }],
});

describe("HighlightStore", () => {
  beforeEach(mockChrome);
  it("adds and retrieves highlights for a doc", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    expect((await s.get("docA")).map((h) => h.id)).toEqual(["h1"]);
  });
  it("isolates highlights by document hash", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    await s.add("docB", hl("h2"));
    expect(await s.get("docB")).toHaveLength(1);
    expect((await s.get("docB"))[0]!.id).toBe("h2");
  });
  it("removes a highlight by id", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    await s.add("docA", hl("h2"));
    await s.remove("docA", "h1");
    expect((await s.get("docA")).map((h) => h.id)).toEqual(["h2"]);
  });
  it("exports and imports round-trip", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    const json = await s.exportAll();
    mockChrome(); // wipe
    const s2 = new HighlightStore();
    await s2.importAll(json);
    expect((await s2.get("docA"))[0]!.id).toBe("h1");
  });
  it("skips corrupt records on read", async () => {
    const s = new HighlightStore();
    (globalThis as any).chrome.storage.local.set({ "hl:docA": [{ bad: true }, hl("ok")] });
    expect((await s.get("docA")).map((h) => h.id)).toEqual(["ok"]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run test/highlight-store.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
import type { Highlight, PdfRect } from "./highlight-model";

const PREFIX = "hl:";

function isValid(h: unknown): h is Highlight {
  if (typeof h !== "object" || h === null) return false;
  const x = h as Record<string, unknown>;
  return typeof x.id === "string" && typeof x.page === "number" && typeof x.color === "string"
    && Array.isArray(x.rects) && (x.rects as PdfRect[]).every((r) =>
      r && typeof r.x0 === "number" && typeof r.y0 === "number"
        && typeof r.x1 === "number" && typeof r.y1 === "number");
}

export class HighlightStore {
  private key(docHash: string) { return PREFIX + docHash; }

  async get(docHash: string): Promise<Highlight[]> {
    const got = await chrome.storage.local.get(this.key(docHash));
    const raw = got[this.key(docHash)];
    return Array.isArray(raw) ? raw.filter(isValid) : [];
  }

  async add(docHash: string, h: Highlight): Promise<void> {
    const list = await this.get(docHash);
    list.push(h);
    await chrome.storage.local.set({ [this.key(docHash)]: list });
  }

  async remove(docHash: string, id: string): Promise<void> {
    const list = (await this.get(docHash)).filter((h) => h.id !== id);
    await chrome.storage.local.set({ [this.key(docHash)]: list });
  }

  async exportAll(): Promise<string> {
    const all = await chrome.storage.local.get(null);
    const out: Record<string, Highlight[]> = {};
    for (const [k, v] of Object.entries(all)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) out[k] = v.filter(isValid);
    }
    return JSON.stringify(out);
  }

  async importAll(json: string): Promise<void> {
    const parsed = JSON.parse(json) as Record<string, unknown>;
    const toSet: Record<string, Highlight[]> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) toSet[k] = v.filter(isValid);
    }
    await chrome.storage.local.set(toSet);
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run test/highlight-store.test.ts`
Expected: PASS (5).

- [ ] **Step 5: Commit**

```bash
git add src/viewer/highlight/highlight-store.ts test/highlight-store.test.ts
git commit -m "feat: highlight store keyed by doc hash, defensive reads (TDD)"
```

---

## Phase 4 — Highlighter UI & overlay

### Task 4.1: Overlay layer — render stored highlights on a page

**Files:**
- Create: `src/viewer/highlight/overlay-layer.ts`

Renders highlights as absolutely-positioned divs in a per-page overlay, using the coordinate transform from Task 3.2. The highlight color sits *behind* the pdf.js text layer so selected text remains crisp; on the dark page the highlight box is full color and the theme engine's text-in-color rule keeps the glyphs dark.

- [ ] **Step 1: Implement**

```ts
import { pdfRectToScreen, COLOR_HEX, type Highlight, type Viewport } from "./highlight-model";

/** Ensures an overlay div exists over the given page container and returns it. */
function ensureOverlay(pageDiv: HTMLElement): HTMLElement {
  let el = pageDiv.querySelector<HTMLElement>(".pdr-overlay");
  if (!el) {
    el = document.createElement("div");
    el.className = "pdr-overlay";
    Object.assign(el.style, {
      position: "absolute", inset: "0", pointerEvents: "none", zIndex: "1",
    });
    pageDiv.appendChild(el);
  }
  return el;
}

export function renderHighlights(
  pageDiv: HTMLElement,
  highlights: Highlight[],
  vp: Viewport,
  onClick: (id: string) => void,
): void {
  const overlay = ensureOverlay(pageDiv);
  overlay.replaceChildren();
  for (const h of highlights) {
    for (const r of h.rects) {
      const box = pdfRectToScreen(r, vp);
      const div = document.createElement("div");
      Object.assign(div.style, {
        position: "absolute",
        left: `${box.left}px`, top: `${box.top}px`,
        width: `${box.width}px`, height: `${box.height}px`,
        background: COLOR_HEX[h.color], opacity: "0.9",
        borderRadius: "2px", mixBlendMode: "normal",
        pointerEvents: "auto", cursor: "pointer",
      });
      div.title = "Click to remove highlight";
      div.addEventListener("click", () => onClick(h.id));
      overlay.appendChild(div);
    }
  }
}
```

- [ ] **Step 2: Typecheck**

Run: `pnpm typecheck`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/highlight/overlay-layer.ts
git commit -m "feat: per-page highlight overlay rendering"
```

### Task 4.2: Highlighter — create highlights from text selection

**Files:**
- Create: `src/viewer/highlight/highlighter.ts`

Reads the current selection from pdf.js's text layer, converts each client rect into a `PdfRect` using the page element geometry + viewport, and persists via `HighlightStore`. A small color popover chooses the color.

- [ ] **Step 1: Implement**

```ts
import { HighlightStore } from "./highlight-store";
import { screenRectToPdf, COLOR_HEX, type Highlight, type HighlightColor, type Viewport } from "./highlight-model";

interface PageRef { div: HTMLElement; pageNumber: number; viewport: Viewport; }

/** Maps a DOM page element to its PDF page number + viewport (provided by boot from pdf.js). */
export type PageLookup = (node: Node) => PageRef | null;

export class Highlighter {
  private color: HighlightColor = "yellow";
  enabled = false;
  constructor(
    private store: HighlightStore,
    private docHash: () => string,
    private lookup: PageLookup,
    private onChange: (pageNumber: number) => void,
    private genId: () => string,
  ) {}

  setColor(c: HighlightColor) { this.color = c; }

  /** Call on mouseup within the viewer. */
  async captureSelection(): Promise<void> {
    if (!this.enabled) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const page = this.lookup(range.startContainer);
    if (!page) return;

    const pageBox = page.div.getBoundingClientRect();
    const rects = [...range.getClientRects()].map((cr) =>
      screenRectToPdf(
        { left: cr.left - pageBox.left, top: cr.top - pageBox.top, width: cr.width, height: cr.height },
        page.viewport,
      ),
    );
    if (rects.length === 0) return;

    const h: Highlight = {
      id: this.genId(), page: page.pageNumber, color: this.color, createdAt: Date.now(), rects,
    };
    await this.store.add(this.docHash(), h);
    sel.removeAllRanges();
    this.onChange(page.pageNumber);
  }
}

export function makeId(): string {
  return "h_" + crypto.randomUUID();
}

export { COLOR_HEX };
```

- [ ] **Step 2: Typecheck**

Run: `pnpm typecheck`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/highlight/highlighter.ts
git commit -m "feat: create highlights from text selection"
```

### Task 4.3: Wire highlighter + overlay into boot; load on open

**Files:**
- Modify: `src/viewer/boot.ts`

- [ ] **Step 1: Extend boot** — add document hashing, page lookup, render-on-render, and selection capture.

```ts
import { ThemeEngine, getPageCanvas } from "./theme/theme-engine";
import type { ThemeName } from "./theme/themes";
import { hashPdf } from "./highlight/doc-hash";
import { HighlightStore } from "./highlight/highlight-store";
import { Highlighter, makeId } from "./highlight/highlighter";
import { renderHighlights } from "./highlight/overlay-layer";
import type { Viewport } from "./highlight/highlight-model";

declare const PDFViewerApplication: any;

const engine = new ThemeEngine("smartDark");
const store = new HighlightStore();
const pages = new Set<HTMLCanvasElement>();
let docHash = "";

function viewportFor(pageView: any): Viewport {
  return { scale: pageView.viewport.scale, pageHeightPdf: pageView.viewport.viewBox[3] };
}

function pageRefFromNode(node: Node) {
  const el = (node instanceof Element ? node : node.parentElement)?.closest(".page") as HTMLElement | null;
  if (!el) return null;
  const pageNumber = Number(el.getAttribute("data-page-number"));
  const pv = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
  return { div: el, pageNumber, viewport: viewportFor(pv) };
}

const highlighter = new Highlighter(
  store, () => docHash, pageRefFromNode,
  (pageNumber) => refreshPage(pageNumber), makeId,
);

async function refreshPage(pageNumber: number) {
  const pv = PDFViewerApplication.pdfViewer.getPageView(pageNumber - 1);
  if (!pv?.div) return;
  const all = (await store.get(docHash)).filter((h) => h.page === pageNumber);
  renderHighlights(pv.div, all, viewportFor(pv), async (id) => {
    await store.remove(docHash, id);
    refreshPage(pageNumber);
  });
}

async function start() {
  // hash the loaded document for highlight identity
  PDFViewerApplication.eventBus.on("documentloaded", async () => {
    const data: Uint8Array = await PDFViewerApplication.pdfDocument.getData();
    docHash = await hashPdf(data);
  });

  PDFViewerApplication.eventBus.on("pagerendered", (e: any) => {
    const canvas = getPageCanvas(e);
    if (canvas) { pages.add(canvas); engine.applyToPage(canvas); }
    if (docHash) refreshPage(e.pageNumber);
  });

  document.addEventListener("mouseup", () => void highlighter.captureSelection());

  // temporary console hooks (replaced by toolbar in Phase 5)
  (window as any).__setTheme = (t: ThemeName) => engine.setTheme(t, [...pages]);
  (window as any).__highlight = (on: boolean) => (highlighter.enabled = on);
}

if (typeof PDFViewerApplication !== "undefined" && PDFViewerApplication.eventBus) start();
else window.addEventListener("webviewerloaded", start);
```

- [ ] **Step 2: Build + reload + manual verify**

Run: `pnpm build`, reload extension, open a PDF.
Expected:
  - `__highlight(true)` in console, then select text → a colored highlight appears and **persists across reload** of the same PDF.
  - Clicking a highlight removes it.
  - Open a *different* PDF → its highlights are separate; reopen the first → highlights return.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/boot.ts
git commit -m "feat: wire highlighter + overlay + per-document persistence"
```

---

## Phase 5 — Toolbar, popup, error handling

### Task 5.1: Toolbar — theme toggle + highlighter controls

**Files:**
- Create: `src/viewer/ui/toolbar.ts`
- Modify: `src/viewer/boot.ts` (replace console hooks with toolbar)

- [ ] **Step 1: Implement `toolbar.ts`**

```ts
import { COLOR_HEX, type HighlightColor } from "../highlight/highlight-model";
import type { ThemeName } from "../theme/themes";

export interface ToolbarHandlers {
  onTheme: (t: ThemeName) => void;
  onToggleHighlight: (on: boolean) => void;
  onColor: (c: HighlightColor) => void;
}

const THEME_CYCLE: ThemeName[] = ["smartDark", "warmSepia", "off"];
const THEME_LABEL: Record<ThemeName, string> = {
  smartDark: "🌙 Smart Dark", warmSepia: "🟤 Warm Sepia", off: "☀️ Off",
};

export function mountToolbar(handlers: ToolbarHandlers, colors: HighlightColor[]): void {
  const host = document.querySelector("#toolbarViewerRight") ?? document.body;

  let themeIdx = 0;
  const themeBtn = document.createElement("button");
  themeBtn.className = "toolbarButton";
  themeBtn.style.cssText = "width:auto;padding:0 8px;color:#d7d4cc";
  themeBtn.textContent = THEME_LABEL[THEME_CYCLE[0]!];
  themeBtn.addEventListener("click", () => {
    themeIdx = (themeIdx + 1) % THEME_CYCLE.length;
    const t = THEME_CYCLE[themeIdx]!;
    themeBtn.textContent = THEME_LABEL[t];
    handlers.onTheme(t);
  });

  const hlBtn = document.createElement("button");
  hlBtn.className = "toolbarButton";
  hlBtn.style.cssText = "width:auto;padding:0 8px;color:#d7d4cc";
  hlBtn.textContent = "✏️ Highlight";
  let on = false;
  hlBtn.addEventListener("click", () => { on = !on; hlBtn.style.background = on ? "#3a3d42" : ""; handlers.onToggleHighlight(on); });

  const swatches = document.createElement("span");
  for (const c of colors) {
    const dot = document.createElement("button");
    dot.title = c;
    dot.style.cssText = `width:16px;height:16px;border-radius:50%;margin:0 2px;border:1px solid #0006;background:${COLOR_HEX[c]}`;
    dot.addEventListener("click", () => handlers.onColor(c));
    swatches.appendChild(dot);
  }

  host.prepend(themeBtn, hlBtn, swatches);
}
```

- [ ] **Step 2: Replace console hooks in `boot.ts`**

Remove the two `(window as any).__*` lines from `start()` and instead:

```ts
import { mountToolbar } from "./ui/toolbar";
import { getSettings } from "../common/settings";
// ...inside start(), after listeners are registered:
const settings = await getSettings();
engine.setTheme(settings.defaultTheme, [...pages]);
mountToolbar({
  onTheme: (t) => engine.setTheme(t, [...pages]),
  onToggleHighlight: (on) => (highlighter.enabled = on),
  onColor: (c) => highlighter.setColor(c),
}, settings.highlightColors);
```

(Change `start` registration to `void start()` since it is now async.)

- [ ] **Step 3: Build + reload + verify**

Run: `pnpm build`, reload, open a PDF.
Expected: toolbar shows a theme button (cycles Smart Dark → Warm Sepia → Off), a Highlight toggle, and color swatches. Selecting text while Highlight is on creates a highlight in the chosen color.

- [ ] **Step 4: Commit**

```bash
git add src/viewer/ui/toolbar.ts src/viewer/boot.ts
git commit -m "feat: in-viewer toolbar for theme + highlighter"
```

### Task 5.2: Error card for load failures

**Files:**
- Create: `src/viewer/ui/error-card.ts`
- Modify: `src/viewer/boot.ts`

- [ ] **Step 1: Implement `error-card.ts`**

```ts
export function showErrorCard(message: string, originalUrl: string | null): void {
  const card = document.createElement("div");
  card.style.cssText =
    "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:9999;background:#1e1f22;color:#d7d4cc;font:14px Segoe UI,system-ui";
  const inner = document.createElement("div");
  inner.style.cssText = "max-width:420px;text-align:center;padding:24px;border:1px solid #ffffff14;border-radius:12px";
  // Build with textContent — the error message comes from pdf.js and must not be treated as HTML (XSS).
  const title = document.createElement("h2");
  title.style.cssText = "margin:0 0 8px";
  title.textContent = "Couldn't open this PDF";
  const body = document.createElement("p");
  body.style.cssText = "opacity:.8;margin:0 0 16px";
  body.textContent = message;
  inner.append(title, body);
  const retry = document.createElement("button");
  retry.textContent = "Retry";
  retry.style.cssText = "margin:0 6px;padding:6px 14px;border-radius:8px;border:0;background:#3a3d42;color:#d7d4cc;cursor:pointer";
  retry.onclick = () => location.reload();
  inner.appendChild(retry);
  if (originalUrl) {
    const open = document.createElement("a");
    open.textContent = "Open original";
    open.href = originalUrl;
    open.style.cssText = "margin:0 6px;color:#8ecbff";
    inner.appendChild(open);
  }
  card.appendChild(inner);
  document.body.appendChild(card);
}
```

- [ ] **Step 2: Hook pdf.js error events in `boot.ts`** (inside `start()`):

```ts
import { showErrorCard } from "./ui/error-card";
// ...
const fileParam = new URLSearchParams(location.search).get("file");
PDFViewerApplication.eventBus.on("documenterror", (e: any) =>
  showErrorCard(e?.message ?? "The file could not be loaded.", fileParam));
```

> Note: the vendored viewer page receives `?file=` because the `viewer/viewer.html` shim forwards the query string. pdf.js reads it natively.

- [ ] **Step 3: Build + reload + verify**

Run: `pnpm build`, reload, navigate to a broken PDF URL (e.g. a 404 `.pdf`).
Expected: dark error card with Retry + Open original.

- [ ] **Step 4: Commit**

```bash
git add src/viewer/ui/error-card.ts src/viewer/boot.ts
git commit -m "feat: dark error card for PDF load failures"
```

### Task 5.3: Popup settings

**Files:**
- Modify: `src/popup/popup.html`, `src/popup/popup.ts`

- [ ] **Step 1: Implement `popup.html`**

```html
<!doctype html>
<html><head><meta charset="utf-8"><style>
  body{width:260px;font:13px Segoe UI,system-ui;padding:14px;background:#1e1f22;color:#d7d4cc;margin:0}
  h3{margin:0 0 10px} label{display:flex;justify-content:space-between;align-items:center;margin:8px 0}
  select,button{background:#2a2d31;color:#d7d4cc;border:1px solid #ffffff1a;border-radius:6px;padding:4px 6px}
  .row{margin:10px 0} button{cursor:pointer;width:100%;margin-top:6px}
</style></head>
<body>
  <h3>PDF Dark Reader</h3>
  <label>Default theme
    <select id="theme">
      <option value="smartDark">Smart Dark</option>
      <option value="warmSepia">Warm Sepia</option>
      <option value="off">Off</option>
    </select>
  </label>
  <label>Pin toolbar <input type="checkbox" id="pinned"></label>
  <label>Allow local files (file://) <input type="checkbox" id="fileAccess"></label>
  <div class="row">
    <button id="export">Export highlights (.json)</button>
    <button id="import">Import highlights…</button>
    <input type="file" id="importFile" accept="application/json" hidden>
  </div>
  <script type="module" src="popup.js"></script>
</body></html>
```

- [ ] **Step 2: Implement `popup.ts`**

```ts
import { getSettings, saveSettings } from "../common/settings";
import { HighlightStore } from "../viewer/highlight/highlight-store";
import type { ThemeName } from "../viewer/theme/themes";

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const store = new HighlightStore();

async function init() {
  const s = await getSettings();
  ($("theme") as HTMLSelectElement).value = s.defaultTheme;
  ($("pinned") as HTMLInputElement).checked = s.toolbarPinned;
  ($("fileAccess") as HTMLInputElement).checked = s.fileAccess;

  $("theme").addEventListener("change", (e) =>
    saveSettings({ defaultTheme: (e.target as HTMLSelectElement).value as ThemeName }));
  $("pinned").addEventListener("change", (e) =>
    saveSettings({ toolbarPinned: (e.target as HTMLInputElement).checked }));
  $("fileAccess").addEventListener("change", (e) => {
    const value = (e.target as HTMLInputElement).checked;
    void saveSettings({ fileAccess: value });
    chrome.runtime.sendMessage({ type: "set-file-access", value });
  });

  $("export").addEventListener("click", async () => {
    const json = await store.exportAll();
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    await chrome.downloads?.download?.({ url, filename: "pdf-dark-reader-highlights.json" })
      ?? Object.assign(document.createElement("a"), { href: url, download: "highlights.json" }).click();
  });
  $("import").addEventListener("click", () => ($("importFile") as HTMLInputElement).click());
  $("importFile").addEventListener("change", async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) { await store.importAll(await file.text()); alert("Highlights imported."); }
  });
}
void init();
```

- [ ] **Step 3: Add `downloads` permission** to `src/manifest.json` permissions array: `["declarativeNetRequest", "storage", "downloads"]`.

- [ ] **Step 4: Build + reload + verify**

Run: `pnpm build`, reload.
Expected: clicking the toolbar icon opens the dark popup; changing default theme persists (new PDFs open in it); file:// toggle enables local PDF redirect; export downloads a JSON; import restores highlights.

- [ ] **Step 5: Commit**

```bash
git add src/popup/popup.html src/popup/popup.ts src/manifest.json
git commit -m "feat: popup settings (default theme, file access, export/import)"
```

### Task 5.4: Toolbar auto-hide + keyboard theme shortcut

**Files:**
- Modify: `src/viewer/boot.ts`, `src/viewer/ui/toolbar.ts`

- [ ] **Step 1: Add auto-hide + shortcut in `boot.ts`** (inside `start()`), honoring `settings.toolbarPinned`:

```ts
// auto-hide toolbar unless pinned
if (!settings.toolbarPinned) {
  const bar = document.querySelector<HTMLElement>(".toolbar");
  let lastY = 0;
  document.addEventListener("scroll", () => {
    const y = PDFViewerApplication.pdfViewer.container.scrollTop;
    if (bar) bar.style.transform = y > lastY && y > 80 ? "translateY(-100%)" : "translateY(0)";
    lastY = y;
  }, true);
  if (bar) bar.style.transition = "transform .2s ease";
}

// keyboard: "d" cycles theme
let kbThemeIdx = 0;
const cycle: ThemeName[] = ["smartDark", "warmSepia", "off"];
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "d" && !e.ctrlKey && !e.metaKey &&
      !(e.target instanceof HTMLInputElement)) {
    kbThemeIdx = (kbThemeIdx + 1) % cycle.length;
    engine.setTheme(cycle[kbThemeIdx]!, [...pages]);
  }
});
```

- [ ] **Step 2: Build + reload + verify**

Run: `pnpm build`, reload, open a long PDF.
Expected: scrolling down hides the toolbar, up reveals it (unless "Pin toolbar" is on); pressing `d` cycles themes.

- [ ] **Step 3: Commit**

```bash
git add src/viewer/boot.ts
git commit -m "feat: auto-hide toolbar + keyboard theme cycle"
```

---

## Phase 6 — Integration corpus & cross-browser smoke test

### Task 6.1: Assemble a test PDF corpus

**Files:**
- Create: `test/corpus/README.md`

- [ ] **Step 1: Create `test/corpus/README.md`** listing the required fixtures and where to obtain/create them (kept out of git if large; documented for the tester):

```markdown
# Manual integration corpus

Place (or link) these PDFs and run the checks in Task 6.2:

1. `vector.pdf`     — a normal text PDF (e.g. an arXiv paper).
2. `scanned.pdf`    — a scanned/image-only PDF (photographed pages).
3. `highlighted.pdf`— a PDF with highlights already baked in (highlight some text in any PDF editor and save).
4. `password.pdf`   — a password-protected PDF.
5. `large.pdf`      — 500+ pages.
```

- [ ] **Step 2: Commit**

```bash
git add test/corpus/README.md
git commit -m "test: document manual integration corpus"
```

### Task 6.2: Cross-browser manual verification checklist

**Files:**
- Create: `test/corpus/CHECKLIST.md`

- [ ] **Step 1: Create the checklist** and execute it in **both Edge and Chrome** (load unpacked in each).

```markdown
# Integration checklist (run in Edge AND Chrome)

For each browser, load `dist/` unpacked, then:

- [ ] vector.pdf: renders Smart Dark; text crisp; white→dark grey; black→off-white.
- [ ] vector.pdf: a yellow/green region (if any) keeps its color; text on it stays dark.
- [ ] scanned.pdf: page image is darkened gracefully (not pure inverted/muddy).
- [ ] highlighted.pdf: pre-existing highlights keep their original color.
- [ ] Theme toggle cycles Smart Dark → Warm Sepia → Off with no reload; `d` key works.
- [ ] Highlighter: select text → highlight appears in chosen color; persists across reload.
- [ ] Click a highlight → it is removed.
- [ ] Different PDF has separate highlights; reopening restores the right set.
- [ ] password.pdf: pdf.js prompts; on correct password it renders themed.
- [ ] large.pdf: scrolling stays smooth; memory stable; pages theme as they appear.
- [ ] Broken URL (404 .pdf): dark error card with Retry + Open original.
- [ ] Popup: default theme change applies to next opened PDF; export/import works.
- [ ] file:// PDF: with file access ON (popup), local PDF opens themed; with OFF, normal behavior.
```

- [ ] **Step 2: Fix any failures** by returning to the relevant task, then re-run.

- [ ] **Step 3: Commit**

```bash
git add test/corpus/CHECKLIST.md
git commit -m "test: cross-browser integration checklist"
```

### Task 6.3: README + load instructions

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write `README.md`** with: what it is, `pnpm install && pnpm build`, how to load unpacked in Edge/Chrome, how to run `pnpm test`, and the known v1 limitation (highlights are local; burn-into-PDF is future work).

- [ ] **Step 2: Run the full test suite**

Run: `pnpm test`
Expected: all unit suites pass (color-map, doc-hash, highlight-model, highlight-store, settings).

- [ ] **Step 3: Typecheck + build clean**

Run: `pnpm typecheck && pnpm build`
Expected: no errors; `dist/` complete.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: README with build + load-unpacked instructions"
```

---

## Self-review (completed during planning)

**Spec coverage check:**
- Replace native viewer (redirect) → Task 0.2. ✓
- Build on pdf.js → Tasks 0.3, 0.4. ✓
- WebGL shader smart-dark, preserve highlights, scanned support → Tasks 1.2, 2.2, 2.3. ✓
- Text-in-highlight legibility (local saturation) → Tasks 1.2, 2.1, 2.3. ✓
- Themes Smart Dark / Warm Sepia / Off, toggle without reload → Tasks 1.1, 2.3, 5.1. ✓
- WebGL fallback chain → Task 2.3 (`useShader` → 2D). ✓
- Highlighter, dark-text-on-color → Tasks 4.1, 4.2. ✓
- Storage in `chrome.storage.local` keyed by content hash, PDF-space coords → Tasks 3.1, 3.2, 3.4. ✓
- Burn-into-PDF reserved (data model = page + PDF rects + color) → Task 3.2 model. ✓ (export only in v1; pdf-lib deferred)
- Clean UI, auto-hide, keyboard, popup settings → Tasks 5.1, 5.3, 5.4. ✓
- Error handling (password, broken, file://, large, WebGL) → Tasks 2.3, 5.2, 5.3, 6.2. ✓
- Testing: color-map unit, store round-trip, integration corpus, Edge+Chrome smoke → Tasks 1.2, 3.4, 6.1–6.2. ✓

**Type consistency:** `ThemeName`, `ThemeColors`, `Highlight`, `PdfRect`, `Viewport`, `HighlightColor`, `HighlightStore` (`get`/`add`/`remove`/`exportAll`/`importAll`), `getPageCanvas`, `mapPixel` signatures are used identically across tasks. ✓

**Placeholder scan:** No TBD/TODO; every code step contains full implementations. ✓

## Future work (deferred per spec §10)
- Burn highlights into the PDF via `pdf-lib` ("Save a copy with highlights"). The Task 3.2 data model already provides page + PDF-space rects + color.
- Highlights side panel / navigation.
- Store publishing (Edge Add-ons, Chrome Web Store).
- Cross-device sync; additional annotation types.
