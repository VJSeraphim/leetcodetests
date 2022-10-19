/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for ( let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++
            return digits
        } 
        digits[i] = 0
        if ( i === 0) {
            digits.unshift(1)
            return digits
        }
    }
};

/*
숫자가 짧았으면 그냥 정수로 바꾸고 해도 되는데
테스트케이스에서 말도 안되게 큰 수만 테스트케이스로 던져줘서
어쩔수 없이 정공법으로.

13줄의 unshift를 하지 않으면 자리바꿈되는수 (ex 999, 9999)같은 수에서 같은 자리수가 000이 되어버려
앞에 1을 추가해 줘야 함.

bigInt를 쓸까 고민했는데 그냥 이 방법이 마음편함.
*/
