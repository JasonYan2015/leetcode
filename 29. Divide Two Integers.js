/**
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
 * Return the quotient after dividing dividend by divisor.
 * The integer division should truncate toward zero.
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  if (dividend === 0) return 0

  const
    MAX = Math.pow(2,31) - 1,
    MIN = -Math.pow(2,31),
    newDivisor = Math.abs(divisor)
  
  let 
    num = Math.abs(dividend),
    res = -1
  
  if (newDivisor === 1) {
    res = dividend
  }

  while(num >= 0 && newDivisor !== 1 && res <= MAX && res >= MIN) {
    num -= newDivisor
    res++
  }

  res = res > MAX || res < MIN
        ?
          MAX
          :
          res

  return Math.abs(dividend - divisor) > Math.abs(dividend) ? -res : res
};

const
  dividend = -2147483648,
  divisor = -1,
  res = divide(dividend, divisor)

console.log('res: -------------------', res)
