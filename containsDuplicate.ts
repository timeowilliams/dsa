/*
217. Contains Duplicate
Time Complexity: O(N)
Space Complexity: O(N)

*/

export function containsDuplicate(nums): boolean {
  const cache = {};

  for (let i = 0; i < nums.length; i += 1) {
    // check if the element exits in the cache > return true
    if (cache[nums[i]]) return true;
    // add the integer to cache
    cache[nums[i]] = true;
  }

  return false;
}
