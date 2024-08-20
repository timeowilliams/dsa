import { expect, test } from "vitest";
import { containsDuplicate } from "../containsDuplicate";

/*
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/


test('expect true', () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true)
})

test('expect false', () => {
  expect(containsDuplicate([1,2,3,4])).toBe(false)
})

test('expect true', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true)
})