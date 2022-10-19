/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let sum = 0 // 리턴될 합 값
    const val = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    } // 로마숫자에 아라비아숫자값 할당

    for ( let i=0; i<s.length; i++) {
        let current = val[s[i]] // 현재 로마 숫자의 값
        let next = val[s[i+1]] // 다음 로마 숫자의 값
        
        if (current < next) { // 만약 연속되는 로마 숫자가 작을 경우 (예를 들어 IV = 4)
            sum += next - current //바로 전 값을 빼줘야 한다
            i++ // 그리고 다다음 문자로 이동
        } else {
            sum += current // 아니면 그냥 얌전히 더해주면 된다
        }
    }
    
    return sum // 리턴
};

/* 
    val 객체에 직접 값을 지정하지 않고 하는 방법이 있나 찾아봤는데
    문자가 반복되는 것을 간과해서 자꾸 실패하길래 + 위의 if문의 경우 구현이 어려워서
    결국 val로 로마숫자 값을 직접 지정함...ㅠ
*/