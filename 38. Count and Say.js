/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth term of the count-and-say sequence.
 * Note: Each term of the sequence of integers will be represented as a string.
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let
    num = '1',
    times = n,
    counter = []

  while(times > 1) {
    `${num}`.split('').map(val => {
      const lastIndex = counter.length - 1
      if(counter[lastIndex] && counter[lastIndex].val === val) {
        counter[lastIndex].count++
      }
      else {
        counter.push({
          count: 1,
          val
        })
      }
    })

    num = counter.map(obj => `${obj.count}${obj.val}`).join('')
    counter = []
    times--
  }

  return num
};

const
  n = 1,
  res = countAndSay(n)

console.log('res: --------------------', res)
