# Page navigation (jump to page) — design

**Date:** 2026-06-18
**Status:** Approved for planning

## Goal

Add a compact page-navigation control to the viewer toolbar: a numeric input
showing the current page next to the total (`[ 3 ] / 120`). Typing a page number
and pressing Enter scrolls the viewer to that page; the box tracks the current
page as the user scrolls.

Scope is deliberately minimal (YAGNI): **page box + total only** — no prev/next
arrows and no keyboard page shortcuts in this feature.

## Behavior

- **Jump:** type a number and press **Enter** (or blur the field) → the viewer
  scrolls to that page.
- **Live sync:** as the user scrolls, the box updates to the current page —
  *except* while the input is focused (being typed in), so scrolling never
  clobbers in-progress input.
- **Validation:** non-numeric or empty input does nothing and the box reverts to
  the current page; out-of-range numbers clamp to `1…N` (`0` → 1, `999` → 120).
- **Before a document loads** (the toolbar mounts before the PDF loads), the box
  is empty/disabled until the page count is known.

## Architecture & components

The pdf.js viewer already exposes everything needed: `pdfViewer.currentPageNumber`
(settable → scrolls to that page), `pdfViewer.pagesCount`, and the eventBus fires
`pagesinit` (document ready) and `pagechanging` (current page changed on scroll).

- **New `src/viewer/ui/page-nav.ts`**, two pieces:
  - `parsePageInput(raw: string, total: number): number | null` — **pure**:
    `parseInt` the raw string; return `null` if not a finite integer; otherwise
    clamp to `[1, total]`. Node-unit-tested.
  - `mountPageNav(host: HTMLElement, onJump: (page: number) => void): PageNavHandle`
    — builds the numeric input + `/ N` total label, appends them to `host`, wires
    Enter and blur to call `onJump(parsed)` (reverting the display when
    `parsePageInput` returns `null`), and returns a handle. DOM glue, verified
    manually (per the project's node-only test convention, matching `toast.ts`).
  - `interface PageNavHandle { setPage(current: number, total: number): void; }`
    — updates the displayed current/total; a no-op for the input value while the
    input is focused (so it does not overwrite typing). The total label always
    updates.
- **`boot.ts` wiring:**
  - Mount the nav into the `#toolbar` element *before* `mountToolbar(...)` so it
    sits leftmost.
  - `onJump = (page) => { app.pdfViewer.currentPageNumber = page; }`.
  - Subscribe to the eventBus: on `pagesinit` and on `pagechanging`, call
    `nav.setPage(app.pdfViewer.currentPageNumber, app.pdfViewer.pagesCount)`.
- **`toolbar.ts` is untouched** — page-nav is a self-contained sibling control,
  mirroring how `toast.ts` was added.

## Error handling

- Invalid input (`parsePageInput` → `null`): no jump; the box reverts to the
  current page on Enter/blur.
- Events arriving before a document is loaded are harmless — `setPage` is only
  called from `pagesinit`/`pagechanging`, which fire after load.

## Testing (TDD)

Pure unit tests for `parsePageInput` (`test/page-nav.test.ts`):

- in-range: `parsePageInput("3", 120)` → `3`
- clamp low: `parsePageInput("0", 120)` → `1`
- clamp high: `parsePageInput("999", 120)` → `120`
- non-numeric: `parsePageInput("abc", 120)` → `null`
- empty / whitespace: `parsePageInput("", 120)` → `null`
- decimal floors via parseInt: `parsePageInput("3.9", 120)` → `3`
- negative: `parsePageInput("-4", 120)` → `1`

The `mountPageNav` DOM behavior (jump on Enter, box tracks scrolling, focused
box not clobbered, bad input reverts) is verified manually in-browser.

## Out of scope (YAGNI)

- Prev/next arrow buttons.
- Keyboard page shortcuts (PageUp/PageDown, `[`/`]`).
- Thumbnail sidebar and highlights side panel (separately deferred).
