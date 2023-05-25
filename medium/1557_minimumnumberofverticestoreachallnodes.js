/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let map = new Array(n)
    let result = []

    for(let [i, val] of edges) {
        map[val] = 1
    }
    for(let i=0; i<n; i++) {
        if(!map[i]) result.push(i)
    }

    return result
};