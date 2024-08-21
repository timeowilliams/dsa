/* 
 #771. Jewels and Stones 
 Category: Hash functions, sets and maps. 
 Time complexity: O(n)
 Space complexity: (O(n))
*/

export function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsMap = {};
  let counter = 0;

  // iteration to create the elements of the jewels in jewelsMap
  for (const jewel of jewels) {
    jewelsMap[jewel] = true;
  }

  // iterate through stones and check if it's a jewel and increment accordingly.
  for (const stone of stones) {
    if (jewelsMap[stone]) {
      counter += 1;
    }
  }

  return counter;
}
