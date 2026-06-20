// Returns the raw, still-percent-encoded file URL from the viewer's own
// location.search, or null if absent. The redirect rule emits exactly
// `?file=<original-url>` with nothing after it, so everything past the first
// `=` is the URL verbatim — we must NOT let URLSearchParams reinterpret `&`
// (which truncates names like "Commerce & Industry Co of Canada.pdf") or `+`
// (which it would decode to a space). pdf.js fetches percent-encoded URLs
// correctly, so we pass the value through untouched.
export function parseFileParam(search: string): string | null {
  const m = /^\?file=(.+)$/s.exec(search);
  return m ? m[1]! : null;
}
