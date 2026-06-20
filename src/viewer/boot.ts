import { createPdfApp, loadDocument, type PdfApp } from "./pdf-app";
import { ThemeEngine, getPageCanvas } from "./theme/theme-engine";
import type { ThemeName } from "./theme/themes";
import { hashPdf } from "./highlight/doc-hash";
import { HighlightStore } from "./highlight/highlight-store";
import { Highlighter, makeId } from "./highlight/highlighter";
import { renderHighlights } from "./highlight/overlay-layer";
import type { PageViewportLike } from "./highlight/coords";
import { mountToolbar } from "./ui/toolbar";
import { showErrorCard } from "./ui/error-card";
import { saveHighlighted } from "./export/save";
import { showToast } from "./ui/toast";
import { promptPassword } from "./ui/password-prompt";
import { mountPageNav } from "./ui/page-nav";
import { mountFindBar } from "./ui/find-bar";
import { getSettings, saveSettings } from "../common/settings";
import { parseFileParam } from "./file-param";

declare global {
  interface Window {
    __pdfApp?: PdfApp;
  }
}

const KB_THEME_CYCLE: ThemeName[] = ["smartDark", "warmSepia", "off"];

const engine = new ThemeEngine("smartDark");
const store = new HighlightStore();
const pages = new Set<HTMLCanvasElement>();
let docHash = "";
let sourceName = "";
let app: PdfApp;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function viewportFor(pageView: any): PageViewportLike {
  return pageView.viewport;
}

function pageRefFromNode(node: Node) {
  const start = node instanceof Element ? node : node.parentElement;
  const el = start?.closest(".page") as HTMLElement | null;
  if (!el) return null;
  const pageNumber = Number(el.getAttribute("data-page-number"));
  const pv = app.pdfViewer.getPageView(pageNumber - 1);
  if (!pv) return null;
  return { div: el, pageNumber, viewport: viewportFor(pv) };
}

const highlighter = new Highlighter(
  store,
  () => docHash,
  pageRefFromNode,
  (pageNumber) => void refreshPage(pageNumber),
  makeId,
);

/** Show the document's own title in the browser tab (like the native viewer),
 *  preferring PDF metadata, then a server-suggested filename, then the URL name. */
async function setTabTitle(file: string): Promise<void> {
  let title = "";
  try {
    const meta = await app.document?.getMetadata();
    const info = meta?.info as { Title?: unknown } | undefined;
    if (typeof info?.Title === "string") title = info.Title.trim();
  } catch {
    // metadata is optional — fall back to the filename
  }
  if (!title) {
    try {
      title = decodeURIComponent(new URL(file, location.href).pathname.split("/").pop() ?? "");
    } catch {
      // keep the default title
    }
  }
  if (title) document.title = title;
}

async function refreshPage(pageNumber: number): Promise<void> {
  const pv = app.pdfViewer.getPageView(pageNumber - 1);
  if (!pv?.div) return;
  const all = (await store.get(docHash)).filter((h) => h.page === pageNumber);
  renderHighlights(pv.div, all, viewportFor(pv), async (id) => {
    await store.remove(docHash, id);
    void refreshPage(pageNumber);
  });
}

