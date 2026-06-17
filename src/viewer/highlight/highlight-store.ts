import type { Highlight, PdfRect } from "./highlight-model";

const PREFIX = "hl:";

function isValid(h: unknown): h is Highlight {
  if (typeof h !== "object" || h === null) return false;
  const x = h as Record<string, unknown>;
  return typeof x.id === "string" && typeof x.page === "number" && typeof x.color === "string"
    && Array.isArray(x.rects) && (x.rects as PdfRect[]).every((r) =>
      r && typeof r.x0 === "number" && typeof r.y0 === "number"
        && typeof r.x1 === "number" && typeof r.y1 === "number");
}

export class HighlightStore {
  private key(docHash: string) { return PREFIX + docHash; }

  async get(docHash: string): Promise<Highlight[]> {
    const got = await chrome.storage.local.get(this.key(docHash));
    const raw = got[this.key(docHash)];
    return Array.isArray(raw) ? raw.filter(isValid) : [];
  }

  async add(docHash: string, h: Highlight): Promise<void> {
    const list = await this.get(docHash);
    list.push(h);
    await chrome.storage.local.set({ [this.key(docHash)]: list });
  }

  async remove(docHash: string, id: string): Promise<void> {
    const list = (await this.get(docHash)).filter((h) => h.id !== id);
    await chrome.storage.local.set({ [this.key(docHash)]: list });
  }

  async exportAll(): Promise<string> {
    const all = await chrome.storage.local.get(null);
    const out: Record<string, Highlight[]> = {};
    for (const [k, v] of Object.entries(all)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) out[k] = v.filter(isValid);
    }
    return JSON.stringify(out);
  }

  async importAll(json: string): Promise<void> {
    const parsed = JSON.parse(json) as Record<string, unknown>;
    const toSet: Record<string, Highlight[]> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) toSet[k] = v.filter(isValid);
    }
    await chrome.storage.local.set(toSet);
  }
}
