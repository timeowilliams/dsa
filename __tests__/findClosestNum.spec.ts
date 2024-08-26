import { expect, test } from "vitest";
import { findClosestNumberToZero } from "../solutions/findClosestNumberToZero";

test("Should return 1", () => {
  expect(findClosestNumberToZero([-4, -2, 1, 4, 8])).toBe(1);
});

test("Should return 1", () => {
  expect(findClosestNumberToZero([2, -1, 1])).toBe(1);
});
