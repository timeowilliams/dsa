import { expect, test, describe } from "vitest";
import { isAnagram } from "../solutions/validAnagram";

describe("#242. Valid Anagram", () => {
  test("should be true", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });
  test("should be false", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
