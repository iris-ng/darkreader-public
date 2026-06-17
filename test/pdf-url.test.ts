import { describe, it, expect } from "vitest";
import { PDF_URL_FILTER, FILE_PDF_URL_FILTER } from "../src/background/pdf-url";

// DNR regexFilter is case-insensitive by default (isUrlFilterCaseSensitive=false),
// so mirror that with the "i" flag when validating with the JS engine.
const http = new RegExp(PDF_URL_FILTER, "i");
const file = new RegExp(FILE_PDF_URL_FILTER, "i");

describe("PDF_URL_FILTER", () => {
  it("matches direct pdf URLs", () => {
    expect(http.test("https://arxiv.org/pdf/1234.5678.pdf")).toBe(true);
    expect(http.test("http://x.com/a.pdf")).toBe(true);
    expect(http.test("https://x.com/A.PDF")).toBe(true); // case-insensitive
  });

  it("matches pdf URLs with a query string or fragment", () => {
    expect(http.test("https://s.com/doc.pdf?token=abc")).toBe(true);
    expect(http.test("https://s.com/doc.pdf#page=2")).toBe(true);
  });

  it("does not hijack URLs that merely contain .pdf", () => {
    expect(http.test("https://x.com/a.pdf.zip")).toBe(false); // a zip, not a pdf
    expect(http.test("https://x.com/a.pdf/page")).toBe(false); // .pdf is a dir segment
    expect(http.test("https://x.com/page.html?file=a.pdf")).toBe(false); // pdf in a query value
    expect(http.test("https://x.com/report")).toBe(false);
  });

  it("ignores non-http(s) schemes", () => {
    expect(http.test("ftp://x.com/a.pdf")).toBe(false);
    expect(http.test("file:///c/a.pdf")).toBe(false);
  });
});

describe("FILE_PDF_URL_FILTER", () => {
  it("matches local pdf files", () => {
    expect(file.test("file:///C:/docs/report.pdf")).toBe(true);
    expect(file.test("file:///home/u/a.pdf")).toBe(true);
  });
  it("does not match non-pdf local files or http", () => {
    expect(file.test("file:///c/a.pdf.zip")).toBe(false);
    expect(file.test("https://x.com/a.pdf")).toBe(false);
  });
});
