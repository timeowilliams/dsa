/*
Problem: #242. Valid Anagram
Time Complexity: O(N + M)
Space Complexity:O(N)
*/

export function isAnagram(s: string, t: string): boolean {
  // Approach: check to see if the total length of t is the same as s
  // (since we must use all characters) and also make sure the # of occurrences of each element
  // is equal to s.

  if (t.length !== s.length) return false;

  const lettersInT = new Map<string, number>();

  for (const letter of t) {
    lettersInT.set(letter, (lettersInT.get(letter) || 0) + 1);
  }

  for (const letter of s) {
    if (!lettersInT.get(letter) || lettersInT.get(letter) === 0) return false;

    lettersInT.set(letter, lettersInT.get(letter) - 1);
  }
  return true;
}
