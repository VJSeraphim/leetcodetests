/**
 * @param {number[]} nums
 * @return {number}
 */

const pivotIndex = function(nums) {
    let sumLeft = 0, sumRight = sum(nums)
    
    for ( let i=0; i<nums.length; i++) {
        sumRight -= nums[i]
        
        if ( sumLeft === sumRight ) return i        
        sumLeft += nums[i]
    }
    
    return -1
};

//sumLeft가 sumRight와 같을 때까지 sumRight의 값을 sumLeft로 옮겨
//sumLeft와 sumRight가 같으면 반복한 횟수 i를 반환, 아니면 그냥 -1 반환 

const sum = (num) => {
    return num.reduce(function(acc, cur) {
        return acc + cur
    }, 0)
}

//밑의 sum 함수는 오른쪽 끝의 sum값을 계산하기 위한 함수

//sum 함수를 작성하지 않고도 풀 수는 있으나
//코드가 복잡해질 것을 염려하여 그냥 따로 작성한 케이스