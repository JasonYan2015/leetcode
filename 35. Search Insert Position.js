// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
// Example 1:
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
// Input: [1,3,5,6], 7
// Output: 4
// Example 4:
// Input: [1,3,5,6], 0
// Output: 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let
    l = 0,
    r = nums.length - 1

  if (r < 0) return 0

  function toFind(index) {
    if (target === nums[index]) return index
    if (l > r) return index + 1

    if (target > nums[index]) {
      l = index + 1
    } 
    else if (target < nums[index]) {
      r = index - 1
      if (r < 0) return 0
    }

    return toFind(Math.floor((l + r) / 2))
  }

  return toFind(Math.floor((l + r) / 2))
};

const
  nums = [9],
  target = 7,
  res = searchInsert(nums, target)

console.log('result = ', res)
