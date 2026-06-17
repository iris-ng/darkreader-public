/**
 * Dark password prompt for protected PDFs. Resolves with the password the user
 * enters. pdf.js calls this again (with `incorrect = true`) if the password was
 * wrong, so this can be shown repeatedly until the document opens.
 */
export function promptPassword(incorrect: boolean): Promise<string> {
  return new Promise((resolve) => {
    const card = document.createElement("div");
    card.style.cssText =
      "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:9999;background:#1e1f22;color:#d7d4cc;font:14px 'Segoe UI',system-ui";
    const inner = document.createElement("div");
    inner.style.cssText = "max-width:360px;width:80%;text-align:center;padding:24px;border:1px solid #ffffff14;border-radius:12px";

    const title = document.createElement("h2");
    title.style.cssText = "margin:0 0 8px";
    title.textContent = "Password required";

    const body = document.createElement("p");
    body.style.cssText = "opacity:.8;margin:0 0 16px";
    body.textContent = incorrect
      ? "Incorrect password. Please try again."
      : "This PDF is protected. Enter its password to view it.";

    const input = document.createElement("input");
    input.type = "password";
    input.autocomplete = "off";
    input.style.cssText =
      "width:100%;box-sizing:border-box;padding:8px;border-radius:8px;border:1px solid #ffffff1a;background:#2a2c30;color:#d7d4cc;margin-bottom:12px";

    const submit = document.createElement("button");
    submit.textContent = "Unlock";
    submit.style.cssText = "padding:6px 14px;border-radius:8px;border:0;background:#3a3d42;color:#d7d4cc;cursor:pointer";

    const done = () => {
      const value = input.value;
      card.remove();
      resolve(value);
    };
    submit.addEventListener("click", done);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") done();
    });

    inner.append(title, body, input, submit);
    card.appendChild(inner);
    document.body.appendChild(card);
    input.focus();
  });
}
