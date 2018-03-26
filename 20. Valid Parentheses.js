/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const
    pairs = {
      '(': ')',
      '{': '}',
      '[': ']'
    }

  function findValid(str) {
    const rightIndex = str.indexOf(pairs[str.charAt(0)])

    if (rightIndex === 1) return str.length === 2 ? true : findValid(str.slice(2))
    else if (rightIndex < 0 || (rightIndex > 1 && str.slice(1, rightIndex).length % 2 === 1)) return false

    return findValid(str.slice(1, rightIndex))
  }

  return s.length === 0 ? true : findValid(s)
}

const
  s = "(([]){})",
  res = isValid(s)

console.log('---------------', res)
