/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * Note:
 * All given inputs are in lowercase letters a-z.
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const 
    arr = strs,
    lastIndex = arr.length - 1

  let
    common = [],
    flag = true,
    newChar = ''

  while(flag && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const 
        str = arr[i],
        firstLetter = str.charAt(0)

      if (str === '' || (i > 0 && firstLetter !== newChar)) {
          flag = false
          break
        }
      if (i === 0) newChar = firstLetter

      arr[i] = str.slice(1)

      if (i === lastIndex) {
        common.unshift(str.charAt(0))
      }
    }
  }

  return common.reverse().join('')
};

const
  strs = [""],
  res = longestCommonPrefix(strs)

console.log('res: ----------', res)
