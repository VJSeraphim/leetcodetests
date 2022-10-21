/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size == 26
};


//Set의 특징을 이용해서 풀이.
//Set은 Map과 다르게, 중복되는 값을 허용하지 않는다.
//따라서 문제에 주어진 Panagram의 조건을, Set의 크기가 26이라면 만족한다.