import { COLOR_HEX, type Highlight } from "./highlight-model";
import { pdfRectToScreen, type PageViewportLike } from "./coords";

/** Ensures an overlay div exists over the given page container and returns it. */
function ensureOverlay(pageDiv: HTMLElement): HTMLElement {
  let el = pageDiv.querySelector<HTMLElement>(".pdr-overlay");
  if (!el) {
    el = document.createElement("div");
    el.className = "pdr-overlay";
    Object.assign(el.style, {
      position: "absolute", inset: "0", pointerEvents: "none", zIndex: "1",
    });
    pageDiv.appendChild(el);
  }
  return el;
}

export function renderHighlights(
  pageDiv: HTMLElement,
  highlights: Highlight[],
  vp: PageViewportLike,
  onClick: (id: string) => void,
): void {
  const overlay = ensureOverlay(pageDiv);
  overlay.replaceChildren();
  for (const h of highlights) {
    for (const r of h.rects) {
      const box = pdfRectToScreen(r, vp);
      const div = document.createElement("div");
      Object.assign(div.style, {
        position: "absolute",
        left: `${box.left}px`, top: `${box.top}px`,
        width: `${box.width}px`, height: `${box.height}px`,
        // Translucent tint, not an opaque block: the page text is rasterized into
        // the canvas underneath, so the overlay must let it show through. ~0.35
        // keeps light text legible while clearly marking the colored region.
        background: COLOR_HEX[h.color], opacity: "0.35",
        borderRadius: "2px", mixBlendMode: "normal",
        pointerEvents: "auto", cursor: "pointer",
      });
      div.title = "Click to remove highlight";
      div.addEventListener("click", () => onClick(h.id));
      overlay.appendChild(div);
    }
  }
}
