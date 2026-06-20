import { describe, it, expect } from "vitest";
import { formatMatchCount } from "../src/viewer/ui/find-bar";

// FindState: 0 FOUND, 1 NOT_FOUND, 2 WRAPPED, 3 PENDING
describe("formatMatchCount", () => {
  it("shows 'current / total' when found with matches", () => {
    expect(formatMatchCount(0, 3, 47)).toBe("3 / 47");
  });
  it("shows 'No results' when not found", () => {
    expect(formatMatchCount(1, 0, 0)).toBe("No results");
  });
  it("is empty when idle/pending with no matches", () => {
    expect(formatMatchCount(3, 0, 0)).toBe("");
  });
  it("is empty when found but total is zero", () => {
    expect(formatMatchCount(0, 0, 0)).toBe("");
  });
  it("formats the wrapped state like found", () => {
    expect(formatMatchCount(2, 5, 12)).toBe("5 / 12");
  });
});
