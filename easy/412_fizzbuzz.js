/**
 * @param {number} n
 * @return {string[]}
 */
/* var fizzBuzz = function(n) {
    let arr = []
    for ( let i=1; i<n+1; i++) {
        let str = i.toString()
        
        if (i % 3 === 0) {
            if (i % 5 === 0) arr.push('FizzBuzz')
            else arr.push('Fizz')
        }
        
        else if (i % 5 === 0 ) arr.push('Buzz')
        
        else arr.push(str)
    }
    return arr
}; */

// 장황하게 풀어쓴 코드 -0- 밑에는 좀 간단하게 축약해서 풀이해봄.
// 참고한 풀이 : https://leetcode.com/problems/fizz-buzz/discuss/89949/1-line-JavaScript-O(n)-solution
// new Array(n).fill(0)도 되지만 아예 (n)만큼의 Array를 펼쳐서 map해도 가능함. 밑에 그것만 바꿔봤음

var fizzBuzz = function(n) {
    //return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
    return [...Array(n)].map((a, i) =>  (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)
};