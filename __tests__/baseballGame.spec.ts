import { expect, test } from "vitest";
import { calPoints } from "../baseballGame";

test("Should return a sum of 30", () => {
  expect(calPoints(["5", "2", "C", "D", "+"])).toEqual(30);
});
