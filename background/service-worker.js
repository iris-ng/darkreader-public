// src/background/pdf-url.ts
var PDF_URL_FILTER = "^https?://[^?#]*\\.pdf([?#].*)?$";
var FILE_PDF_URL_FILTER = "^file://[^?#]*\\.pdf([?#].*)?$";

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

// src/background/service-worker.ts
var VIEWER_URL = chrome.runtime.getURL("viewer/viewer.html");
var RULE_IDS = [1, 2];
async function installRules(fileAccess) {
  const addRules = [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { regexSubstitution: `${VIEWER_URL}?file=\\0` }
      },
      condition: {
        regexFilter: PDF_URL_FILTER,
        resourceTypes: ["main_frame"]
      }
    }
  ];
  if (fileAccess) {
    addRules.push({
      id: 2,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { regexSubstitution: `${VIEWER_URL}?file=\\0` }
      },
      condition: {
        regexFilter: FILE_PDF_URL_FILTER,
        resourceTypes: ["main_frame"]
      }
    });
  }
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: RULE_IDS,
      addRules
    });
  } catch (e) {
    console.error("[PDF Dark Reader] failed to install redirect rules", e);
  }
}
async function syncRules() {
  const { fileAccess } = await getSettings();
  await installRules(fileAccess);
}
chrome.runtime.onInstalled.addListener(() => void syncRules());
chrome.runtime.onStartup.addListener(() => void syncRules());
chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "set-file-access") void installRules(!!msg.value);
});
