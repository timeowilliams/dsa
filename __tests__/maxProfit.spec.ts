import { expect, test } from "vitest";
import { maxProfit } from "../maxProfit";

test("Expect a profit of 5, given [7,1,5,3,6,4]", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test("Expect a profit of 0, given [7,6,4,3,1]", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});
