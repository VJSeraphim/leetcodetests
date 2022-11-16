/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prev = 0
    let count = 1
    
    if(nums.length === 0) return 0
    
    for(let i=1; i<nums.length; i++) {
        if(nums[i] !== nums[prev]) {
            prev++
            nums[prev] = nums[i]
            count++
        }
    }
    return count
};