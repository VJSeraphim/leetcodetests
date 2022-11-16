/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0)
    let stack = []
    let result = 0
    for(let i=0; i<heights.length; i++) {
        let indexHeight = i
        while(stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [index, height] = stack.pop()
            result = Math.max(result, (i - index) * height )
            indexHeight = index
        }
        stack.push([indexHeight, heights[i]])
    }
        
    return result
};

//https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/1430546/Monotonique-Stack-Solution-Intuition-(Javascript)