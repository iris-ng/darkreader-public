import type { ThemeName } from "./themes";

/** Dark background lightness (0..1). ~0.12 ≈ #1e1f22. */
export const DEFAULT_SHADE = 0.12;
/** Text brightness (0..1). 1 = pure white (often too bright); ~0.88 = comfortable off-white. */
export const DEFAULT_TEXT_LEVEL = 0.88;

const DARK_FILTER = "invert(1) hue-rotate(180deg) url(#pdr-tone)";

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/**
 * Update the shared SVG `#pdr-tone` filter (defined in viewer.html). After
 * invert+hue-rotate the page background is black (0) and text is white (1); this
 * feComponentTransfer remaps each channel from [0,1] to [shade, textLevel],
 * setting the background grey (shade) and the text brightness (textLevel)
 * INDEPENDENTLY. Because it's a clean linear remap the text stays crisp at any
 * brightness — unlike a symmetric contrast(), which couples the two and softens
 * text. Warm Sepia warms the tint.
 */
function setTone(shade: number, textLevel: number, warm: boolean): void {
  const lo = clamp(shade, 0, 0.4);
  const hi = clamp(textLevel, 0.4, 1);
  const apply = (channel: string, low: number, high: number) => {
    const el = document.querySelector(`#pdr-tone ${channel}`);
    if (el) el.setAttribute("tableValues", `${low.toFixed(3)} ${high.toFixed(3)}`);
  };
  // Neutral grey keeps a faint blue bias (matches #1e1f22). Warm lifts red, drops
  // blue, and warms the whites for the sepia feel.
  apply("feFuncR", warm ? lo + 0.04 : lo, hi);
  apply("feFuncG", lo, hi);
  apply("feFuncB", warm ? Math.max(0, lo - 0.04) : lo + 0.012, warm ? hi * 0.9 : hi);
}

export class ThemeEngine {
  private theme: ThemeName;
  private shade: number;
  private textLevel: number;

  constructor(initial: ThemeName, shade = DEFAULT_SHADE, textLevel = DEFAULT_TEXT_LEVEL) {
    this.theme = initial;
    this.shade = shade;
    this.textLevel = textLevel;
    this.refresh();
  }

  private refresh(): void {
    setTone(this.shade, this.textLevel, this.theme === "warmSepia");
  }

  setTheme(theme: ThemeName, pages: HTMLCanvasElement[]): void {
    this.theme = theme;
    this.refresh();
    for (const c of pages) this.applyToPage(c);
  }

  /** Background darkness: lower = near-black, higher = lighter grey. */
  setShade(shade: number): void {
    this.shade = shade;
    this.refresh(); // canvases share #pdr-tone, so this updates them all live
  }

  /** Text brightness: lower = dimmer off-white, higher = brighter/whiter. */
  setTextLevel(textLevel: number): void {
    this.textLevel = textLevel;
    this.refresh();
  }

  /** Toggling is just a style change — no re-render, no pixel work. */
  applyToPage(canvas: HTMLCanvasElement): void {
    canvas.style.filter = this.theme === "off" ? "" : DARK_FILTER;
  }
}

/** Localized canvas accessor — single place to adjust if pdf.js changes its event shape. */
export function getPageCanvas(evt: { source?: { canvas?: HTMLCanvasElement } }): HTMLCanvasElement | null {
  return evt.source?.canvas ?? null;
}
