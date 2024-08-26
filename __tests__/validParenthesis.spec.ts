import { expect, test } from "vitest";
import { isValid } from "../solutions/validParenthesis";

test('Expect Input of "()[]{}" to be true', () => {
  expect(isValid("()[]{}")).toBe(true);
});

test('Expect Input of "(]" to be true', () => {
  expect(isValid("(}")).toBe(false);
});
