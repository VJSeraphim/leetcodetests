/**
 * @param {number[]} nums
 * @return {number[]}
 */

//map이랑 indexOf 사용
var smallerNumbersThanCurrent = function(nums) {
    const sortedArr = [...nums].sort((a, b) => a - b)
    return nums.map(n => sortedArr.indexOf(n))
};

//안사용 (동적프로그래밍)
var smallerNumbersThanCurrent = function(nums) {
    const arr = new Array(101)
    const compareArr = new Array(101)
    arr.fill(0)
    compareArr.fill(0)
    
    nums.forEach(n => arr[n]++)
    for(let i = 1; i<101; i++) {
        compareArr[i] = compareArr[i-1] + arr[i-1]
    }
    
    return nums.map(n => compareArr[n])
};

//reduce 사용
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num => nums.reduce((a, b) => a + (num > b), 0))
};


//간단한 문제라서 풀이가 여러개!