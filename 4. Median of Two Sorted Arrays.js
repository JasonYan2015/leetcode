/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let
    i = 0,
    k = 0,
    len = (nums1.length + nums2.length) / 2

  const
    arr = []

  function pushLowValue(i, k, nums1, nums2, arr) {
    if (nums1[i] <= nums2[k]) {
      arr.push(typeof nums1[i] === 'number' ? nums1[i++] : nums2[k++])
    } else {
      arr.push(typeof nums2[k] === 'number' ? nums2[k++] : nums1[i++])
    }

    return [i, k]
  }

  while (arr.length < len) {
    [i, k] = pushLowValue(i, k, nums1, nums2, arr)
  }
  if (arr.length === len) {
    [i, k] = pushLowValue(i, k, nums1, nums2, arr)
  } else {
    arr.push(arr[arr.length - 1])
  }
  
  const 
    arrLen = arr.length

  return parseFloat((arr[arrLen - 2] + arr[arrLen - 1]) / 2)
};

/**
 * 测试用例
 * 正确答案应该是40
 */
const 
  nums1 = [1,39,40,40],
  nums2 = [2,40,50],
  res = findMedianSortedArrays(nums1, nums2)

console.log('~~~~~~~~~~~', res)
