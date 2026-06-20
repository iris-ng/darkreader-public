import { describe, it, expect, vi } from "vitest";
import { deriveHighlightedName, saveHighlighted } from "../src/viewer/export/save";
import type { Highlight } from "../src/viewer/highlight/highlight-model";

const hl: Highlight = {
  id: "a", page: 1, color: "yellow", createdAt: 0,
  rects: [{ x0: 10, y0: 700, x1: 100, y1: 720 }],
};

describe("deriveHighlightedName", () => {
  it("inserts (highlighted) before .pdf", () => {
    expect(deriveHighlightedName("report.pdf")).toBe("report (highlighted).pdf");
  });
  it("handles names with extra dots and spaces", () => {
    expect(deriveHighlightedName("Q1 v2.final.pdf")).toBe("Q1 v2.final (highlighted).pdf");
  });
  it("is case-insensitive on the extension", () => {
    expect(deriveHighlightedName("A.PDF")).toBe("A (highlighted).pdf");
  });
  it("falls back to 'document' for an empty name", () => {
    expect(deriveHighlightedName("")).toBe("document (highlighted).pdf");
  });
});

describe("saveHighlighted", () => {
  it("returns 'empty' and does not download when there are no highlights", async () => {
    const download = vi.fn();
    const res = await saveHighlighted({
      getHighlights: async () => [],
      getSrcBytes: async () => new Uint8Array(),
      download, sourceName: "x.pdf",
    });
    expect(res.status).toBe("empty");
    expect(download).not.toHaveBeenCalled();
  });

  it("burns and downloads when highlights exist", async () => {
    const { PDFDocument } = await import("pdf-lib");
    const d = await PDFDocument.create(); d.addPage([600, 800]);
    const src = await d.save();
    const download = vi.fn();
    const res = await saveHighlighted({
      getHighlights: async () => [hl],
      getSrcBytes: async () => src,
      download, sourceName: "report.pdf",
    });
    expect(res.status).toBe("saved");
    expect(res.filename).toBe("report (highlighted).pdf");
    expect(res.burned).toBe(1);
    expect(download).toHaveBeenCalledOnce();
  });
});
