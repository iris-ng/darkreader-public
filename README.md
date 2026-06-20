# PDF Dark Reader

A Manifest V3 extension for Microsoft Edge and Google Chrome that brings a clean dark mode to PDFs. It is built on [pdf.js](https://mozilla.github.io/pdf.js/): the extension redirects PDF navigations to a thin custom viewer that wraps pdf.js's rendering engine, then applies dark mode as a GPU CSS filter so text stays perfectly crisp. A `hue-rotate` keeps highlights and figures close to their original color rather than producing a harsh full inversion.

## Build

```bash
pnpm install && node build.mjs   # bundles to dist/ — then Load unpacked → dist/
```

## Features

- **Smart Dark** theme by default, plus **Warm Sepia** and **Off**.
- **Crisp text** — dark mode is a GPU filter applied in display space, so it never resamples or blurs the rendered page.
- **Background-shade slider** in the toolbar to dial the page from a lighter grey to near-black; your choice is remembered.
- Highlights and figures keep (roughly) their hue instead of being inverted.
- Works on scanned / image-only PDFs.
- Built-in highlighter with local persistence and JSON export / import.
- **💾 Save with highlights** — explicit button downloads a copy of the PDF with highlights written in as real annotations (original untouched; dark-mode not baked in).
- Opens **password-protected PDFs** (prompts for the password, re-prompts if wrong).
- The browser tab shows the PDF's own title (or filename), like the native viewer.
- Toolbar stays pinned by default; auto-hide-on-scroll is an option in the popup.
- Press `d` to cycle the theme (Smart Dark → Warm Sepia → Off).
- **🔍 Find in document** — in-document text search via a find bar (Ctrl/⌘-F), with next/previous navigation and a match count.

## Install & launch (Load unpacked)

This extension is distributed as a developer-mode "Load unpacked" build; it is not on any extension store.

1. Build the extension (no network needed):
   ```bash
   node build.mjs
   ```
   This produces the `dist/` folder.
2. Open `edge://extensions` (Edge) or `chrome://extensions` (Chrome).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `dist/` folder.
5. Open any web PDF — it loads in the dark reader automatically.

### Opening local (`file://`) PDFs

Local files need two switches, both off by default:

1. On the extension's card in `edge://extensions` / `chrome://extensions`, enable **"Allow access to file URLs"**.
2. Open the extension's **popup** and turn on **"Allow local files"**.

This preference is remembered across extension reloads.

## Development

Prerequisites: Node.js and pnpm.

```bash
pnpm install      # install dependencies
pnpm build        # bundle the extension into dist/ (runs build.mjs)
pnpm test         # run the vitest suite
pnpm typecheck    # type-check with tsc --noEmit
```

If pnpm is not on your PATH, corepack can run it without a global install:

```bash
corepack pnpm@9.15.0 <cmd>
```

The build uses esbuild to bundle the TypeScript together with pdf.js and to copy the pdf.js runtime assets (worker, cmaps, fonts, viewer CSS) into `dist/`.

## How it works

- A background service worker installs `declarativeNetRequest` rules that redirect PDF navigations to our own viewer page (`viewer/viewer.html?file=…`).
- The viewer instantiates pdf.js's `PDFViewer` engine component (there is no `PDFViewerApplication`; the app object is `window.__pdfApp`) and renders each page to a canvas.
- Dark mode applies a CSS filter — `invert(1) hue-rotate(180deg) contrast(…)` — to each page canvas. Because the filter runs on the GPU in display space, the canvas is never re-rasterized, so text stays as crisp as pdf.js drew it. `hue-rotate(180deg)` undoes the hue flip from `invert`, keeping colored content close to its original hue; the `contrast` term (driven by the toolbar slider) sets the background shade. Warm Sepia adds a `sepia()` tint.
- The highlighter stores highlight rectangles in PDF coordinate space, keyed by a content hash of the PDF, in `chrome.storage.local`. Multi-line selections are coalesced to one box per line. Highlights can be exported and imported as JSON from the popup.

## Known limitations / roadmap

- Because dark mode is a full-page filter, **color photographs render as negatives**. This is the standard trade-off of filter-based dark mode and is fine for text and scanned documents; a per-document opt-out could be added if needed.
- Highlights are stored locally inside the extension (`chrome.storage.local`), not embedded into the PDF file itself.
- "Save a copy with highlights burned in" (via pdf-lib) is planned but not yet implemented.
- A thumbnail sidebar is not in v1.
```
