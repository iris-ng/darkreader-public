// The npm `pdfjs-dist` package ships type declarations at `types/src/pdf.d.ts`
// but has no `exports`/`typesVersions` map, so TS cannot resolve the runtime
// subpath `pdfjs-dist/build/pdf.mjs` (no sibling .d.mts beside build/pdf.mjs).
// Re-export the real, shipped declarations so we keep full types (no `any`).
// (The viewer subpath `pdfjs-dist/web/pdf_viewer.mjs` already resolves via its
// sibling `pdf_viewer.d.mts`, so no shim is needed for it.)
declare module "pdfjs-dist/build/pdf.mjs" {
  export * from "pdfjs-dist/types/src/pdf.js";
}
