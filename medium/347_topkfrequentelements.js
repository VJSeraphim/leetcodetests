/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = []
    let map = new Map()

    nums.forEach(n => map.set(n, map.get(n) + 1 || 1))

    let sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1])

    for (let i=0; i<k; i++) {
        result.push(sortedArr[i][0])
    }

    return result
};