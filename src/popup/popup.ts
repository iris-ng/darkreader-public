import { getSettings, saveSettings } from "../common/settings";
import { HighlightStore } from "../viewer/highlight/highlight-store";
import type { ThemeName } from "../viewer/theme/themes";

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const store = new HighlightStore();

async function init() {
  const s = await getSettings();
  ($("theme") as HTMLSelectElement).value = s.defaultTheme;
  ($("pinned") as HTMLInputElement).checked = s.toolbarPinned;
  ($("fileAccess") as HTMLInputElement).checked = s.fileAccess;

  $("theme").addEventListener("change", (e) =>
    saveSettings({ defaultTheme: (e.target as HTMLSelectElement).value as ThemeName }));
  $("pinned").addEventListener("change", (e) =>
    saveSettings({ toolbarPinned: (e.target as HTMLInputElement).checked }));
  $("fileAccess").addEventListener("change", (e) => {
    const value = (e.target as HTMLInputElement).checked;
    void saveSettings({ fileAccess: value });
    chrome.runtime.sendMessage({ type: "set-file-access", value });
  });

  $("export").addEventListener("click", async () => {
    const json = await store.exportAll();
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    await chrome.downloads.download({ url, filename: "pdf-dark-reader-highlights.json" });
  });
  $("import").addEventListener("click", () => ($("importFile") as HTMLInputElement).click());
  $("importFile").addEventListener("change", async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) { await store.importAll(await file.text()); alert("Highlights imported."); }
  });
}
void init();
