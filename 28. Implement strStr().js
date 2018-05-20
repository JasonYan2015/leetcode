/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === '') return 0

  const
    ori = haystack.split(''),
    tar = needle.split('')

  let
    index = -1

  for (let j = 0; j < ori.length; j++) {
    let i = j
    while (ori[i] && ori[i] === tar[i - j]) {
      if (i - j === tar.length - 1) {
        index = j
        break
      }
      i++
    }
    if (index >= 0) break
  }

  return index
};

const
  haystack = "basdaaaaa",
  needle = "aa",
  res = strStr(haystack, needle)

console.log('res: ----------', res)
