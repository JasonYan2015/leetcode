/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 * Ⅰ（1）
 * X（10）
 * C（100）
 * M（1000）
 * V（5）
 * L（50）
 * D（500）
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const
    arrS = s.split(''),
    value = {
      I: 1,
      X: 10,
      C: 100,
      M: 1000,
      V: 5,
      L: 50,
      D: 500
    }

  let sum = 0

  arrS.map((i, index, arr) => {
    const 
      nextI = arr[index + 1],
      val = value[i],
      nextVal = value[nextI]

    if (nextI && val < nextVal) {
      sum -= val
      return
    }

    sum += val
  })

  return sum
};

const
  s = 'XI',
  res = romanToInt(s)

console.log('----------------', res)
