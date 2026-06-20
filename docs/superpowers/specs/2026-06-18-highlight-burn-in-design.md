# Highlight burn-in (export annotated PDF) — design

**Date:** 2026-06-18
**Status:** Approved for planning

## Goal

Let the user export a copy of the current PDF with their highlights written in as
real, selectable PDF `/Highlight` annotations. Burning is an explicit, optional
action — never automatic — triggered from a toolbar button. The original file is
never modified; a new file is produced. Dark-mode styling is display-only and is
**never** written into the exported file — only highlights are.

This is the reserved feature the v1 data model was built for: highlights are
already stored per page in PDF coordinate space, keyed by document content hash.

## Decisions (from brainstorming)

- **Burn target:** real PDF `/Highlight` annotations (QuadPoints + a generated
  appearance stream), not flattened drawn rectangles. Selectable/removable in
  other readers.
- **Coordinate fidelity — fix + detect:** upgrade highlight capture and display
  to use pdf.js's own `PageViewport` conversion (handles page rotation `/Rotate`
  and non-zero origin / crop box), so stored coordinates are true PDF default
  user-space points. At burn time, validate each rect against the page box and
  **skip + count** any highlight that can't be placed confidently. Existing
  stored highlights are discarded (no backward compatibility required, per
  project decision).
- **Delivery:** an explicit "💾 Save with highlights" toolbar button downloads
  `<original-name> (highlighted).pdf`, plus an in-viewer toast reporting how many
  highlights were burned and how many skipped.

## Architecture & components

The original PDF bytes are already available via `app.document.getData()` (the
same call boot uses for hashing). Burn-in reads those bytes, injects annotations
from the stored `Highlight[]` for the current `docHash`, and downloads the
result.

New / changed units, each independently testable:

- **`src/viewer/highlight/coords.ts` (new)** — wraps pdf.js
  `PageViewport.convertToPdfPoint(x, y)` / `convertToViewportPoint(x, y)`.
  Provides the screen↔PDF rect conversion that replaces the manual y-flip math
  currently in `highlight-model.ts`. Pure; tested against a mock viewport.
  Stores true PDF default user-space coordinates (rotation- and crop-correct).
- **`src/viewer/highlight/highlighter.ts` (modified)** — capture goes through
  `coords.ts` using the live pdf.js viewport instead of the simplified
  `{ scale, pageHeightPdf }`.
- **`src/viewer/highlight/overlay-layer.ts` (modified)** — re-display goes
  through `coords.ts` (inverse conversion) using the live viewport.
- **`src/viewer/highlight/highlight-model.ts` (modified)** — `Viewport` carrier
  and `pdfRectToScreen` / `screenRectToPdf` are replaced/retired in favor of
  `coords.ts`. `Highlight`, `PdfRect`, and `COLOR_HEX` are retained. The stale
  "limitations" comment about un-subtracted x-origin / unmodelled rotation is
  removed once the conversion is fixed.
- **`src/viewer/export/burn-in.ts` (new)** — `burnHighlights(srcBytes,
  highlights, ...) → { bytes: Uint8Array; burned: number; skipped: number }`.
  Uses **pdf-lib** (new dependency) to add one real `/Highlight` annotation per
  highlight: QuadPoints in user space, `/C` color from `COLOR_HEX`, `/CA 0.4`
  opacity, and a generated **appearance stream** (Form XObject, translucent
  fill via an ExtGState with `/ca 0.4` + `/BM /Multiply` so text shows through)
  for viewers that don't auto-render. The 0.4 fill matches the translucent feel
  of the on-screen overlay (which paints at 0.35). The detect step skips any highlight whose rect is degenerate or
  falls outside the page box and counts it in `skipped`.
- **`src/viewer/export/save.ts` (new)** — orchestrates: gather highlights for
  `docHash` → `burnHighlights` → trigger an `<a download>` object-URL download
  with the `(highlighted)` filename → return `{ burned, skipped, filename }`.
  Also owns filename derivation.
- **`src/viewer/ui/toast.ts` (new)** — minimal transient toast (appears,
  auto-dismisses).
- **`src/viewer/ui/toolbar.ts` (modified)** — add an `onSave` handler to
  `ToolbarHandlers` and a "💾 Save with highlights" button.
- **`src/viewer/boot.ts` (modified)** — wire `onSave` to `save.ts` and show the
  resulting toast. Zero highlights → toast "No highlights to save", no download.

## Data flow

**Coordinate flow (the fix).** pdf.js builds a `PageViewport` per rendered page
whose transform already encodes scale, rotation, and crop/origin.

- Capture: each coalesced line-box corner in CSS px relative to the page →
  `viewport.convertToPdfPoint(x, y)` → store user-space points.
- Display: stored user-space points → `viewport.convertToViewportPoint(x, y)` →
  CSS px.

Because stored coordinates are true user-space, burn-in transcribes them into
QuadPoints directly — no per-page transform at save time.

**Burn flow.** `save.ts` → `store.get(docHash)` → load `srcBytes` with pdf-lib →
for each highlight, look up its page and validate its rects against the page's
MediaBox (skip + count if degenerate or out of bounds) → add the `/Highlight`
annotation with appearance stream → `doc.save()` → `Blob` → `<a download>`
object-URL download → toast
`Saved "<name> (highlighted).pdf" — N highlights (M skipped)`.

## Error handling

- The whole burn is wrapped in try/catch; on failure → toast "Couldn't save
  highlighted PDF" + `console.error`; the original is never touched.
- Zero highlights for the document → early toast "No highlights to save", no
  file produced.
- A highlight whose page index has no match in the loaded document counts as
  `skipped` (defensive; should not occur because `docHash` pins the file).

## Testing (TDD)

- **`coords.ts`** — round-trip `convertToPdfPoint` → `convertToViewportPoint`
  against a mock viewport, including a rotated (90°) page and a non-zero-origin
  page; assert a rect returns to its starting screen position.
- **`burn-in.ts`** (node integration; pdf-lib runs in node) — feed a tiny
  generated PDF + a couple of highlights → re-parse the output with pdf-lib →
  assert annotation count, `/Subtype /Highlight`, color, and that QuadPoints sit
  inside the page box. Add a deliberately out-of-bounds highlight → assert it is
  reported in `skipped` and not written.
- **`save.ts`** — filename derivation (`report.pdf` → `report (highlighted).pdf`;
  handles names with extra dots and spaces) and the zero-highlights branch, with
  the download and store calls mocked.
- **`toast.ts`** — DOM unit test: appears, then auto-dismisses.

## Dependencies & build

- Add **`pdf-lib`** to `package.json` dependencies. It bundles cleanly via
  esbuild into `viewer/boot.js`, runs in node for tests, and uses no `eval`
  (MV3 CSP safe). Install via `corepack pnpm@9.15.0` with
  `NODE_OPTIONS=--use-system-ca`.

## Out of scope (YAGNI)

- Note-editing UI. The model's optional `note` is mapped to the annotation's
  `/Contents` when present, but this feature adds no UI for creating notes.
- Thumbnail sidebar and find-bar UI (separately deferred).

## Related project status

- The original extension is now manually verified on **Chrome** as well as Edge,
  closing the prior "Chrome not verified" open item.
