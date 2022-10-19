/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

//1. 해시맵 사용 (속도는 이게 훨씬 빠름!)
var kWeakestRows = function(mat, k) {
    let map = {}
    for (let i=0; i<mat.length; i++) {
        let count = mat[i].lastIndexOf(1) + 1
        map[count] = map[count] !== undefined ? [...map[count], i] : [i]
    }
    
    return Object.values(map).reduce((a, i) => {
        a = [...a, ...i]
        return a
    }, []).slice(0, k)
};

/*
    배열을 문제에 주어진 The number of soldiers in each row is와 비슷한 형태로 바꿔주고,
    반환 시에 k만큼 slice해서 배열을 리턴해 준다.
*/

//2. 간단하게 자바스크립트 메소드 사용해서 간소화한 풀이
//참고 : https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/discuss/706923/Javascript-es6-one-line
/* var kWeakestRows = function(mat, k) {
    return mat.map((row, index) => [index, row.reduce((acc, cur) => acc+cur, 0)])
    .sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]))
    .map((a) => a[0])
    .slice(0, k)
}; */

//reduce 함수랑 친해질 것!!!