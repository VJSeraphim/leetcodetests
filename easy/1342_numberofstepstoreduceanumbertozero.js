/**
 * @param {number} num
 * @return {number}
 */
/* var numberOfSteps = function(num) {
    let count = 0
    while(num > 0) {
        if(num % 2 === 0) {
            num /= 2
            count++
        } else if (num % 2 === 1) {
            num -= 1
            count++
        } 
    }
    
    return count
}; */
//역시나 되게 장황하게 풀어쓴 풀이.

var numberOfSteps = function(num) {
    for(var result = 0; num > 0; result++ ) {
        num % 2 ? num -= 1 : num /= 2
    }
    return result
};
//간단한 문제긴 해도 더 좋은 풀이가 있을거같아서 다시 써본 풀이
//의도적으로 let을 쓰지 않았음. let 쓰면 반복문 나오면서 초기화되버려서.

//이거 외에도 비트연산으로 푼 풀이가 있길래 첨부.
//출처 : https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/discuss/900743/JavaScript-Recursion-and-Bit-Shifting-68ms-beats-97