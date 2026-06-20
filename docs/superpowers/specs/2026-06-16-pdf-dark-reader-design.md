# PDF Dark Reader — Design Spec

**Date:** 2026-06-16
**Repo:** https://github.com/iris-ng/darkreader
**Status:** Approved design — ready for implementation planning

## 1. Summary

A Manifest V3 browser extension for **Edge and Chrome** (one shared codebase) that
replaces the browser's native PDF viewer with a clean, dark-mode PDF reader built on
**Mozilla's pdf.js**. Pages are recolored by a WebGL shader so that white backgrounds
become dark grey and black text becomes soft off-white, while **highlights and colored
content keep their original colors**. The reader ships with two dark themes — **Smart
Dark** (default) and **Warm Sepia** — plus an **Off** (original) mode. It includes a
built-in **highlighter** whose highlights are stored privately on the user's machine,
with a data model deliberately shaped for a future "burn into PDF" export.

The aesthetic goal: a calm, focused reading app that is pleasing, clean, and easy on the
eye — most of the time the user sees only a dark page and their text.

## 2. Goals & non-goals

### Goals
- Graceful dark mode for PDFs opened in the browser (the native-viewer case).
- White → dark grey; black → soft off-white; **highlights/colors preserved**.
- Works on both vector and **scanned/image** PDFs.
- Default **Smart Dark** theme; **Warm Sepia** available as a toggle; **Off** for original.
- Built-in highlighter with private, persistent, per-document storage.
- Personal installation via developer-mode "Load unpacked."
- Data model forward-compatible with burning highlights into the PDF later.

### Non-goals (v1)
- Publishing to the Edge Add-ons / Chrome Web Store (possible later, same code).
- Burning highlights into the PDF file (reserved — see §7; architecture designed for it).
- Cross-device sync of highlights (covered for now by JSON export/import).
- Re-flowing, font substitution, or any change to PDF content beyond recoloring.
- Annotation types beyond highlights (pen, shapes, sticky notes).

## 3. Core constraint & key decisions

**Constraint:** Chrome and Edge render PDFs with an internal engine (PDFium) that
extensions cannot restyle via CSS or scripts. Therefore true, graceful dark mode is only
possible by **replacing the native viewer** with our own renderer.

**Consequence (accepted by user):** Edge's native highlighter/markup toolbar lives inside
that un-restylable native viewer and cannot coexist with our dark mode. We replace the
viewer and provide our own highlighter. Highlights previously **saved into** a PDF file
are not lost — pdf.js renders them and the shader preserves their color.

**Key decisions:**
1. **Build on pdf.js** (`pdfjs-dist`) rather than from scratch — reuses the viewer shell,
   text-selection layer, annotation layer, search/zoom/print, and the proven
   viewer-replacement mechanism. pdf.js is plain JavaScript and runs identically on Edge
   and Chrome (both Chromium).
2. **Recolor via a WebGL fragment shader** (canvas post-processing) — preserves
   highlights by saturation and works on scanned PDFs. (Alternatives rejected: rewriting
   pdf.js draw commands fails on scanned PDFs and is fragile; a plain CSS invert turns
   highlights muddy.)
3. **Personal "Load unpacked"** is the v1 install target; store publishing is deferred.

## 4. Architecture

Manifest V3 extension. Components:

1. **Background service worker + interception**
   Uses `declarativeNetRequest` to detect PDF navigations and redirect them to the bundled
   `viewer.html?file=<source>`. Handles http(s) PDFs by default; `file://` PDFs require the
   optional "Allow access to file URLs" toggle. Modeled on Mozilla's pdf.js extension
   interception strategy.

2. **Viewer shell (adapted pdf.js web viewer)**
   Hosts page rendering, text layer, annotation layer, search, zoom, print, thumbnails.
   Re-skinned to our dark UI (§6).

3. **Smart-dark render engine** (§5)
   Hooks each page canvas after pdf.js renders it and runs the recoloring shader. Manages
   theme selection and re-application on zoom / lazy page render.

4. **Highlighter + highlight store** (§7)
   Text-selection highlighting; overlay rendering aligned to text; persistence in
   `chrome.storage.local` keyed by a document content hash; JSON export/import.

