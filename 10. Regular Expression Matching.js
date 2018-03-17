/**
 * Implement regular expression matching with support for '.' and '*'.
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const
    arr = s.split(''),
    exArr = p.split('')

  let
    index = 0,
    exIndex = 0

  for (; index < arr.length; index++) {
    const val = arr[index]

    if (val === exArr[exIndex] || exArr[exIndex] === '.' || exArr[exIndex + 1] === '*') {
      exIndex += exArr[exIndex + 1] === '*' ? 2 : 1
    } else {
      break
    }
  }

  const lastExFlag = exArr
    .slice(exIndex)
    .join('')
    .split('*')
    .every(val => val.length === 1)

  return index === arr.length && lastExFlag
};

const
  s = 'aab',
  p = 'c*a*b',
  res = isMatch(s, p)

console.log('----------------', res)
