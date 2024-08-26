import { canConstruct } from "../solutions/ransomNote";
import { describe, expect, it } from "vitest";

describe("383. Ransom Note", () => {
  it("should return true", () => {
    expect(canConstruct("a", "b")).toBe(false);
    expect(canConstruct("aa", "ab")).toBe(false);
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});
