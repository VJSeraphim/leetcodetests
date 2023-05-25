/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    for(let i of nums1) {
        if(set2.has(i)) {
            set1.delete(i)
            set2.delete(i)
        }
    }

    return [Array.from(set1), Array.from(set2)]
};