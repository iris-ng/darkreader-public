export interface PdfRect { x0: number; y0: number; x1: number; y1: number; } // pdf points, y-up
export interface ScreenRect { left: number; top: number; width: number; height: number; }
/**
 * `pageHeightPdf` is the page's viewBox top edge (pdf.js `viewport.viewBox[3]`,
 * i.e. yMax) used as the y-flip reference: screen-top maps to yMax, screen-bottom
 * to yMin, so the round-trip holds even when a page's yMin is non-zero.
 *
 * Known v1 limitations (acceptable because highlight coords are only re-displayed
 * against the SAME viewport; absolute fidelity matters only to the deferred
 * pdf-lib burn-in): a non-zero x-origin (viewBox[0]) is not subtracted, and page
 * rotation is not modelled. Highlights therefore round-trip and display correctly
 * on un-rotated pages but their stored x is offset by xMin when xMin !== 0.
 */
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
