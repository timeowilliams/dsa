/*#2239. Find Closest Number to Zero 

Current solution:
Time complexity: O(N)
Space complexity: O(1)
*/

export function findClosestNumberToZero(nums: number[]): number {

//start at the largest poss num
let minDistance = Infinity;
let smallestNum = Infinity

//iterate through each element in nums
for(let i = 0; i < nums.length; i += 1 ){
// calculate the absolute distance
if(Math.abs(nums[i]) <= minDistance) {
// need to keep track of the smallest element to 
  const currDistance = Math.abs(nums[i])
  // if we have the same distance as previous, 
  // but instead a positive number, update to positive Num

  if(currDistance === minDistance && (Math.abs(nums[i]) <= smallestNum) && smallestNum !== Infinity ) {
    continue
  }
    else {
      smallestNum = nums[i]
    }

    minDistance = Math.min(minDistance, Math.abs(nums[i]))
}

}
return smallestNum

}