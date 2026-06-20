# Page Navigation (Jump to Page) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a compact toolbar control showing the current page next to the total (`[ 3 ] / 120`) where typing a page number and pressing Enter scrolls the viewer to that page, and the box tracks the current page as the user scrolls.

**Architecture:** A self-contained `page-nav.ts` module exposes a pure `parsePageInput` (parse + clamp) and a `mountPageNav` DOM factory returning a `{ setPage }` handle. `boot.ts` mounts it leftmost in `#toolbar`, wires the jump to `pdfViewer.currentPageNumber`, and updates the display from the pdf.js `pagesinit`/`pagechanging` events. `toolbar.ts` is untouched.

**Tech Stack:** TypeScript (ESM), pdf.js viewer engine (`pdfjs-dist`), Vitest (node environment), esbuild via `node build.mjs`.

## Global Constraints

- MV3 + thin pdf.js engine component (`window.__pdfApp`, no `PDFViewerApplication`) — do not reintroduce it.
- Build: `node build.mjs`. Type-check: `corepack pnpm@9.15.0 exec tsc --noEmit`. Test: `corepack pnpm@9.15.0 exec vitest run`. If a `corepack pnpm@9.15.0 exec …` invocation fails, fall back to `npx …` and report which was used.
- Vitest `environment` is **node** (no DOM). Pure logic is unit-tested; DOM/UI glue is verified manually in-browser (matching `toast.ts`, `toolbar.ts`).
- `tsconfig` has `noUncheckedIndexedAccess: true` and `strict: true` — keep `tsc --noEmit` fully clean (hard gate).
- Scope is page box + total only — NO prev/next arrows, NO keyboard page shortcuts.
- Validation: `parseInt`; non-finite → no jump (`null`); otherwise clamp to `[1, total]`.

---

### Task 1: `page-nav.ts` — pure `parsePageInput` + `mountPageNav` DOM control

**Files:**
- Create: `src/viewer/ui/page-nav.ts`
- Test: `test/page-nav.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `parsePageInput(raw: string, total: number): number | null`
  - `interface PageNavHandle { setPage(current: number, total: number): void; }`
  - `mountPageNav(host: HTMLElement, onJump: (page: number) => void): PageNavHandle`

- [ ] **Step 1: Write the failing test**

Create `test/page-nav.test.ts` (pure function only — the module is safe to import in node because `document` is referenced only inside `mountPageNav`'s body):

```ts
import { describe, it, expect } from "vitest";
import { parsePageInput } from "../src/viewer/ui/page-nav";

