import { PDFDocument, PDFName, PDFString } from "pdf-lib";
import { COLOR_HEX, type Highlight, type PdfRect } from "../highlight/highlight-model";

export interface BurnResult { bytes: Uint8Array; burned: number; skipped: number; }

interface Box { minX: number; minY: number; maxX: number; maxY: number; }

function hexToRgb01(hex: string): [number, number, number] {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return [1, 1, 0];
  const n = parseInt(m[1]!, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function toBox(r: PdfRect): Box {
  return {
    minX: Math.min(r.x0, r.x1), minY: Math.min(r.y0, r.y1),
    maxX: Math.max(r.x0, r.x1), maxY: Math.max(r.y0, r.y1),
  };
}

function isValid(b: Box, mb: { x: number; y: number; width: number; height: number }): boolean {
  if (![b.minX, b.minY, b.maxX, b.maxY].every(Number.isFinite)) return false;
  if (b.maxX - b.minX <= 0 || b.maxY - b.minY <= 0) return false;
  const tol = 2;
  return b.minX >= mb.x - tol && b.minY >= mb.y - tol
    && b.maxX <= mb.x + mb.width + tol && b.maxY <= mb.y + mb.height + tol;
}

/**
 * Returns the source bytes with one real /Highlight annotation per highlight
 * whose rects fall inside the page. A highlight with no placeable rect (out of
 * bounds, degenerate, or a missing page) is skipped and counted. Dark-mode is
 * NOT applied — only highlights are written.
 */
export async function burnHighlights(srcBytes: Uint8Array, highlights: Highlight[]): Promise<BurnResult> {
  const doc = await PDFDocument.load(srcBytes);
  const pages = doc.getPages();
  let burned = 0, skipped = 0;

  for (const h of highlights) {
    const page = pages[h.page - 1];
    if (!page) { skipped++; continue; }
    const mb = page.getMediaBox();
    const boxes = h.rects.map(toBox).filter((b) => isValid(b, mb));
    if (boxes.length === 0) { skipped++; continue; }

    const union: Box = {
      minX: Math.min(...boxes.map((b) => b.minX)),
      minY: Math.min(...boxes.map((b) => b.minY)),
      maxX: Math.max(...boxes.map((b) => b.maxX)),
      maxY: Math.max(...boxes.map((b) => b.maxY)),
    };
    const [r, g, b] = hexToRgb01(COLOR_HEX[h.color]);
    const bbox = [union.minX, union.minY, union.maxX, union.maxY];

    // QuadPoints per rect: UL, UR, LL, LR (8 numbers each).
    const quad: number[] = [];
    for (const x of boxes) quad.push(x.minX, x.maxY, x.maxX, x.maxY, x.minX, x.minY, x.maxX, x.minY);

    // Appearance stream: translucent multiply fill of each rect, in user space.
    const ops = ["/GS0 gs", `${r} ${g} ${b} rg`];
    for (const x of boxes) ops.push(`${x.minX} ${x.minY} ${x.maxX - x.minX} ${x.maxY - x.minY} re`);
    ops.push("f");

    const apStream = doc.context.stream(ops.join("\n"), {
      Type: "XObject", Subtype: "Form", FormType: 1, BBox: bbox,
      Resources: doc.context.obj({
        ExtGState: doc.context.obj({ GS0: doc.context.obj({ ca: 0.4, BM: "Multiply" }) }),
      }),
    });
    const apRef = doc.context.register(apStream);

    const annot = doc.context.obj({
      Type: "Annot", Subtype: "Highlight", Rect: bbox, QuadPoints: quad,
      C: [r, g, b], CA: 0.4, AP: doc.context.obj({ N: apRef }),
    });
    if (h.note) annot.set(PDFName.of("Contents"), PDFString.of(h.note));
    const annotRef = doc.context.register(annot);

    let annots = page.node.Annots();
    if (!annots) { annots = doc.context.obj([]); page.node.set(PDFName.of("Annots"), annots); }
    annots.push(annotRef);
    burned++;
  }

  const bytes = await doc.save();
  return { bytes, burned, skipped };
}
