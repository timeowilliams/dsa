/* 13: Roman to Integer
Time Complexity: O(N)
Space Complexity: O(1)
*/
export function romanToInt(s: string): number {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;

  for (let i = 0; i < s.length; i += 1) {
    //I can be placed before V (5) and X (10) to make 4 and 9.
    if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
      if (s[i + 1] === "V") {
        num += 4;
      } else if (s[i + 1] === "X") {
        num += 9;
      }
      i = i + 1;
      continue;
    }
    //X can be placed before L (50) and C (100) to make 40 and 90.
    else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
      if (s[i + 1] === "L") {
        num += 40;
      } else if (s[i + 1] === "C") {
        num += 90;
      }

      i = i + 1;
      continue;
    }

    // C can be placed before D (500) and M (1000) to make 400 and 900.
    else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
      if (s[i + 1] === "D") {
        num += 400;
      } else if (s[i + 1] === "M") {
        num += 900;
      }

      i = i + 1;
      continue;
    }
    num += numerals[s[i]];
  }

  return num;
}

console.log(romanToInt("MCMXCIV"));
