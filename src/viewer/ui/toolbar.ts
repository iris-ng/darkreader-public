import { COLOR_HEX, type HighlightColor } from "../highlight/highlight-model";
import type { ThemeName } from "../theme/themes";

export interface ToolbarHandlers {
  onTheme: (t: ThemeName) => void;
  onToggleHighlight: (on: boolean) => void;
  onColor: (c: HighlightColor) => void;
  onShade: (value: number) => void;
  onTextLevel: (value: number) => void;
}

const THEME_CYCLE: ThemeName[] = ["smartDark", "warmSepia", "off"];
const THEME_LABEL: Record<ThemeName, string> = {
  smartDark: "🌙 Smart Dark", warmSepia: "🟤 Warm Sepia", off: "☀️ Off",
};

const BTN = "background:transparent;border:1px solid #ffffff1a;border-radius:6px;color:#d7d4cc;padding:3px 8px;cursor:pointer;font:13px 'Segoe UI',system-ui";

export function mountToolbar(
  handlers: ToolbarHandlers,
  colors: HighlightColor[],
  initialShade: number,
  initialTextLevel: number,
): void {
  const host = document.getElementById("toolbar") ?? document.body;

  let themeIdx = 0;
  const themeBtn = document.createElement("button");
  themeBtn.style.cssText = BTN;
  themeBtn.textContent = THEME_LABEL[THEME_CYCLE[0]!];
  themeBtn.addEventListener("click", () => {
    themeIdx = (themeIdx + 1) % THEME_CYCLE.length;
    const t = THEME_CYCLE[themeIdx]!;
    themeBtn.textContent = THEME_LABEL[t];
    handlers.onTheme(t);
  });

  // Two independent tone sliders — background darkness and text brightness. The
  // decoupled tone curve (see ThemeEngine) keeps text crisp at any combination.
  const makeSlider = (
    icon: string, title: string, min: number, max: number, value: number, onInput: (v: number) => void,
  ): HTMLLabelElement => {
    const label = document.createElement("label");
    label.title = title;
    label.style.cssText = "display:inline-flex;align-items:center;gap:5px;margin-left:4px;opacity:.85";
    const ic = document.createElement("span");
    ic.textContent = icon;
    const sl = document.createElement("input");
    sl.type = "range";
    sl.min = String(min);
    sl.max = String(max);
    sl.step = "0.01";
    sl.value = String(value);
    sl.style.cssText = "width:72px;accent-color:#8ecbff;cursor:pointer";
    sl.addEventListener("input", () => onInput(parseFloat(sl.value)));
    label.append(ic, sl);
    return label;
  };
  const shade = makeSlider("◑", "Background darkness", 0.04, 0.22, initialShade, handlers.onShade);
  const textCtl = makeSlider("A", "Text brightness", 0.6, 1.0, initialTextLevel, handlers.onTextLevel);

  const hlBtn = document.createElement("button");
  hlBtn.style.cssText = BTN;
  hlBtn.textContent = "✏️ Highlight";
  let on = false;
  hlBtn.addEventListener("click", () => {
    on = !on;
    hlBtn.style.background = on ? "#3a3d42" : "transparent";
    handlers.onToggleHighlight(on);
  });

  const swatches = document.createElement("span");
  swatches.style.cssText = "display:inline-flex;gap:4px;align-items:center;margin-left:4px";
  for (const c of colors) {
    const dot = document.createElement("button");
    dot.title = c;
    dot.style.cssText = `width:16px;height:16px;border-radius:50%;border:1px solid #0006;cursor:pointer;background:${COLOR_HEX[c]}`;
    dot.addEventListener("click", () => handlers.onColor(c));
    swatches.appendChild(dot);
  }

  host.append(themeBtn, shade, textCtl, hlBtn, swatches);
}
