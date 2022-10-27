/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const arrA = []
    const arrB = []
    for(let i=0; i<img1.length; i++) {
        for(let j=0; j<img2.length; j++) {
            if(img1[i][j]) arrA.push([i, j])
            if(img2[i][j]) arrB.push([i, j])
        }
    }
    
    const cacheObj = {}
    let max = 0
    for(let i=0; i<arrA.length; i++) {
        for(let j=0; j<arrB.length; j++) {
            const str = `${arrA[i][0] - arrB[j][0]}_${arrA[i][1] - arrB[j][1]}`
            cacheObj[str] = cacheObj[str] || 0
            cacheObj[str]++
            max = Math.max(max, cacheObj[str])
        }
    }
    
    return max
};

//진짜 머리가 안돌아가서 그냥 브루트 포스로 
//for문을 어거지로 돌려서 푸는 방법도 있는데 시간복잡도가 나락으로 떨어져서 망...
//B의 이미지를 A로 옮겨서 확인해보고 계속 값을 더하는 방식