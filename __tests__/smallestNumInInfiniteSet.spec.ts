import { expect, test } from 'vitest'
import { SmallestInfiniteSet } from '../smallestNumInInfiniteSet'

test('SmallestInfiniteSet operations', () => {
  const smallestInfiniteSet = new SmallestInfiniteSet();

  // Initial state
  expect(smallestInfiniteSet.popSmallest()).toBe(1);
  expect(smallestInfiniteSet.popSmallest()).toBe(2);
  expect(smallestInfiniteSet.popSmallest()).toBe(3);

  // Add back a number that's already in the set
  smallestInfiniteSet.addBack(2);
  expect(smallestInfiniteSet.popSmallest()).toBe(2);

  // Add back a number and then pop it
  smallestInfiniteSet.addBack(1);
  expect(smallestInfiniteSet.popSmallest()).toBe(1);

  // Pop the next smallest number
  expect(smallestInfiniteSet.popSmallest()).toBe(4);

  // Pop again to ensure the set keeps track of the smallest number
  expect(smallestInfiniteSet.popSmallest()).toBe(5);

  // Add back a number smaller than the current smallest
  smallestInfiniteSet.addBack(3);
  expect(smallestInfiniteSet.popSmallest()).toBe(3);

  // Ensure the set continues to work after multiple operations
  expect(smallestInfiniteSet.popSmallest()).toBe(6);
  smallestInfiniteSet.addBack(4);
  expect(smallestInfiniteSet.popSmallest()).toBe(4);
  expect(smallestInfiniteSet.popSmallest()).toBe(7);
});

test('SmallestInfiniteSet edge cases', () => {
  const smallestInfiniteSet = new SmallestInfiniteSet();

  // Adding back a number larger than the current smallest
  smallestInfiniteSet.popSmallest(); // 1
  smallestInfiniteSet.popSmallest(); // 2
  smallestInfiniteSet.addBack(5);
  expect(smallestInfiniteSet.popSmallest()).toBe(3);

  // Adding back the current smallest number
  smallestInfiniteSet.addBack(4);
  expect(smallestInfiniteSet.popSmallest()).toBe(4);

  // Multiple add backs
  smallestInfiniteSet.addBack(1);
  smallestInfiniteSet.addBack(2);
  smallestInfiniteSet.addBack(3);
  expect(smallestInfiniteSet.popSmallest()).toBe(1);
  expect(smallestInfiniteSet.popSmallest()).toBe(2);
  expect(smallestInfiniteSet.popSmallest()).toBe(3);

  // Ensure the set continues to work after many operations
  expect(smallestInfiniteSet.popSmallest()).toBe(5);
  expect(smallestInfiniteSet.popSmallest()).toBe(6);
});