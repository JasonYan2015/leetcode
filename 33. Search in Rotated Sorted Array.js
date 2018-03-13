/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length
  let index = 0

  if (len !== 1 && nums[0] !== target) {
    if (nums[0] > target) {
      index = len - 1
      while (nums[index] > target) {
        if (index === 1) break
        index--
      }
    } else {
      index++
      while (nums[index] < target) {
        if (index === len - 1) break
        index++
      }
    }

  }

  return nums[index] === target ? index : -1
};

const
  nums = [3, 1],
  target = 0,
  res = search(nums, target)

console.log('-----------------', res)
