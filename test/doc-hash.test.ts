import { describe, it, expect } from "vitest";
import { hashPdf } from "../src/viewer/highlight/doc-hash";

const bytes = (s: string) => new TextEncoder().encode(s);

describe("hashPdf", () => {
  it("returns a 64-char hex string", async () => {
    const h = await hashPdf(bytes("%PDF-1.4 hello"));
    expect(h).toMatch(/^[0-9a-f]{64}$/);
  });
  it("is deterministic", async () => {
    const a = await hashPdf(bytes("same"));
    const b = await hashPdf(bytes("same"));
    expect(a).toBe(b);
  });
  it("differs for different content", async () => {
    const a = await hashPdf(bytes("one"));
    const b = await hashPdf(bytes("two"));
    expect(a).not.toBe(b);
  });
});
