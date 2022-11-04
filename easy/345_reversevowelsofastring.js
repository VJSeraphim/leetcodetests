/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] 
    
    /* 
    let stack = []
    let answer = []
    for (let i=0; i<s.length; i++) {
        if(vowel.indexOf(s[i]) !== -1) stack.push(s[i])
    }
    for(let i=0; i<s.length; i++) {
        if(vowel.indexOf(s[i]) !== -1) answer.push(stack.pop())
        else answer.push(s[i])
    }
    
    return answer.join("") */
    
    //스택을 이용한 풀이
    
    let left = 0
    let right = s.length - 1
    let arr = s.split("")
    
    while (left < right) {
        if(vowel.indexOf(arr[left]) !== -1 && vowel.indexOf(arr[right]) !== -1) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            ++left
            --right
        }
        
        if(vowel.indexOf(arr[left]) === -1){
            ++left
        }
        if(vowel.indexOf(arr[right]) === -1){
            --right
        }
    }
    
    return arr.join("")
    
    //이중 포인터를 이용한 풀이
};





