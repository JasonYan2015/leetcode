/**
 * Pick One
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const
    arr = candidates.sort((a, b) => a - b),
    res = []

  for (let i = 0; i < arr.length && arr[i] <= target; i++) {
    const
      val = arr[i],
      s = new Array()

    for (let j = Math.floor(target / val); j > 0; j--) {
      const newTar = target - val * j
      s.length = j
      s.fill(val, 0)

      if (newTar === 0) {
        res.push(s.slice(0))
        continue
      }

      if(i === 0) break
      combinationSum(arr.slice(0, i), newTar).map(resArr => {
        res.push(s.concat(resArr))
      })
    }
  }

  return res
};

const
  candidates = [3,12,9,11,6,7,8,5,4],
  target = 15,
  res = combinationSum(candidates, target)

console.log('res: -------------------------------', res)
