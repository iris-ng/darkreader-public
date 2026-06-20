import { describe, it, expect } from "vitest";
import { parsePageInput } from "../src/viewer/ui/page-nav";

describe("parsePageInput", () => {
  it("returns an in-range page", () => {
    expect(parsePageInput("3", 120)).toBe(3);
  });
  it("clamps below 1 up to 1", () => {
    expect(parsePageInput("0", 120)).toBe(1);
  });
  it("clamps above total down to total", () => {
    expect(parsePageInput("999", 120)).toBe(120);
  });
  it("returns null for non-numeric input", () => {
    expect(parsePageInput("abc", 120)).toBe(null);
  });
  it("returns null for empty or whitespace input", () => {
    expect(parsePageInput("", 120)).toBe(null);
    expect(parsePageInput("   ", 120)).toBe(null);
  });
  it("floors decimals via parseInt", () => {
    expect(parsePageInput("3.9", 120)).toBe(3);
  });
  it("clamps negatives to 1", () => {
    expect(parsePageInput("-4", 120)).toBe(1);
  });
  it("returns null when total is less than 1", () => {
    expect(parsePageInput("5", 0)).toBe(null);
  });
});
