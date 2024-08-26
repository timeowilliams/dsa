import { isSubsequence } from "../solutions/isSubsequence";
import { expect, test } from "vitest";

test("If passing in 'abc' & 'ahbgdc' > should return true", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test("If passing in 'axc' & 'ahbgdc' > should return false", () => {
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});
