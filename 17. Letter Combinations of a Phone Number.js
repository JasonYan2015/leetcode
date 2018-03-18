/**
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var res = [];
    var arr = [''];
    var len = 0;
    var str = '';
    digits = digits.split('');
  
    function getvarter(num) {
      var res = '';
      num = ~~num;
      switch (num) {
        case 1:
          res = ['*'];
          break;
        case 2:
          res = ['a', 'b', 'c'];
          break;
        case 3:
          res = ['d', 'e', 'f'];
          break;
        case 4:
          res = ['g', 'h', 'i'];
          break;
        case 5:
          res = ['j', 'k', 'l'];
          break;
        case 6:
          res = ['m', 'n', 'o'];
          break;
        case 7:
          res = ['p', 'q', 'r', 's'];
          break;
        case 8:
          res = ['t', 'u', 'v'];
          break;
        case 9:
          res = ['w', 'x', 'y', 'z'];
          break;
        default:
          res = [];
      }
      return res;
    }
  
    while (digits.length > 0) {
      len = arr.length;
      str = digits.shift();
      temArr = getvarter(str);
      arr.map(function (value, index) {
        temArr.map(function (tar) {
          arr.push(value + tar);
        });
      });
      arr = arr.slice(len);
    }
    return arr[0] === '' ? [] : arr;
  };
  