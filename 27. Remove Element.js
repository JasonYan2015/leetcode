/**
 * Given an array and a value, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const 
    index = nums
      .sort()
      .indexOf(val),
    lastIndex = nums
      .lastIndexOf(val),
    len = nums.length

  if (index >= 0) {
    nums.splice(index, lastIndex - index + 1)
  }

  return nums.length
};

const
  nums = [4, 5],
  val = 6,
  res = removeElement(nums, val)

console.log('-------------------', res, nums)
