/*
Problem  383. Ransom Note
Time Complexity: O(N + M)
Space Complexity: O(N)
*/

export function canConstruct(ransomNote: string, magazine: string): boolean {
  // 1st step > create a map of the magazine
  const magazineMap = new Map<string, number>();

  for (const char of magazine) {
    magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
  }

  // Use a for...of loop for the ransom note
  for (const letter of ransomNote) {
    if (!magazineMap.get(letter) || magazineMap.get(letter) <= 0) {
      return false;
    }
    magazineMap.set(letter, magazineMap.get(letter) - 1);
  }
  return true;
}
console.log(canConstruct("a", "b"));
