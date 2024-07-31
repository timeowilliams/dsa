export function increasingTriplet(nums: number[]): boolean {
    
let first = Number.MAX_SAFE_INTEGER;
let second = Number.MAX_SAFE_INTEGER;

for (let num of nums) {
  if (num <= first) {
    first = num
  } else if (num <= second) {
    second = num
  } else {
    return true
  }
} 
return false

};