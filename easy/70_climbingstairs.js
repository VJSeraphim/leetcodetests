/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 0
    let curr = 1
    
    for(let i=0; i<n; i++) {
        curr += prev
        prev = curr - prev
    }
    
    return curr
};