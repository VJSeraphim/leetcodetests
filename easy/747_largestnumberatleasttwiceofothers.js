/**
 * @param {number[]} nums
 * @return {number}
 */
/* var dominantIndex = function(nums) {
    if ( nums.length === 1) return 0
    
    let sortArr = [...nums]
    
    sortArr.sort((a, b) => b - a)
    if ( sortArr[1] * 2 > sortArr[0] ) return -1
    else return nums.indexOf(sortArr[0])
}; */

// 배열의 길이가 1이면 그냥 리턴
// sortArr에 nums를 펼쳐서 sort하고 가장 큰값이 2번째 큰값보다 2배 많으면 리턴.
// 리턴할때 값이 아니라 그 값이 있었던 인덱스를 반환

// sortArr 없이 푸는 방법이 없을까?
var dominantIndex = function(nums) {
    const max = Math.max(...nums) // nums를 펼쳐서 제일 큰 값 저장
    const second = max / 2 // 2로 미리 나눠두기
    
    const target = nums.find(n => n > second && n !== max)  // 혹시 가장 큰 배열의 값의 1/2보다 큰 수가 있나 판별
    // return !target ? nums.indexOf(max) : -1
    return target ? -1 : nums.indexOf(max) // 있으면 -1, 없으면 원래대로 인덱스
};

// 마지막 리턴에서 시간복잡도 차이가 꽤 났다. 삼항비교나 그냥 if문이나 간단한 조건 먼저 처리하는게 빠르겠다