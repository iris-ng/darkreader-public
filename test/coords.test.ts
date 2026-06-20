import { describe, it, expect } from "vitest";
import { screenRectToPdf, pdfRectToScreen, type PageViewportLike } from "../src/viewer/highlight/coords";
import type { ScreenRect } from "../src/viewer/highlight/highlight-model";

// Build a PageViewport-like from a 2D affine transform [a,b,c,d,e,f], matching
// pdf.js: viewportPoint = [a*x + c*y + e, b*x + d*y + f]; convertToPdfPoint is
// its inverse. This lets us exercise scale, y-flip, rotation and offset.
function vpFromTransform(t: readonly [number, number, number, number, number, number]): PageViewportLike {
  const [a, b, c, d, e, f] = t;
  const det = a * d - b * c;
  return {
    convertToViewportPoint(x, y) { return [a * x + c * y + e, b * x + d * y + f]; },
    convertToPdfPoint(x, y) {
      const xt = x - e, yt = y - f;
      return [(d * xt - c * yt) / det, (-b * xt + a * yt) / det];
    },
  };
}

// Upright page: scale 2, y-down, height 800 -> [2,0,0,-2,0,1600].
const upright = vpFromTransform([2, 0, 0, -2, 0, 1600]);
// 90deg-style rotation + offset (non-zero b,c and origin).
const rotated = vpFromTransform([0, 2, 2, 0, 50, 30]);

describe("coords", () => {
  it("round-trips screen->pdf->screen on an upright page", () => {
    const s: ScreenRect = { left: 100, top: 40, width: 80, height: 24 };
    const back = pdfRectToScreen(screenRectToPdf(s, upright), upright);
    expect(back.left).toBeCloseTo(s.left);
    expect(back.top).toBeCloseTo(s.top);
    expect(back.width).toBeCloseTo(s.width);
    expect(back.height).toBeCloseTo(s.height);
  });

  it("round-trips on a rotated, offset page", () => {
    const s: ScreenRect = { left: 10, top: 10, width: 30, height: 12 };
    const back = pdfRectToScreen(screenRectToPdf(s, rotated), rotated);
    expect(back.left).toBeCloseTo(s.left);
    expect(back.top).toBeCloseTo(s.top);
    expect(back.width).toBeCloseTo(s.width);
    expect(back.height).toBeCloseTo(s.height);
  });

  it("maps screen-top to the higher pdf y (y-flip) on an upright page", () => {
    const p = screenRectToPdf({ left: 0, top: 0, width: 10, height: 10 }, upright);
    expect(Math.max(p.y0, p.y1)).toBeCloseTo(800);
  });
});
