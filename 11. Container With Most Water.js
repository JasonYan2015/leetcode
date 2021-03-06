/**
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let max = 0
    while (i < j) {
        let left = height[i]
        let right = height[j]
        max = Math.max(Math.min(left, right) * Math.abs(i - j), max)
        if (left < right) {
            i++
        } else {
            j--
        }
    }
    return max
};
