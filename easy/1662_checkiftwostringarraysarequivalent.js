/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return (word1.join('') === word2.join('') ? true : false)
};

//배열 2개 join해서 같은지 비교.
//최대한 간결하게 삼항연산자 쓴 한줄풀이