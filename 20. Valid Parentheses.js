/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const mission = ['()', '[]', '{}']

  function replaceBrackets(mission, target) {
    mission.map(value => {
      while (s.length > 0 && s.length % 2 === 0 && s.indexOf(value) >= 0) {
        s = target.replace(value, '')
        replaceBrackets(mission, s)
        break
      }
    })
  }

  replaceBrackets(mission, s)

  return s.length > 0 ? false : true
}

const
  s = "[{]}",
  res = isValid(s)

console.log('---------------', res)
