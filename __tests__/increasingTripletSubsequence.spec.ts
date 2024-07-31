/// tests/increasingTriplet.test.ts
import { describe, it, expect } from 'vitest';
import { increasingTriplet } from '../increasingTripletSubsequence'; // Adjust the path to where your function is defined

describe('increasingTriplet', () => {
  it('should return true for an array with an increasing triplet', () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });

  it('should return false for an array without an increasing triplet', () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
    expect(increasingTriplet([1, 1, 1, 1, 1])).toBe(false);
  });

  it('should handle edge cases', () => {
    expect(increasingTriplet([])).toBe(false);
    expect(increasingTriplet([1])).toBe(false);
    expect(increasingTriplet([1, 2])).toBe(false);
    expect(increasingTriplet([2, 4, -2, -3])).toBe(false);
  });
});
