/**
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like . or *.
 * 
 * Implement regular expression matching with support for '.' and '*'.
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  if (p === s) return true
  if (!p || !s) return false
  const
    expArr = p.split('')

  let tar = s

  for (let index = 0; index < expArr.length; index++) {
    const
      val = expArr[index],
      isNextValAsterisk = expArr[index + 1] === '*'

    if (val === '*') continue

    switch (val) {
      // match any char
      case '.':
        if (isNextValAsterisk) {
          const
            asteriskIndex = p.indexOf('.*'),
            newP = p.substring(asteriskIndex + 2)

          if (newP === '') return true
          while (tar.indexOf(newP[0]) >= 0) {
            const
              i = tar.indexOf(newP[0]),
              newS = tar.substring(i)

            if (!isMatch(newS, newP)) {
              const newI = tar.indexOf(newP[0], i + 1)
              if (newI >= 0) {
                tar = tar.substring(newI)
              } else break
            }
            else return true
          }
          return false
        }
        tar = tar.substring(1)
        break
      // match specific char
      case tar[0]:
        if (isNextValAsterisk) {
          const
            i = index + 2,
            originFirst = tar[0]

          while (expArr[i] === originFirst && tar[0] === originFirst) {
            expArr.splice(i, 1)
            tar = tar.substring(1)
          }

          while (val === tar[0]) {
            tar = tar.substring(1)
          }
        } else {
          tar = tar.substring(1)
        }
        break
      // can't match
      default:
        if (!isNextValAsterisk) return false
    }
  }
  return tar.length === 0 ? true : false
};

const
  s = 'aaa',
  p = 'ab*c*a*a',
  res = isMatch(s, p)

console.log('----------------', res)
