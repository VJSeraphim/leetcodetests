/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    if(nums1.length < nums2.length) return maxUncrossedLines(nums2, nums1)

    let prev = Array(nums2.length + 1).fill(0)
    let curr = Array(nums2.length + 1).fill(0)

    for(let i=1; i<=nums1.length; i++) {
        for(let j=1; j<=nums2.length; j++) {
            if(nums1[i-1] == nums2[j-1]) {
                curr[j] = 1 + prev[j-1]
            } else {
                curr[j] = Math.max(prev[j], curr[j-1])
            }
        }

        [prev, curr] = [curr, prev]
    }

    return prev[nums2.length]
};