import { describe, it, expect, beforeEach, vi } from "vitest";
import { HighlightStore } from "../src/viewer/highlight/highlight-store";
import type { Highlight } from "../src/viewer/highlight/highlight-model";

function mockChrome() {
  const store: Record<string, unknown> = {};
  (globalThis as any).chrome = {
    storage: { local: {
      get: vi.fn(async (k: string | string[] | null) => {
        if (k === null || k === undefined) return { ...store };
        if (Array.isArray(k)) return Object.fromEntries(k.map((kk) => [kk, store[kk]]));
        return { [k]: store[k] };
      }),
      set: vi.fn(async (obj: Record<string, unknown>) => Object.assign(store, obj)),
    } },
  };
}
const hl = (id: string): Highlight => ({
  id, page: 1, color: "yellow", createdAt: 0,
  rects: [{ x0: 0, y0: 0, x1: 1, y1: 1 }],
});

describe("HighlightStore", () => {
  beforeEach(mockChrome);
  it("adds and retrieves highlights for a doc", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    expect((await s.get("docA")).map((h) => h.id)).toEqual(["h1"]);
  });
  it("isolates highlights by document hash", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    await s.add("docB", hl("h2"));
    expect(await s.get("docB")).toHaveLength(1);
    expect((await s.get("docB"))[0]!.id).toBe("h2");
  });
  it("removes a highlight by id", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    await s.add("docA", hl("h2"));
    await s.remove("docA", "h1");
    expect((await s.get("docA")).map((h) => h.id)).toEqual(["h2"]);
  });
  it("exports and imports round-trip", async () => {
    const s = new HighlightStore();
    await s.add("docA", hl("h1"));
    const json = await s.exportAll();
    mockChrome(); // wipe
    const s2 = new HighlightStore();
    await s2.importAll(json);
    expect((await s2.get("docA"))[0]!.id).toBe("h1");
  });
  it("skips corrupt records on read", async () => {
    const s = new HighlightStore();
    (globalThis as any).chrome.storage.local.set({ "hl:docA": [{ bad: true }, hl("ok")] });
    expect((await s.get("docA")).map((h) => h.id)).toEqual(["ok"]);
  });
});
