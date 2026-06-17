import { describe, it, expect } from "vitest";
import { pdfRectToScreen, screenRectToPdf, type PdfRect, type Viewport } from "../src/viewer/highlight/highlight-model";

// PDF space: origin bottom-left, y up. Viewport: origin top-left, y down.
const vp: Viewport = { scale: 2, pageHeightPdf: 800 };

describe("coordinate transforms", () => {
  it("round-trips a rect pdf->screen->pdf", () => {
    const r: PdfRect = { x0: 100, y0: 200, x1: 300, y1: 260 };
    const screen = pdfRectToScreen(r, vp);
    const back = screenRectToPdf(screen, vp);
    for (const k of ["x0", "y0", "x1", "y1"] as const) {
      expect(Math.abs(back[k] - r[k])).toBeLessThan(1e-6);
    }
  });
  it("scales by viewport scale", () => {
    const s = pdfRectToScreen({ x0: 0, y0: 0, x1: 10, y1: 10 }, vp);
    expect(s.width).toBeCloseTo(20); // 10 * scale(2)
  });
  it("flips the y axis", () => {
    const s = pdfRectToScreen({ x0: 0, y0: 790, x1: 10, y1: 800 }, vp);
    expect(s.top).toBeCloseTo(0); // (800 - 800) * scale
  });
});
