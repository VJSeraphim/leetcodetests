/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashMap = new Map()
    for(let i=0; i<nums.length; i++) {
        if(i - hashMap.get(nums[i]) <= k) {
            return true
        }
        hashMap.set(nums[i], i)
    }
    return false
};

//해시맵에 숫자를 넣어 절댓값을 비교.
//시,공간 복잡도 모두 O(n)
//지시사항 따라가면 되는 문제.