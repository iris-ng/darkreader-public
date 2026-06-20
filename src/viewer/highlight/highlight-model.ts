export interface PdfRect { x0: number; y0: number; x1: number; y1: number; } // pdf points, y-up
export interface ScreenRect { left: number; top: number; width: number; height: number; }

export type HighlightColor = "yellow" | "green" | "pink" | "blue";

export interface Highlight {
  id: string;
  page: number;        // 1-based
  rects: PdfRect[];    // multiple line-boxes for a multi-line selection
  color: HighlightColor;
  note?: string;
  createdAt: number;
}

export const COLOR_HEX: Record<HighlightColor, string> = {
  yellow: "#fff27a", green: "#9cf08a", pink: "#ff9ec4", blue: "#8ecbff",
};
