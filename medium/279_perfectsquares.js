/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const arr = new Array(n+1).fill(Infinity)
    
    arr[0] = [0]
    
    for(let i=0; i<=n; i++) {
        for (let j=0; j*j<=i; j++) {
            arr[i] = Math.min(arr[i], arr[i - j*j] + 1)
        }
    }
    
    return arr[n]
    
};