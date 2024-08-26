/* 392. is Subsequence

Time Complexity: O(n)
Space complexity: O(1)
*/

//Questions: are the characters in the string all unique?

export function isSubsequence(s: string, t: string): boolean {
  let counter = 0;
  // check if the current letter(t[i])
  // is equal to s[counter].
  for (let i = 0; i < t.length; i += 1) {
    // If so > increment counter
    if (s[counter] === t[i]) {
      counter += 1;
    }
  }

  // If at the very end of the iteration, counter equals the length of s, return true.
  return counter === s.length;
}

// Quick run through:

/* abc, ahbgdc
counter = 3
i = 0
b === c T
3 === 3 return T
*/
