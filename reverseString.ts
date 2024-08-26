/*
Problem: 344. Reverse String
Time Complexity: O(N)
Space Complexity: O(1)
*/

/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): string[] {
  // to do this while being in O(1) memory. You use two pointers and
  // iterate up until the half way point of the string
  // 'abcde' > 'abc' (with c being the pivot) | 'abcdef'
  //  s[0] = s[4], s[1]=s[3], s[2]   ||  s[0] =s[5], s[1] == s[4], s[2]=s[3],
  // so we can do a comparison for the very last right index. As long as the left < right, keep doing operations

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left += 1;
    right -= 1;
  }
  return s;
}
