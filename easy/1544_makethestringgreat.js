/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const str = s.split('')
    let i = 0
    while(i < str.length - 1) {
        if(str[i] && str[i+1] && str[i].toLowerCase() === str[i+1].toLowerCase() && str[i] !== str[i+1]) {
            str.splice(i, 2)
            i--
            continue
        }
        i++
    }
    
    return str.join('')
};

//Stack이나 이중 포인터로 풀수 있긴 한데
//이 방법이 시/공간 복잡도가 훨씬 빠름.
//Stack은 s를 펼쳐서 스택에 집어넣고 이전/다음 배열이 대소문자로 똑같으면 팝해주면 된다.