/* 
121. Best Time to Buy and Sell Stock

Time Complexity: O(n)
Space Complexity: O(1)
Time start: 10:22
Time End:11:19
*/

export function maxProfit(prices: number[]): number {
  let maxDifference = 0;

  // Use two pointers (left, right) initialized as 1, 0.
  let left = 0;
  let right = 1;

  // while the right pointer is less than the full length of the array.
  while (right < prices.length) {
    // check if the current price[right] - price[left] is > 0
    if (prices[right] - prices[left] > 0) {
      // compare Math.max of difference
      maxDifference = Math.max(prices[right] - prices[left], maxDifference);
    } else {
      left = right;
    }
    right += 1;
  }
  return maxDifference;
}

/*
 [ 7, 3, 5, 2]
  [2,10, 1, 5]


Buy low > sell high
[2,10, 1, 5]

maxDifference = 8
left = 2
right = 3

*/
