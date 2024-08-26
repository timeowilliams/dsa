import { expect, test } from "vitest";
import { mergeAlternately } from "../solutions/mergeStringsAlternatively";

test("abc & pqr to equal apbqcr", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});
