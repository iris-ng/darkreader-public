import * as esbuild from "esbuild";
import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = "dist";
const PDFJS = "node_modules/pdfjs-dist";

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

// 1. pdf.js runtime assets (worker is a separate Worker file; the rest are fetched at runtime).
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
