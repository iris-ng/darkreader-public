/** A minimal transient toast at the bottom-center of the viewer. */
export function showToast(message: string, ms = 4000): void {
  const el = document.createElement("div");
  el.textContent = message;
  el.setAttribute("role", "status");
  Object.assign(el.style, {
    position: "fixed", bottom: "16px", left: "50%", transform: "translateX(-50%)",
    background: "#2b2d31", color: "#d7d4cc", padding: "8px 14px", borderRadius: "8px",
    font: "13px 'Segoe UI', system-ui", boxShadow: "0 6px 22px rgba(0,0,0,.45)",
    zIndex: "20", maxWidth: "80vw", textAlign: "center",
    opacity: "0", transition: "opacity .15s ease",
  });
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity = "1"; });
  setTimeout(() => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 200);
  }, ms);
}
