/** Parse a user-typed page string against the total page count.
 *  Returns a valid 1-based page clamped to [1, total], or null when the input
 *  is not a finite integer (so the caller can decline to jump). */
export function parsePageInput(raw: string, total: number): number | null {
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n)) return null;
  if (total < 1) return null;
  return Math.min(Math.max(n, 1), total);
}

export interface PageNavHandle {
  /** Update the displayed current page + total. The input value is left alone
   *  while the field is focused, so live scroll updates don't clobber typing. */
  setPage(current: number, total: number): void;
}

const INPUT_STYLE =
  "width:40px;text-align:center;background:#2b2d31;color:#d7d4cc;border:1px solid #ffffff1a;" +
  "border-radius:6px;padding:3px 4px;font:13px 'Segoe UI',system-ui";

/** Mount a `[ page ] / total` control into `host` and return a handle to update
 *  the displayed page. Typing a number + Enter (or blurring) calls `onJump`. */
export function mountPageNav(host: HTMLElement, onJump: (page: number) => void): PageNavHandle {
  let current = 0;
  let total = 0;

  const wrap = document.createElement("span");
  wrap.style.cssText = "display:inline-flex;align-items:center;gap:4px;margin-right:6px;opacity:.9";

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "numeric";
  input.disabled = true;
  input.setAttribute("aria-label", "Page number");
  input.style.cssText = INPUT_STYLE;

  const totalLabel = document.createElement("span");
  totalLabel.textContent = "/ –";

  const commit = () => {
    const p = parsePageInput(input.value, total);
    if (p === null) {
      input.value = current ? String(current) : "";
      return;
    }
    input.value = String(p);
    onJump(p);
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      input.blur(); // blur fires commit
    }
  });
  input.addEventListener("blur", commit);

  wrap.append(input, totalLabel);
  host.appendChild(wrap);

  return {
    setPage(cur, tot) {
      current = cur;
      total = tot;
      input.disabled = tot <= 0;
      totalLabel.textContent = `/ ${tot > 0 ? tot : "–"}`;
      if (document.activeElement !== input) {
        input.value = cur > 0 ? String(cur) : "";
      }
    },
  };
}