function downloadBytes(bytes: Uint8Array, filename: string): void {
  const buf = new Uint8Array(bytes).buffer as ArrayBuffer;
  const blob = new Blob([buf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function onSaveHighlights(): Promise<void> {
  if (!app.document) return;
  const res = await saveHighlighted({
    getHighlights: () => store.get(docHash),
    getSrcBytes: () => app.document!.getData(),
    download: downloadBytes,
    sourceName,
  });
  if (res.status === "empty") {
    showToast("No highlights to save");
  } else if (res.status === "error") {
    showToast("Couldn't save highlighted PDF");
  } else {
    const n = res.burned ?? 0;
    const skip = res.skipped ? ` (${res.skipped} skipped)` : "";
    showToast(`Saved "${res.filename}" — ${n} highlight${n === 1 ? "" : "s"}${skip}`);
  }
}

async function main(): Promise<void> {
  const container = document.getElementById("viewerContainer") as HTMLDivElement;
  app = createPdfApp(container);
  window.__pdfApp = app;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.eventBus.on("pagerendered", (e: any) => {
    const canvas = getPageCanvas(e);
    if (canvas) { pages.add(canvas); engine.applyToPage(canvas); }
    if (docHash) void refreshPage(e.pageNumber);
  });

  document.addEventListener("mouseup", () => void highlighter.captureSelection());

  const settings = await getSettings();
  engine.setShade(settings.darkShade);
  engine.setTextLevel(settings.darkTextLevel);
  engine.setTheme(settings.defaultTheme, [...pages]);
  const toolbarHost = document.getElementById("toolbar") ?? document.body;
  const pageNav = mountPageNav(toolbarHost, (p) => { app.pdfViewer.currentPageNumber = p; });
  app.eventBus.on("pagesinit", () =>
    pageNav.setPage(app.pdfViewer.currentPageNumber, app.pdfViewer.pagesCount));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.eventBus.on("pagechanging", (e: any) =>
    pageNav.setPage(e.pageNumber, app.pdfViewer.pagesCount));
  const findBar = mountFindBar(document.body, {
    onSearch: (query, { findPrevious, newSearch }) =>
      app.eventBus.dispatch("find", {
        source: window,
        type: newSearch ? "" : "again",
        query,
        caseSensitive: false,
        entireWord: false,
        highlightAll: true,
        findPrevious,
        matchDiacritics: false,
      }),
    onClose: () => app.eventBus.dispatch("findbarclose", { source: window }),
  });
  // pdf.js reports counts and state on two separate events; keep the latest of
  // each and push the combined status to the bar.
  let fState = 0, fCur = 0, fTot = 0;
  const pushFindStatus = () => findBar.setStatus(fState, fCur, fTot);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.eventBus.on("updatefindmatchescount", (e: any) => {
    fCur = e.matchesCount?.current ?? 0;
    fTot = e.matchesCount?.total ?? 0;
    pushFindStatus();
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.eventBus.on("updatefindcontrolstate", (e: any) => {
    fState = e.state ?? 0;
    if (e.matchesCount) { fCur = e.matchesCount.current ?? 0; fTot = e.matchesCount.total ?? 0; }
    pushFindStatus();
  });
  mountToolbar({
    onTheme: (t) => engine.setTheme(t, [...pages]),
    onToggleHighlight: (on) => { highlighter.enabled = on; },
    onColor: (c) => highlighter.setColor(c),
    onShade: (v) => { engine.setShade(v); void saveSettings({ darkShade: v }); },
    onTextLevel: (v) => { engine.setTextLevel(v); void saveSettings({ darkTextLevel: v }); },
    onSave: () => void onSaveHighlights(),
    onToggleFind: () => findBar.toggle(),
  }, settings.highlightColors, settings.darkShade, settings.darkTextLevel);

  // auto-hide toolbar unless pinned
  if (!settings.toolbarPinned) {
    const bar = document.getElementById("toolbar");
    let lastY = 0;
    container.addEventListener("scroll", () => {
      const y = container.scrollTop;
      if (bar) bar.style.transform = y > lastY && y > 80 ? "translateY(-100%)" : "translateY(0)";
      lastY = y;
    });
  }

  // keyboard: "d" cycles theme
  let kbIdx = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "d" && !e.ctrlKey && !e.metaKey && !(e.target instanceof HTMLInputElement)) {
      kbIdx = (kbIdx + 1) % KB_THEME_CYCLE.length;
      engine.setTheme(KB_THEME_CYCLE[kbIdx]!, [...pages]);
    }
  });

  // keyboard: Ctrl/Cmd-F toggles find (override the browser's native find,
  // which can't search the canvas); Esc closes the bar when open.
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
      e.preventDefault();
      findBar.toggle();
    } else if (e.key === "Escape" && findBar.isOpen()) {
      findBar.close();
    }
  });

  const file = parseFileParam(location.search);
  console.log("[PDF Dark Reader] boot loaded", { file });
  if (!file) return;
  try {
    sourceName = decodeURIComponent(new URL(file, location.href).pathname.split("/").pop() ?? "");
  } catch {
    sourceName = "";
  }
  try {
    await loadDocument(app, file, (incorrect) => promptPassword(incorrect));
    void setTabTitle(file);
    const data = await app.document!.getData();
    docHash = await hashPdf(data);
    for (let i = 0; i < app.pdfViewer.pagesCount; i++) {
      if (app.pdfViewer.getPageView(i)?.div) void refreshPage(i + 1);
    }
  } catch (e) {
    console.error("[PDF Dark Reader] load failed", e);
    showErrorCard(e instanceof Error ? e.message : "The file could not be loaded.", file);
  }
}
void main();
