/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var nums = x + '';
    var signFlag = false;
    if (nums.indexOf('-') >= 0) {
        signFlag = true;
        nums = nums.substring(1);
    } 
    nums = nums.split('').reverse().join('');
    if (signFlag) {
        nums = '-' + nums;
    }
    nums = parseInt(nums);
    if ( nums < (0 - Math.pow(2, 31)) || nums > (Math.pow(2, 31) - 1) ) {
        nums = 0
    }
    return nums
};
