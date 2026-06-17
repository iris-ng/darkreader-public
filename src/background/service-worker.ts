import { PDF_URL_FILTER, FILE_PDF_URL_FILTER } from "./pdf-url";
import { getSettings } from "../common/settings";

const VIEWER_URL = chrome.runtime.getURL("viewer/viewer.html");

// rule ids we own, removed-then-added so re-install is idempotent
const RULE_IDS = [1, 2];

async function installRules(fileAccess: boolean): Promise<void> {
  const addRules: chrome.declarativeNetRequest.Rule[] = [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect" as chrome.declarativeNetRequest.RuleActionType,
        redirect: { regexSubstitution: `${VIEWER_URL}?file=\\0` },
      },
      condition: {
        regexFilter: PDF_URL_FILTER,
        resourceTypes: ["main_frame"] as chrome.declarativeNetRequest.ResourceType[],
      },
    },
  ];
  if (fileAccess) {
    addRules.push({
      id: 2,
      priority: 1,
      action: {
        type: "redirect" as chrome.declarativeNetRequest.RuleActionType,
        redirect: { regexSubstitution: `${VIEWER_URL}?file=\\0` },
      },
      condition: {
        regexFilter: FILE_PDF_URL_FILTER,
        resourceTypes: ["main_frame"] as chrome.declarativeNetRequest.ResourceType[],
      },
    });
  }
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: RULE_IDS,
      addRules,
    });
  } catch (e) {
    // A rejected rule (e.g. an invalid regexFilter) would otherwise silently
    // leave us with NO redirect rule — surface it instead.
    console.error("[PDF Dark Reader] failed to install redirect rules", e);
  }
}

// Re-apply the user's stored file-access choice. A bare reload (re-install) must
// not silently drop the file:// rule the user previously enabled in the popup.
async function syncRules(): Promise<void> {
  const { fileAccess } = await getSettings();
  await installRules(fileAccess);
}

chrome.runtime.onInstalled.addListener(() => void syncRules());
chrome.runtime.onStartup.addListener(() => void syncRules());

// allow the popup to toggle file:// support live
chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "set-file-access") void installRules(!!msg.value);
});
