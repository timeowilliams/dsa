import { romanToInt } from "../romanToInteger";
import { expect, test } from "vitest";

test("III should have a int value of 3", () => {
  expect(romanToInt("III")).toBe(3);
});

test("MCMXCIV should have a int value of 1994", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("LVIII should have a int value of 58", () => {
  expect(romanToInt("LVIII")).toBe(58);
});
