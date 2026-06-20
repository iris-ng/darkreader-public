import { describe, it, expect } from "vitest";
import { PDFDocument, PDFName, PDFDict } from "pdf-lib";
import { burnHighlights } from "../src/viewer/export/burn-in";
import type { Highlight } from "../src/viewer/highlight/highlight-model";

async function blankPdf(): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.addPage([600, 800]); // mediabox origin (0,0)
  return doc.save();
}

const inBounds: Highlight = {
  id: "a", page: 1, color: "yellow", createdAt: 0,
  rects: [{ x0: 50, y0: 700, x1: 200, y1: 720 }],
};
const outOfBounds: Highlight = {
  id: "b", page: 1, color: "green", createdAt: 0,
  rects: [{ x0: 5000, y0: 9000, x1: 5200, y1: 9020 }],
};

describe("burnHighlights", () => {
  it("writes one /Highlight annotation for an in-bounds highlight", async () => {
    const out = await burnHighlights(await blankPdf(), [inBounds]);
    expect(out.burned).toBe(1);
    expect(out.skipped).toBe(0);

    const doc = await PDFDocument.load(out.bytes);
    const annots = doc.getPages()[0]!.node.Annots();
    expect(annots?.size()).toBe(1);
    const dict = annots!.lookup(0, PDFDict);
    expect(dict.get(PDFName.of("Subtype"))?.toString()).toBe("/Highlight");
    expect(dict.get(PDFName.of("QuadPoints"))).toBeDefined();
    expect(dict.get(PDFName.of("AP"))).toBeDefined();
  });

  it("skips and counts an out-of-bounds highlight", async () => {
    const out = await burnHighlights(await blankPdf(), [outOfBounds]);
    expect(out.burned).toBe(0);
    expect(out.skipped).toBe(1);
    const doc = await PDFDocument.load(out.bytes);
    expect(doc.getPages()[0]!.node.Annots()?.size() ?? 0).toBe(0);
  });

  it("preserves the page count", async () => {
    const out = await burnHighlights(await blankPdf(), [inBounds]);
    const doc = await PDFDocument.load(out.bytes);
    expect(doc.getPageCount()).toBe(1);
  });
});
