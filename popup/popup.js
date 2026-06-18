// src/common/settings.ts
var DEFAULTS = {
  defaultTheme: "smartDark",
  // Pinned by default: the toolbar stays put. Auto-hide-on-scroll is opt-in via
  // the popup (a vanishing-on-scroll bar read as "not sticky").
  toolbarPinned: true,
  fileAccess: false,
  highlightColors: ["yellow", "green", "pink", "blue"],
  darkShade: 0.12,
  darkTextLevel: 0.88
};
var KEY = "settings";
async function getSettings() {
  const got = await chrome.storage.local.get(KEY);
  return { ...DEFAULTS, ...got[KEY] };
}
async function saveSettings(patch) {
  const next = { ...await getSettings(), ...patch };
  await chrome.storage.local.set({ [KEY]: next });
}

// src/viewer/highlight/highlight-store.ts
var PREFIX = "hl:";
function isValid(h) {
  if (typeof h !== "object" || h === null) return false;
  const x = h;
  return typeof x.id === "string" && typeof x.page === "number" && typeof x.color === "string" && Array.isArray(x.rects) && x.rects.every((r) => r && typeof r.x0 === "number" && typeof r.y0 === "number" && typeof r.x1 === "number" && typeof r.y1 === "number");
}
var HighlightStore = class {
  key(docHash) {
    return PREFIX + docHash;
  }
  async get(docHash) {
    const got = await chrome.storage.local.get(this.key(docHash));
    const raw = got[this.key(docHash)];
    return Array.isArray(raw) ? raw.filter(isValid) : [];
  }
  async add(docHash, h) {
    const list = await this.get(docHash);
    list.push(h);
    await chrome.storage.local.set({ [this.key(docHash)]: list });
  }
  async remove(docHash, id) {
    const list = (await this.get(docHash)).filter((h) => h.id !== id);
    await chrome.storage.local.set({ [this.key(docHash)]: list });
  }
  async exportAll() {
    const all = await chrome.storage.local.get(null);
    const out = {};
    for (const [k, v] of Object.entries(all)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) out[k] = v.filter(isValid);
    }
    return JSON.stringify(out);
  }
  async importAll(json) {
    const parsed = JSON.parse(json);
    const toSet = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) toSet[k] = v.filter(isValid);
    }
    await chrome.storage.local.set(toSet);
  }
};

// src/popup/popup.ts
var $ = (id) => document.getElementById(id);
var store = new HighlightStore();
async function init() {
  const s = await getSettings();
  $("theme").value = s.defaultTheme;
  $("pinned").checked = s.toolbarPinned;
  $("fileAccess").checked = s.fileAccess;
  $("theme").addEventListener("change", (e) => saveSettings({ defaultTheme: e.target.value }));
  $("pinned").addEventListener("change", (e) => saveSettings({ toolbarPinned: e.target.checked }));
  $("fileAccess").addEventListener("change", (e) => {
    const value = e.target.checked;
    void saveSettings({ fileAccess: value });
    chrome.runtime.sendMessage({ type: "set-file-access", value });
  });
  $("export").addEventListener("click", async () => {
    const json = await store.exportAll();
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    await chrome.downloads.download({ url, filename: "pdf-dark-reader-highlights.json" });
  });
  $("import").addEventListener("click", () => $("importFile").click());
  $("importFile").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      await store.importAll(await file.text());
      alert("Highlights imported.");
    }
  });
}
void init();
