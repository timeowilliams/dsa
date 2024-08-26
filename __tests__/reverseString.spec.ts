import { expect, test } from "vitest";
import { reverseString } from "../solutions/reverseString";

test('Expect ["h","e","l","l","o"] to be ["o","l","l","e","h"]', () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toEqual([
    "o",
    "l",
    "l",
    "e",
    "h",
  ]);
});

test('Expect ["H","a","n","n","a","h"] to be ["h","a","n","n","a","H"]', () => {
  expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual([
    "h",
    "a",
    "n",
    "n",
    "a",
    "H",
  ]);
});
