/*
977. Squares of a Sorted Array
Time Complexity: O (N Log N)
Space Complexity: O(N)
*/

export function sortedSquares(nums: number[]): number[] {
  const sortAndSquareArr = [];

  // 1st step: square all the elements into a new array ()
  for (let i = 0; i < nums.length; i += 1) {
    sortAndSquareArr.push(nums[i] * nums[i]);
  }

  // 2nd step: Sort the elements in ascending order.
  sortAndSquareArr.sort((a, b) => a - b);

  // return the new array.
  return sortAndSquareArr;
}