5. **Settings & popup UI**
   Toolbar popup for defaults (theme, zoom, toolbar pinned vs auto-hide, highlight colors,
   file:// toggle, export/import).

**Data flow:** open PDF → service worker redirects to `viewer.html?file=<src>` → pdf.js
fetches and renders pages to canvas → shader recolors each page using the active theme →
document hash computed → saved highlights for that hash load and overlay.

**Permissions (minimal):** `declarativeNetRequest`, `storage`, optional file:// access.
`unlimitedStorage` is optional and not required for v1.

## 5. Smart-dark render engine

After pdf.js renders a page to canvas, a WebGL fragment shader processes each pixel once:

- Compute the pixel's **saturation** and **lightness**.
- **Low-saturation (grayscale) pixels** — background and text: remap lightness onto a dark
  ramp. Pure white → theme background (`#1e1f22` for Smart Dark); pure black → soft
  off-white text (`#d7d4cc`). Mid-greys map proportionally so anti-aliased edges stay
  smooth.
- **Saturated pixels** — highlights, figures, charts, logos: keep hue and saturation, pass
  through nearly untouched. This preserves original colors.
- **Smooth blend** across the saturation threshold to avoid hard edges where color meets
  grey.

**Text legibility inside colored regions:** a black glyph on a yellow highlight is
per-pixel "grey" and would naively flip to light text on yellow (poor contrast). The shader
samples a **low-resolution saturation map** of the page so that dark pixels sitting within
a colored neighborhood **stay dark** — yielding dark text on bright highlights.

**Themes** are target-color parameter sets for the same shader:
- **Smart Dark** (default): cool grey bg `#1e1f22`, text `#d7d4cc`.
- **Warm Sepia**: warm brown-grey bg, amber-tinted text, lower blue light.
- **Off**: original/light, shader bypassed.
Toggling re-runs the shader on cached pages instantly (no reload/re-fetch).

**Robustness:**
- **Scanned/image PDFs** work automatically — the shader operates on pixels regardless of
  source.
- **WebGL unavailable** → fall back to a 2D-canvas pixel loop (identical result, slower);
  if that is also unavailable → plain CSS invert in a labeled "limited mode."
- Re-applies on zoom and on lazily-rendered pages during scroll.

## 6. UI & look-and-feel

North star: a focused reading app, not a tool covered in buttons.

- **Slim top toolbar**, dark and low-contrast (same `#1e1f22` family — no glare). Left:
  title + page X / Y. Center: zoom −/+ and fit. Right: search, theme toggle
  (Smart Dark / Warm Sepia / Off), highlighter with color swatches, sidebar toggle.
- **Auto-hide toolbar** on scroll-down, reveal on scroll-up; pinnable via setting.
- **System UI font** (Segoe UI on Windows) for chrome; **PDF keeps its own fonts** —
  recolor only, never reflow or substitute.
- **Generous margins, soft page shadow**, subtle rounded corners — each page reads as a
  calm sheet on the dark canvas.
- **Sidebar thumbnails** (from pdf.js), also recolored dark.
- **Keyboard shortcuts:** arrows/space to page, `Ctrl+F` search, `Ctrl +/−` zoom, a key to
  cycle theme. One-time first-run hint for discoverability.
- **Toolbar popup** for defaults: default theme, default zoom, toolbar pinned vs auto-hide,
  highlight colors, file:// access, export/import highlights.

## 7. Highlighter & storage

**Creating a highlight:** select text (precise via the pdf.js text layer) → color popover
(yellow, green, pink, blue — configurable) → renders immediately as **dark text on the
bright highlight color** (matching the Smart Dark look).

**Storage:** `chrome.storage.local` — private to the user, on-machine, default ~10 MB
(~100,000 highlights at ~100 bytes each; ample). Highlights are **not** written into the
PDF file by default (originals stay untouched; no re-download of large files).

**Document identity:** a **content hash** of the PDF bytes (not the URL), so the same file
restores the same highlights regardless of source URL or filename.

**Per-highlight record:** page number, rectangles in **PDF coordinate space** (zoom/size
independent), color, optional note, timestamp.

**Management:** click a highlight to delete; optional future side panel listing all
highlights to navigate; **JSON export/import** for backup and moving machines.

**Forward compatibility — burn into PDF (reserved):** The stored record (page + PDF-space
rectangles + color) is exactly what a standard PDF "Highlight" annotation object requires.
A future "Save a copy with highlights" action will use **`pdf-lib`** to write these as real
PDF annotations and return a new `.pdf` openable/editable in any app (including Edge's
native viewer). **The v1 data model is designed so this is purely additive — no v1 schema
change required.**

**Honest limitation:** v1 highlights live in our viewer, keyed to local storage — they are
the user's, on their browser, and are not the same as annotations embedded in the PDF until
the burn-in feature ships. Highlights already baked into a PDF still display.

## 8. Error handling

- **Password-protected PDFs** → pdf.js password prompt; render + theme on success.
- **Broken / non-PDF / network failure** → dark error card ("Couldn't open this PDF") with
  retry and "open original" escape hatch.
- **`file://` with access off** → friendly inline prompt linking to the toggle.
- **Huge PDFs** → pdf.js virtualization (only visible pages render); shader runs per page on
  view; memory stays flat.
- **WebGL missing** → silent fallback chain (§5).
- **Corrupt/odd highlight data** → defensive load (bad record skipped, never crashes);
  guarded writes surface quota errors gently.

## 9. Testing

- **Unit tests on the color-mapping function** (core correctness): known pixels →
  asserted outputs — white→`#1e1f22`, black→off-white, saturated yellow stays yellow,
  dark-text-on-yellow stays dark.
- **Highlight store round-trip:** save → reload → same PDF-space position; export → import
  reproduces exactly; document hash recognizes the same file.
- **Real-PDF integration corpus** with snapshots: vector text, scanned, baked-in
  highlights, password-protected, very large.
- **Manual smoke test:** load unpacked in **both Edge and Chrome** before completion.

## 10. Future work (out of scope for v1)
- Burn highlights into the PDF via `pdf-lib` ("Save a copy with highlights").
- Highlights side panel / navigation.
- Store publishing (Edge Add-ons, Chrome Web Store) with auto-updates.
- Additional annotation types and cross-device sync.
