import { isPalindrome } from "../solutions/isPalindrome";
import { expect, test } from "vitest";

test("A man, a plan, a canal: Panama > Should return true", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("race a car > Should return false", () => {
  expect(isPalindrome("race a car")).toBe(false);
});

test(' " " > Should return false', () => {
  expect(isPalindrome(" ")).toBe(true);
});
