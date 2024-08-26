/*
Problem: 20. Valid Parentheses
Time Complexity: O(N)
Space Complexity: O(N)
*/
export function isValid(s: string): boolean {
  if (s.length < 2) return false;
  // an object/dictionary that contains the openings and the closings

  const chars = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const openingChars = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] in chars) {
      // if it's a key in chars/not value
      openingChars.push(s[i]);
    } else {
      const openBracket = openingChars.pop();
      if (chars[openBracket] !== s[i]) return false;
    }
  }

  return openingChars.length === 0;
}
