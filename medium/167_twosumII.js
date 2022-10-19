/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let indexLeft = 0
    let indexRight = numbers.length - 1
    while (indexLeft < indexRight) {
        const sum = numbers[indexLeft] + numbers[indexRight]
        if(sum === target) {
            return [indexLeft + 1, indexRight + 1]
        }
        else if ( sum < target ) {
            indexLeft++
        } else {
            indexRight--
        }
    }
};

//이중 포인터를 쓴 방법(첫 방법)
//indexLeft, indexRight를 사용하여 생각보다 직관적으로 풀었음.

var twoSum = function(numbers, target) {
    let map = new Map()
    let answer = []
    
    for(let i=0; i<numbers.length; i++) {
        if(map.has(target - numbers[i])) {  
            answer = [map.get(target-numbers[i]), i+1]
            break
        } else {
            map.set(numbers[i], i+1)
        }
    }
    
    return answer
};

//해시맵을 사용한 방법. 문제 조건에서 정확히 한가지의 방법만이 답이 되도록 배열을 주고, 이미 오름차순으로 정렬되어 있으므로,
//가장 작은 값부터 해시맵에 넣어 타겟에 맞는 값을 answer에 넣어 반환.
//둘다 O(n) 시간복잡도. 실제로 자바스크립트에서 많이 쓰던 map이 해시테이블 구조라 해시맵을 구현하기 꽤 간편함.

//후에 찾아보니, 해시맵을 할때 오브젝트보다 new Map으로 맵을 선언해서 사용하는게 훨씬 장점이 많다.
//key 설정, 성능, size메소드 등등. 앞으로는 오브젝트보다 map을 선언하고 해시맵을 사용하자.