describe("parsePageInput", () => {
  it("returns an in-range page", () => {
    expect(parsePageInput("3", 120)).toBe(3);
  });
  it("clamps below 1 up to 1", () => {
    expect(parsePageInput("0", 120)).toBe(1);
  });
  it("clamps above total down to total", () => {
    expect(parsePageInput("999", 120)).toBe(120);
  });
  it("returns null for non-numeric input", () => {
    expect(parsePageInput("abc", 120)).toBe(null);
  });
  it("returns null for empty or whitespace input", () => {
    expect(parsePageInput("", 120)).toBe(null);
    expect(parsePageInput("   ", 120)).toBe(null);
  });
  it("floors decimals via parseInt", () => {
    expect(parsePageInput("3.9", 120)).toBe(3);
  });
  it("clamps negatives to 1", () => {
    expect(parsePageInput("-4", 120)).toBe(1);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `corepack pnpm@9.15.0 exec vitest run test/page-nav.test.ts`
Expected: FAIL — cannot resolve `../src/viewer/ui/page-nav`.

- [ ] **Step 3: Write the implementation**

Create `src/viewer/ui/page-nav.ts`:

```ts
/** Parse a user-typed page string against the total page count.
 *  Returns a valid 1-based page clamped to [1, total], or null when the input
 *  is not a finite integer (so the caller can decline to jump). */
export function parsePageInput(raw: string, total: number): number | null {
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n)) return null;
  return Math.min(Math.max(n, 1), total);
}

export interface PageNavHandle {
  /** Update the displayed current page + total. The input value is left alone
   *  while the field is focused, so live scroll updates don't clobber typing. */
  setPage(current: number, total: number): void;
}

const INPUT_STYLE =
  "width:40px;text-align:center;background:#2b2d31;color:#d7d4cc;border:1px solid #ffffff1a;" +
  "border-radius:6px;padding:3px 4px;font:13px 'Segoe UI',system-ui";

/** Mount a `[ page ] / total` control into `host` and return a handle to update
 *  the displayed page. Typing a number + Enter (or blurring) calls `onJump`. */
export function mountPageNav(host: HTMLElement, onJump: (page: number) => void): PageNavHandle {
  let current = 0;
  let total = 0;

  const wrap = document.createElement("span");
  wrap.style.cssText = "display:inline-flex;align-items:center;gap:4px;margin-right:6px;opacity:.9";

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "numeric";
  input.disabled = true;
  input.setAttribute("aria-label", "Page number");
  input.style.cssText = INPUT_STYLE;

  const totalLabel = document.createElement("span");
  totalLabel.textContent = "/ –";

  const commit = () => {
    const p = parsePageInput(input.value, total);
    if (p === null) {
      input.value = current ? String(current) : "";
      return;
    }
    input.value = String(p);
    onJump(p);
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      input.blur(); // blur fires commit
    }
  });
  input.addEventListener("blur", commit);

  wrap.append(input, totalLabel);
  host.appendChild(wrap);

  return {
    setPage(cur, tot) {
      current = cur;
      total = tot;
      input.disabled = tot <= 0;
      totalLabel.textContent = `/ ${tot > 0 ? tot : "–"}`;
      if (document.activeElement !== input) {
        input.value = cur > 0 ? String(cur) : "";
      }
    },
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `corepack pnpm@9.15.0 exec vitest run test/page-nav.test.ts`
Expected: PASS — 7/7.

- [ ] **Step 5: Type-check**

Run: `corepack pnpm@9.15.0 exec tsc --noEmit`
Expected: no output (clean).

- [ ] **Step 6: Commit**

```bash
git add src/viewer/ui/page-nav.ts test/page-nav.test.ts
git commit -m "feat: add page-nav control (parsePageInput + mountPageNav)"
```

---

### Task 2: Wire page-nav into `boot.ts`

**Files:**
- Modify: `src/viewer/boot.ts`

**Interfaces:**
- Consumes: `mountPageNav`, `PageNavHandle` from `./ui/page-nav` (Task 1).
- Produces: nothing (entry-point wiring).

No unit test — this is DOM/event glue, verified manually (Step 5), per the project's node-only test convention. tsc + build + the full suite staying green are the automated gates.

- [ ] **Step 1: Add the import**

In `src/viewer/boot.ts`, alongside the other relative UI imports (e.g. after the `showToast` import), add:

```ts
import { mountPageNav } from "./ui/page-nav";
```

- [ ] **Step 2: Mount the nav and wire pdf.js events**

In `main()`, immediately BEFORE the `mountToolbar({ ... })` call (so the nav is appended to `#toolbar` first and therefore sits leftmost), insert:

```ts
  const toolbarHost = document.getElementById("toolbar") ?? document.body;
  const pageNav = mountPageNav(toolbarHost, (p) => { app.pdfViewer.currentPageNumber = p; });
  app.eventBus.on("pagesinit", () =>
    pageNav.setPage(app.pdfViewer.currentPageNumber, app.pdfViewer.pagesCount));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.eventBus.on("pagechanging", (e: any) =>
    pageNav.setPage(e.pageNumber, app.pdfViewer.pagesCount));
```

Rationale: `pdfViewer.currentPageNumber = p` scrolls the viewer to page `p`. `pagesinit` fires once the document is set (during `loadDocument`, which runs later in `main`), and `pagechanging` fires as the current page changes on scroll — both call `setPage` to keep the box in sync. These listeners are registered before `loadDocument`, so they catch `pagesinit`.

- [ ] **Step 3: Run the full test suite**

Run: `corepack pnpm@9.15.0 exec vitest run`
Expected: PASS — all suites green (the prior suites plus the 7 new `parsePageInput` cases). No test should break (boot.ts has no unit tests).

- [ ] **Step 4: Type-check + build**

Run: `corepack pnpm@9.15.0 exec tsc --noEmit`
Expected: no output (clean).

Run: `node build.mjs`
Expected: build succeeds; `dist/viewer/boot.js` rebuilt.

- [ ] **Step 5: Manual verification (browser)**

Load `dist/` unpacked in Edge (and Chrome). Open a multi-page PDF.
Expected:
- The toolbar shows a page box at the left with `/ N` (N = total pages); it fills to `1` once the document loads.
- Typing a page number and pressing Enter scrolls to that page; the box shows that page.
- Scrolling through the document updates the box to the current page.
- Typing while scrolled does not get clobbered by scroll updates (box only auto-updates when not focused).
- Out-of-range numbers clamp (`0` → page 1, a number above N → page N); non-numeric input reverts the box to the current page with no jump.

- [ ] **Step 6: Commit**

```bash
git add src/viewer/boot.ts
git commit -m "feat: wire jump-to-page nav into the toolbar"
```

---

## Self-Review

**1. Spec coverage:**
- Page box + total UI, leftmost in toolbar → Task 1 (`mountPageNav`) + Task 2 Step 2 (mounted before `mountToolbar`).
- Jump on Enter/blur → Task 1 (`commit` on blur; Enter triggers blur).
- Live sync via `pagechanging`, not clobbering focused input → Task 1 (`setPage` skips value update while focused) + Task 2 (event wiring).
- `pagesinit` sets initial total/current → Task 2 Step 2.
- Validation (clamp `0`→1 / `>N`→N, non-numeric/empty→null revert, decimal floor, negative→1) → Task 1 `parsePageInput` + its tests.
- Empty/disabled before load → Task 1 (`disabled = true`, `/ –`; enabled when `total > 0`).
- `toolbar.ts` untouched → only `boot.ts` modified in Task 2. No gaps.

**2. Placeholder scan:** No TBD/TODO/"handle edge cases"/"similar to Task N". All code shown in full.

**3. Type consistency:** `parsePageInput(raw: string, total: number): number | null`, `PageNavHandle { setPage(current, total): void }`, and `mountPageNav(host, onJump): PageNavHandle` are defined in Task 1 and consumed with matching signatures in Task 2 (`mountPageNav(toolbarHost, (p) => …)` → `pageNav.setPage(…)`). The `onJump` callback takes a single `number`, matching `(p) => { app.pdfViewer.currentPageNumber = p; }`. Consistent.
