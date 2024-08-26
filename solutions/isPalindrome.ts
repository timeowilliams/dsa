/*
Problem: 
125. Valid Palindrome
Time Complexity: O(N)
Space Complexity: O(1)
*/

export function isPalindrome(s: string): boolean {
  // 1st step > sanitize the input to remove all non-alphanumeric characters (" ")
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Ideally we can compare each character in the string from the beginning index to the ending index
  // if at any point they don't equal return false.

  // To keep memory optimized, no need to create a new string.

  // iterate up until the half way point of the
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
