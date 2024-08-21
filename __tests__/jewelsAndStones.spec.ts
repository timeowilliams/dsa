import { numJewelsInStones } from "../jewelsAndStones";
import { expect, test } from "vitest";

test("There to be 3 jewels in these stones", () => {
  expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
});

test("There to be 0 jewels in these stones", () => {
  expect(numJewelsInStones("z", "ZZ")).toEqual(0);
});
