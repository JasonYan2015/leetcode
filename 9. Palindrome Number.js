/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false

  const text = x + ''
  let len = Math.floor(text.length / 2)

  while(len >= 0) {
    if (text.charAt(len) !== text.charAt(text.length - 1 - len)) return false

    len--
  }

  return true
};

const
  x = 0,
  res = isPalindrome(x)

console.log('----------------------', res)

