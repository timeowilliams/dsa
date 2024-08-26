/*
Problem: 682: Baseball Game
Time Complexity: O(N)
Space Complexity:O(N)

Potential optimizations: Instead of storing all of the numbers in the stack, store only the most recent 3 elements. 
This will bring space complexity to O(1)
*/

export function calPoints(operations: string[]): number {
  // Utilize a stack data structure
  const stack = [];
  let sum = 0;
  // There's times where we need to do operations on
  // the most recent element prior to this symbol.
  // > and to keep track of this (D, C)

  // have a method to handle when you need the sum of the last 2
  // elements ("+")

  // 5 elements
  // i = 3
  // sum = 30
  // stack = [5,10,15]
  for (let i = 0; i < operations.length; i += 1) {
    // if current element is a #
    if (Number(operations[i]) && typeof Number(operations[i] === "number")) {
      sum += Number(operations[i]);
      stack.push(Number(operations[i]));
    }

    // if current element of operations is (D)
    else if (operations[i] === "D") {
      const num = stack.pop();
      const newScore = num * 2;
      sum += newScore;
      stack.push(num, newScore);
    } else if (operations[i] === "C") {
      const prev = stack.pop();
      sum -= prev;
    } else if (operations[i] === "+") {
      const prev1 = stack.pop(); //10
      const prev2 = stack.pop(); //5
      const newScore = prev1 + prev2; //15
      sum += newScore;

      stack.push(prev2);
      stack.push(prev1);
      stack.push(newScore);
    }
  }

  return sum;
}
