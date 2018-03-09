/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let 
    closetRes = 0,
    closeDistance = +Infinity

  nums
    .sort((a, b) => a - b)
    .map((val, index) => {
      const tar = target - val
      const newArr = nums
        .slice(0, index)
        .concat(
          nums.slice(index + 1)
        )

      let 
        i = 0,
        j = newArr.length - 1

      while(i < j && closeDistance !== 0) {
        const res = tar - newArr[i] - newArr[j]
        if (Math.abs(res) < closeDistance) {
          closetRes = newArr[i] + newArr[j] + val
          closeDistance = Math.abs(res)
        }
        if (res < 0) j--
        else i++
      }
    })
    
  return closetRes
};

/**
 * 测试用例
 * 答案应该是 -1
 */
const
  nums = [1,1,-1,-1,3],
  target = -1,
  res = threeSumClosest(nums, target)

console.log('--------------', res)
