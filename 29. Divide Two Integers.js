/**
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
 * Return the quotient after dividing dividend by divisor.
 * The integer division should truncate toward zero.
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  // 分母为０，结果为０
  if (dividend === 0) return 0
  // 溢出情况，由题意，只有此时会溢出
  if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1

  const
    newDivisor = Math.abs(divisor)
  
  let 
    num = Math.abs(dividend),
    res = newDivisor === 1　? Math.abs(dividend) : -1

  while(num >= 0 && newDivisor !== 1) {
    num -= newDivisor
    res++
  }

  return Math.abs(dividend - divisor) > Math.abs(dividend) ? -res : res
};

const
  dividend = -10,
  divisor = 3,
  res = divide(dividend, divisor)

console.log('res: -------------------', res)
