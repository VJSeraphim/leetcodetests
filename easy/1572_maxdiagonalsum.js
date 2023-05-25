/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    if(mat.length === 0) return 0
    let sum = 0
    for(let i=0; i<=mat.length -1; i++) {
        sum += mat[i][i]
        if(i !== (mat.length - 1) - i) {
            sum += mat[i][mat.length -1 -i] 
        }
    }
    return sum
};