/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let sum = 0
    let result = 0
    let heap = new MinPriorityQueue({priority: (el) => el})

    const merged = nums1.map((val, i) => [nums2[i], val])
    merged.sort((a, b) => b[0] - a[0])

    for(const [max2, val1] of merged) {
        if(heap.size() === k) {
            sum -= heap.dequeue().element
        }
        sum += val1
        heap.enqueue(val1)

        if(heap.size() === k) {
            result = Math.max(result, sum * max2)
        }
    }

    return result
};