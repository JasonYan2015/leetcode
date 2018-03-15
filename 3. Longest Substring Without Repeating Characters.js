/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var sub = '';
    var subLen = 0;
    var len = s.length;
    var resArr = [];
    var index = 0;
    var char = '';
    for (var i = index; ((len - index - 1) >= subLen) && (i <= len); i++) {
        char = s.charAt(i);
        if (sub.indexOf(char) >= 0) {
            resArr.push(sub.length);
            index += sub.indexOf(char) + 1;
            i = index - 1;
            sub = '';
        } else {
            sub += char;
        }
    }
    
    return Math.max.apply(null, (resArr.length > 0 ? resArr : [0]));
};
