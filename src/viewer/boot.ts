import { createPdfApp, loadDocument, type PdfApp } from "./pdf-app";
import { ThemeEngine, getPageCanvas } from "./theme/theme-engine";
import type { ThemeName } from "./theme/themes";
import { hashPdf } from "./highlight/doc-hash";
import { HighlightStore } from "./highlight/highlight-store";
import { Highlighter, makeId } from "./highlight/highlighter";
import { renderHighlights } from "./highlight/overlay-layer";
import type { Viewport } from "./highlight/highlight-model";
import { mountToolbar } from "./ui/toolbar";
import { showErrorCard } from "./ui/error-card";
import { promptPassword } from "./ui/password-prompt";
import { getSettings, saveSettings } from "../common/settings";

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
let app: PdfApp;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function viewportFor(pageView: any): Viewport {
  return { scale: pageView.viewport.scale, pageHeightPdf: pageView.viewport.viewBox[3] };
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
  mountToolbar({
    onTheme: (t) => engine.setTheme(t, [...pages]),
    onToggleHighlight: (on) => { highlighter.enabled = on; },
    onColor: (c) => highlighter.setColor(c),
    onShade: (v) => { engine.setShade(v); void saveSettings({ darkShade: v }); },
    onTextLevel: (v) => { engine.setTextLevel(v); void saveSettings({ darkTextLevel: v }); },
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

  const file = new URLSearchParams(location.search).get("file");
  console.log("[PDF Dark Reader] boot loaded", { file });
  if (!file) return;
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
