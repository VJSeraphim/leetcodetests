/**
 * @param {number[][]} accounts
 * @return {number}
 */
/* var maximumWealth = function(accounts) {
    let max = 0
    for ( let i=0; i<accounts.length; i++) {
        let wealth = accounts[i].reduce((acc, cur) => acc + cur)
        if ( wealth > max) {
            max = wealth
        }
    }
    
    return max
}; */

//reduce를 써서, 배열 안의 배열을 배열의 합을 표현한 배열로 바꾼 뒤
//거기서 최댓값을 뽑아내는 과정.

var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(account => account.reduce((acc, cur) => acc + cur, 0)))
};

//변수설정, for문 없이 간소화시킨 코드. Math 메소드를 써서 그런지 시간은 좀 더 걸림