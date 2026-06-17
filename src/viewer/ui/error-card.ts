const SAFE_SCHEMES = new Set(["http:", "https:", "file:"]);

/** Returns the URL only if it parses to a safe scheme; otherwise null (blocks javascript:, data:, etc.). */
function toSafeUrl(url: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url, location.href);
    return SAFE_SCHEMES.has(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
}

export function showErrorCard(message: string, originalUrl: string | null): void {
  const card = document.createElement("div");
  card.style.cssText =
    "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:9999;background:#1e1f22;color:#d7d4cc;font:14px 'Segoe UI',system-ui";
  const inner = document.createElement("div");
  inner.style.cssText = "max-width:420px;text-align:center;padding:24px;border:1px solid #ffffff14;border-radius:12px";
  // Build with textContent — the error message comes from pdf.js and must not be treated as HTML (XSS).
  const title = document.createElement("h2");
  title.style.cssText = "margin:0 0 8px";
  title.textContent = "Couldn't open this PDF";
  const body = document.createElement("p");
  body.style.cssText = "opacity:.8;margin:0 0 16px";
  body.textContent = message;
  inner.append(title, body);
  const retry = document.createElement("button");
  retry.textContent = "Retry";
  retry.style.cssText = "margin:0 6px;padding:6px 14px;border-radius:8px;border:0;background:#3a3d42;color:#d7d4cc;cursor:pointer";
  retry.onclick = () => location.reload();
  inner.appendChild(retry);
  // originalUrl comes from the attacker-controllable `?file=` param, so only link to it
  // when it parses to an http(s)/file scheme. This blocks javascript:/data:/blob: XSS.
  const safeUrl = toSafeUrl(originalUrl);
  if (safeUrl) {
    const open = document.createElement("a");
    open.textContent = "Open original";
    open.href = safeUrl;
    open.style.cssText = "margin:0 6px;color:#8ecbff";
    inner.appendChild(open);
  }
  card.appendChild(inner);
  document.body.appendChild(card);
}
