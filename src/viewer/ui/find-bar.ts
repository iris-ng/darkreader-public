/** Format the find match-count status. `state` is the pdf.js FindState enum
 *  (0 FOUND, 1 NOT_FOUND, 2 WRAPPED, 3 PENDING). Returns "" when idle/empty,
 *  "No results" when not found, otherwise "<current> / <total>". */
export function formatMatchCount(state: number, current: number, total: number): string {
  if (state === 1) return "No results";
  if (total < 1) return "";
  return `${current} / ${total}`;
}

export interface FindBarHandlers {
  onSearch(query: string, opts: { findPrevious: boolean; newSearch: boolean }): void;
  onClose(): void;
}

export interface FindBarHandle {
  open(): void;
  close(): void;
  toggle(): void;
  isOpen(): boolean;
  setStatus(state: number, current: number, total: number): void;
}

const BAR_STYLE =
  "position:fixed;top:46px;right:12px;display:none;align-items:center;gap:6px;" +
  "background:#2b2d31;color:#d7d4cc;border:1px solid #ffffff1a;border-radius:8px;padding:6px 8px;" +
  "z-index:15;box-shadow:0 6px 22px rgba(0,0,0,.45);font:13px 'Segoe UI',system-ui";
const BTN =
  "background:transparent;border:1px solid #ffffff1a;border-radius:6px;color:#d7d4cc;" +
  "cursor:pointer;padding:2px 7px;font:13px 'Segoe UI',system-ui";
const INPUT_STYLE =
  "width:160px;background:#1e1f22;color:#d7d4cc;border:1px solid #ffffff1a;border-radius:6px;" +
  "padding:3px 6px;font:13px 'Segoe UI',system-ui";

/** Mount a hidden find bar into `host`. Returns a handle to open/close it and
 *  push match-count status; `handlers.onSearch`/`onClose` carry intent out
 *  (the caller wires them to the pdf.js eventBus). */
export function mountFindBar(host: HTMLElement, handlers: FindBarHandlers): FindBarHandle {
  let isOpen = false;

  const bar = document.createElement("div");
  bar.style.cssText = BAR_STYLE;

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Find in document";
  input.setAttribute("aria-label", "Find in document");
  input.style.cssText = INPUT_STYLE;

  const status = document.createElement("span");
  status.style.cssText = "min-width:54px;text-align:center;opacity:.8;font-variant-numeric:tabular-nums";

  const mkBtn = (label: string, title: string) => {
    const b = document.createElement("button");
    b.style.cssText = BTN;
    b.type = "button";
    b.textContent = label;
    b.title = title;
    return b;
  };
  const prevBtn = mkBtn("↑", "Previous match");
  const nextBtn = mkBtn("↓", "Next match");
  const closeBtn = mkBtn("✕", "Close (Esc)");

  const doSearch = (findPrevious: boolean, newSearch: boolean) =>
    handlers.onSearch(input.value, { findPrevious, newSearch });

  const close = () => {
    isOpen = false;
    bar.style.display = "none";
    status.textContent = "";
    handlers.onClose();
  };
  const open = () => {
    isOpen = true;
    bar.style.display = "inline-flex";
    status.textContent = "";
    input.focus();
    input.select();
    if (input.value) doSearch(false, true);
  };

  input.addEventListener("input", () => doSearch(false, true));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); doSearch(e.shiftKey, false); }
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(); }
  });
  prevBtn.addEventListener("click", () => doSearch(true, false));
  nextBtn.addEventListener("click", () => doSearch(false, false));
  closeBtn.addEventListener("click", close);

  bar.append(input, status, prevBtn, nextBtn, closeBtn);
  host.appendChild(bar);

  return {
    open,
    close,
    toggle: () => { if (isOpen) close(); else open(); },
    isOpen: () => isOpen,
    setStatus: (state, current, total) => { status.textContent = formatMatchCount(state, current, total); },
  };
}
