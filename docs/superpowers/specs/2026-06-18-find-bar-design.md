# Find bar (in-document text search) — design

**Date:** 2026-06-18
**Status:** Approved for planning

## Goal

Add a find bar that searches the PDF's text using the already-wired pdf.js
`PDFFindController`: a text input, previous/next controls, and a match-count
status. Hidden by default; toggled by a toolbar button and by Ctrl/⌘-F.

Scope is deliberately minimal (YAGNI): input + prev/next + match count + a
"no results" state, with highlight-all always on. **No** option toggles
(case-sensitive, whole-word, highlight-all).

## Behavior

- **Invocation:** a 🔍 toolbar button toggles the bar; **Ctrl/⌘-F** also opens it
  (preventing the browser's native find, which cannot search canvas text); **Esc**
  or a × button closes it.
- **Placement:** a floating bar at the top-right, just under the fixed toolbar,
  so toggling it never reflows the toolbar controls.
- **Search:** typing runs a fresh search (highlight-all on); the first match
  scrolls into view.
- **Navigate:** **Enter** = next match, **Shift+Enter** = previous; the **↑ / ↓**
  buttons do the same.
- **Open:** focuses and selects the input; if it already holds text, re-runs the
  search.
- **Close:** clears match highlights and returns to normal viewing.
- Matches render in pdf.js's own text layer; the yellow highlight overlay and the
  dark-mode CSS filter are unaffected (find uses a separate mechanism).

## Architecture & components

Mirrors the `page-nav.ts` / `toast.ts` pattern: a self-contained UI module that
knows nothing about pdf.js, with `boot.ts` owning the eventBus wiring.

The pdf.js find engine (already constructed in `pdf-app.ts`) is driven by
dispatching a `"find"` event on the eventBus and reports progress via
`"updatefindmatchescount"` and `"updatefindcontrolstate"` events. Closing is
signalled with a `"findbarclose"` event (the controller clears highlights).

- **New `src/viewer/ui/find-bar.ts`:**
  - `formatMatchCount(state: number, current: number, total: number): string` —
    **pure**: `""` when idle/empty, `"No results"` when not found, otherwise
    `"<current> / <total>"`. Node-unit-tested. (`state` is the pdf.js `FindState`
    enum: `0` FOUND, `1` NOT_FOUND, `2` WRAPPED, `3` PENDING.)
  - `mountFindBar(host: HTMLElement, handlers: FindBarHandlers): FindBarHandle`
    — builds the bar (input + ↑/↓ + status + ×), wires input/keys/buttons to the
    handlers, and returns a handle. DOM glue, verified manually.
  - `interface FindBarHandlers { onSearch(query: string, opts: { findPrevious: boolean; newSearch: boolean }): void; onClose(): void; }`
  - `interface FindBarHandle { open(): void; close(): void; toggle(): void; isOpen(): boolean; setStatus(state: number, current: number, total: number): void; }`
    — `open()` focuses+selects the input (re-running if non-empty); `setStatus`
    updates the count via `formatMatchCount`.
- **`boot.ts` wiring:**
  - Mount the bar into a container under the toolbar; add a `keydown` listener for
    Ctrl/⌘-F → `e.preventDefault()` + `findBar.toggle()`, and Esc → `findBar.close()`
    when open.
  - `onSearch(query, { findPrevious, newSearch })` → `app.eventBus.dispatch("find", {
    source: window, type: newSearch ? "" : "again", query, caseSensitive: false,
    entireWord: false, highlightAll: true, findPrevious, matchDiacritics: false })`.
  - `onClose()` → `app.eventBus.dispatch("findbarclose", { source: window })` + hide.
  - Listen to `updatefindmatchescount` and `updatefindcontrolstate` → call
    `findBar.setStatus(state, matchesCount.current, matchesCount.total)` (defaulting
    a missing `matchesCount` to `{ current: 0, total: 0 }`).
- **`toolbar.ts`:** add an `onToggleFind: () => void` handler to `ToolbarHandlers`
  and a 🔍 button (consistent with how `onSave` was added).

## Error handling

- Empty query: `formatMatchCount` returns `""`; no jump.
- A search before the document is ready can't happen — the bar's button and
  Ctrl/⌘-F are always available, but `find` events on an unloaded controller are
  no-ops (no matches, status stays empty).
- Closing always clears highlights via `findbarclose`, even mid-search.

## Testing (TDD)

Pure unit tests for `formatMatchCount` (`test/find-bar.test.ts`):

- found with matches: `formatMatchCount(0, 3, 47)` → `"3 / 47"`
- not found: `formatMatchCount(1, 0, 0)` → `"No results"`
- pending/idle with empty: `formatMatchCount(3, 0, 0)` → `""`
- found but zero total (guard): `formatMatchCount(0, 0, 0)` → `""`

The DOM/eventBus behavior (toggle via button + Ctrl/⌘-F, Esc to close, search,
next/prev incl. Shift+Enter, match-count display, clear-on-close) is verified
manually in-browser.

## Out of scope (YAGNI)

- Case-sensitive / whole-word / highlight-all toggles.
- A separate results list or per-match thumbnails.
- Replacing the toolbar's existing controls or layout.
