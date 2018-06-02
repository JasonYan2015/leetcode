/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  if(n === 1) return ['()']
  n--
  let r = add(['()'])
  function add(arr) {
    n--
    let res = []
    arr.map(str => {
      for (let i = 0; i < str.length; i++) {
        const newStr = str.slice(0, i) + '()' + str.slice(i)
        res.push(newStr)
      }
    })
    res = Array.from(new Set(res))
    if (n > 0) {
      return add(res)
    }
    return res
  }
  return Array.from(new Set(r))
};

const
  n = 3,
  res = generateParenthesis(n)

console.log('res: ------------------------', res)
