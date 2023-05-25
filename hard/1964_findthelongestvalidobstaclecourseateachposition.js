/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const len = obstacles.length
    const arr = new Array(len).fill(1)
    const stack = [obstacles[0]]

    for(let i=1; i<len; i++) {
        if(obstacles[i] >= stack[stack.length - 1]) {
            stack.push(obstacles[i])
            arr[i] = stack.length
        } else {
            let left = 0
            let right = stack.length - 1
            while (left <= right) {
                const middle = Math.floor((left + right) / 2)
                if(stack[middle] <= obstacles[i]) {
                    left = middle + 1
                } else {
                    right = middle - 1
                }
            }
            stack[left] = obstacles[i]
            arr [i] = left + 1
        }
    }
    return arr
};