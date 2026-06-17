import { describe, it, expect, beforeEach, vi } from "vitest";
import { getSettings, saveSettings, DEFAULTS } from "../src/common/settings";

function mockChrome() {
  const store: Record<string, unknown> = {};
  (globalThis as any).chrome = {
    storage: { local: {
      get: vi.fn(async (k: string) => ({ [k]: store[k] })),
      set: vi.fn(async (obj: Record<string, unknown>) => Object.assign(store, obj)),
    } },
  };
}

describe("settings", () => {
  beforeEach(mockChrome);
  it("returns defaults when nothing stored", async () => {
    const s = await getSettings();
    expect(s).toEqual(DEFAULTS);
  });
  it("persists and merges partial updates", async () => {
    await saveSettings({ defaultTheme: "warmSepia" });
    const s = await getSettings();
    expect(s.defaultTheme).toBe("warmSepia");
    expect(s.toolbarPinned).toBe(DEFAULTS.toolbarPinned); // untouched
  });
});
