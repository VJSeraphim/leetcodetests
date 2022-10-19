/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix, result = []) {
    if (matrix.length === 0) return result
    
    for (let i=0; i<matrix.length; i++) {
        let current = matrix[i]
        if ( i === 0 ) {
            result = result.concat(current)
        } else {
            let last = current.pop()
            if(!last) return result
            result.push(last)
            current.reverse()
        }
    }
    matrix.shift()
    console.log(matrix)
    return spiralOrder(matrix.reverse(), result)
};

//concat 메소드 : 기존의 배열에 concat에 할당된 배열을 합쳐서 새로운 배열을 만듬.
//shift 메소드 : 배열에서 첫 요소 제거, 제거된 요소 반환
//pop 메소드 : 배열의 마지막 요소 제거, 제거된 요소 반환
//reverse 메소드 : 배열의 순서 반전

/*
    일단 매번 그렇듯 주어지는 배열이 빈 배열일 경우는 그냥 반환
    current에는 matrix에 남아 있는 첫번째 배열 그대로 저장. (첫 if문)
    그 후, 2번째 배열부터는 spiral 방향으로 운행해야 하므로 matrix 배열 요소의 마지막 배열값들을 저장.
    이 과정은 마지막 matrix의 배열 원소까지.
    이 과정이 끝난 후, reverse 메소드로 배열을 뒤집어 다시 운행.
*/

/*
    direction을 설정하여 하는 방법도 있긴 한데... 너무 느릴것 같아서 어떤 규칙으로 배열을 운행하는지 생각해보고 낸 풀이법.
*/