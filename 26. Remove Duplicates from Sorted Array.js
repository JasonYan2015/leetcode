/**
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // return Array.from(new Set(nums))
  let 
    i = 0

  while (i < nums.length) {
    const
      value = nums[i],
      nextVal = nums[i + 1]

    if (value === nextVal) {
      nums.splice(i, 1)
      continue
    }

    i++
  }

  return nums.length
};

/**
 * 测试用例
 * 答案应该是 [1]
 */
const
  nums = [1, 1, 1],
  res = removeDuplicates(nums)

console.log('~~~~~~~~~~~', res)
