import type { ThemeName } from "../viewer/theme/themes";
import type { HighlightColor } from "../viewer/highlight/highlight-model";

export interface Settings {
  defaultTheme: ThemeName;
  toolbarPinned: boolean;
  fileAccess: boolean;
  highlightColors: HighlightColor[];
  /** Dark-mode background lightness (0..1). See ThemeEngine. */
  darkShade: number;
  /** Dark-mode text brightness (0..1). See ThemeEngine. */
  darkTextLevel: number;
}

export const DEFAULTS: Settings = {
  defaultTheme: "smartDark",
  // Pinned by default: the toolbar stays put. Auto-hide-on-scroll is opt-in via
  // the popup (a vanishing-on-scroll bar read as "not sticky").
  toolbarPinned: true,
  fileAccess: false,
  highlightColors: ["yellow", "green", "pink", "blue"],
  darkShade: 0.12,
  darkTextLevel: 0.88,
};

const KEY = "settings";

export async function getSettings(): Promise<Settings> {
  const got = await chrome.storage.local.get(KEY);
  return { ...DEFAULTS, ...(got[KEY] as Partial<Settings> | undefined) };
}

export async function saveSettings(patch: Partial<Settings>): Promise<void> {
  const next = { ...(await getSettings()), ...patch };
  await chrome.storage.local.set({ [KEY]: next });
}
