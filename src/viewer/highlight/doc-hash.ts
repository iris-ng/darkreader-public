/** Content fingerprint of a PDF. Hashes length + up to the first 256 KB so large files stay fast. */
export async function hashPdf(bytes: Uint8Array): Promise<string> {
  const head = bytes.subarray(0, 256 * 1024);
  const lenTag = new TextEncoder().encode(`:${bytes.byteLength}`);
  const buf = new Uint8Array(head.byteLength + lenTag.byteLength);
  buf.set(head, 0);
  buf.set(lenTag, head.byteLength);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
