/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const 
    resArr = []

  nums.map((val, index) => {
    const
      tar = target - val,
      newArr = nums
        .slice(0, index)
        .concat(
          nums.slice(index + 1)
        )

    
  })
};