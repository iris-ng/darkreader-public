import { burnHighlights } from "./burn-in";
import type { Highlight } from "../highlight/highlight-model";

export interface SaveDeps {
  getHighlights: () => Promise<Highlight[]>;
  getSrcBytes: () => Promise<Uint8Array>;
  download: (bytes: Uint8Array, filename: string) => void;
  sourceName: string;
}

export interface SaveResult {
  status: "saved" | "empty" | "error";
  filename?: string;
  burned?: number;
  skipped?: number;
}

/** "report.pdf" -> "report (highlighted).pdf"; empty -> "document (highlighted).pdf". */
export function deriveHighlightedName(name: string): string {
  const base = (name || "").trim().replace(/\.pdf$/i, "") || "document";
  return `${base} (highlighted).pdf`;
}

export async function saveHighlighted(deps: SaveDeps): Promise<SaveResult> {
  const highlights = await deps.getHighlights();
  if (highlights.length === 0) return { status: "empty" };
  try {
    const src = await deps.getSrcBytes();
    const { bytes, burned, skipped } = await burnHighlights(src, highlights);
    const filename = deriveHighlightedName(deps.sourceName);
    deps.download(bytes, filename);
    return { status: "saved", filename, burned, skipped };
  } catch (e) {
    console.error("[PDF Dark Reader] burn-in failed", e);
    return { status: "error" };
  }
}
