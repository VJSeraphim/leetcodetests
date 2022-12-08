/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let min = Number.MAX_SAFE_INTEGER
    let result = -1

    let leftSum = 0
    let rightSum = nums.reduce((a, b) => a + b, 0)

    for(let i=0; i<nums.length; i++) {
        leftSum += nums[i]
        rightSum -= nums[i]

        let leftAvg = Math.floor(leftSum / (i + 1))
        let rightAvg = Math.floor(i < nums.length - 1 ? rightSum / (nums.length -i -1) : 0)
        let val = Math.abs(leftAvg - rightAvg)

        if(val < min) {
            result = i
            min = val
        }
    }

    return result
};