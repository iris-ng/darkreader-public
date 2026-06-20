import { describe, it, expect } from "vitest";
import { parseFileParam } from "../src/viewer/file-param";

describe("parseFileParam", () => {
  it("returns a plain file URL unchanged", () => {
    expect(parseFileParam("?file=file:///C:/a.pdf")).toBe("file:///C:/a.pdf");
  });

  it("preserves %20-encoded spaces", () => {
    expect(parseFileParam("?file=file:///C:/My%20Doc.pdf")).toBe(
      "file:///C:/My%20Doc.pdf",
    );
  });

  it("preserves a literal & in the path (the Commerce & Industry case)", () => {
    const url =
      "file:///C:/Users/abc/Downloads/Commerce%20&%20Industry%20Co%20of%20Canada.pdf";
    expect(parseFileParam(`?file=${url}`)).toBe(url);
  });

  it("preserves a literal + (does not turn it into a space)", () => {
    expect(parseFileParam("?file=file:///C:/a+b.pdf")).toBe("file:///C:/a+b.pdf");
  });

  it("keeps a web URL's own query string, including params after &", () => {
    const url = "https://x.com/doc.pdf?a=1&b=2";
    expect(parseFileParam(`?file=${url}`)).toBe(url);
  });

  it("returns null for an absent or non-matching search", () => {
    expect(parseFileParam("")).toBe(null);
    expect(parseFileParam("?other=1")).toBe(null);
    expect(parseFileParam("?file=")).toBe(null);
  });

  it("leaves a percent-encoded non-ASCII (Chinese) name encoded, not decoded", () => {
    const url = "file:///C:/%E4%B8%AD%E6%96%87.pdf";
    expect(parseFileParam(`?file=${url}`)).toBe(url);
  });
});
