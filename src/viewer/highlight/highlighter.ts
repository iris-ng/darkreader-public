import { HighlightStore } from "./highlight-store";
import { COLOR_HEX, type Highlight, type HighlightColor } from "./highlight-model";
import { screenRectToPdf, type PageViewportLike } from "./coords";

interface PageRef { div: HTMLElement; pageNumber: number; viewport: PageViewportLike; }

/** Maps a DOM page element to its PDF page number + viewport (provided by boot from pdf.js). */
export type PageLookup = (node: Node) => PageRef | null;

export class Highlighter {
  private color: HighlightColor = "yellow";
  enabled = false;
  constructor(
    private store: HighlightStore,
    private docHash: () => string,
    private lookup: PageLookup,
    private onChange: (pageNumber: number) => void,
    private genId: () => string,
  ) {}

  setColor(c: HighlightColor) { this.color = c; }

  /** Call on mouseup within the viewer. */
  async captureSelection(): Promise<void> {
    if (!this.enabled) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const page = this.lookup(range.startContainer);
    if (!page) return;

    const pageBox = page.div.getBoundingClientRect();
    // getClientRects() returns one rect per text-layer span, so a full line yields
    // many overlapping rects. Painted at <1 opacity they'd stack and look glaring,
    // so merge them per line into a single box first.
    const rects = coalesceByLine([...range.getClientRects()]).map((cr) =>
      screenRectToPdf(
        { left: cr.left - pageBox.left, top: cr.top - pageBox.top, width: cr.width, height: cr.height },
        page.viewport,
      ),
    );
    if (rects.length === 0) return;

    const h: Highlight = {
      id: this.genId(), page: page.pageNumber, color: this.color, createdAt: Date.now(), rects,
    };
    await this.store.add(this.docHash(), h);
    sel.removeAllRanges();
    this.onChange(page.pageNumber);
  }
}

/**
 * Merge per-span client rects into one box per text line, so multi-line highlights
 * don't stack overlapping translucent rects (which read as "glaring"). Rects are
 * grouped when they overlap vertically by more than half their height.
 */
function coalesceByLine(rects: DOMRect[]): Array<{ left: number; top: number; width: number; height: number }> {
  const valid = rects
    .filter((r) => r.width > 1 && r.height > 1)
    .sort((a, b) => a.top - b.top || a.left - b.left);
  const lines: Array<{ left: number; top: number; right: number; bottom: number }> = [];
  for (const r of valid) {
    const cur = lines[lines.length - 1];
    const overlap = cur ? Math.min(cur.bottom, r.bottom) - Math.max(cur.top, r.top) : 0;
    if (cur && overlap > 0.5 * Math.min(cur.bottom - cur.top, r.bottom - r.top)) {
      cur.left = Math.min(cur.left, r.left);
      cur.right = Math.max(cur.right, r.right);
      cur.top = Math.min(cur.top, r.top);
      cur.bottom = Math.max(cur.bottom, r.bottom);
    } else {
      lines.push({ left: r.left, top: r.top, right: r.right, bottom: r.bottom });
    }
  }
  return lines.map((l) => ({ left: l.left, top: l.top, width: l.right - l.left, height: l.bottom - l.top }));
}

export function makeId(): string {
  return "h_" + crypto.randomUUID();
}

export { COLOR_HEX };
