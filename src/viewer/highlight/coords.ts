import type { PdfRect, ScreenRect } from "./highlight-model";

/**
 * The subset of pdf.js's PageViewport we use. Its transform already encodes
 * scale, rotation (/Rotate) and crop/origin, so converting screen<->pdf through
 * it yields true PDF default-user-space points — correct on rotated and cropped
 * pages, and directly usable as annotation coordinates at burn time.
 */
export interface PageViewportLike {
  convertToPdfPoint(x: number, y: number): readonly [number, number];
  convertToViewportPoint(x: number, y: number): readonly [number, number];
}

/** Screen rect (CSS px relative to the page) -> PDF rect (user space). */
export function screenRectToPdf(s: ScreenRect, vp: PageViewportLike): PdfRect {
  const [x0, y0] = vp.convertToPdfPoint(s.left, s.top + s.height); // bottom-left
  const [x1, y1] = vp.convertToPdfPoint(s.left + s.width, s.top);  // top-right
  return { x0, y0, x1, y1 };
}

/** PDF rect (user space) -> screen rect (CSS px relative to the page). */
export function pdfRectToScreen(r: PdfRect, vp: PageViewportLike): ScreenRect {
  const [ax, ay] = vp.convertToViewportPoint(r.x0, r.y0);
  const [bx, by] = vp.convertToViewportPoint(r.x1, r.y1);
  return {
    left: Math.min(ax, bx),
    top: Math.min(ay, by),
    width: Math.abs(bx - ax),
    height: Math.abs(by - ay),
  };
}
