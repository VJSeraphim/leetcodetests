/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = []
    let wordArr = []
    for ( let i=0; i<s.length; ++i) {
        if(s.charAt(i) === ' ') {
            wordArr.length > 0 && arr.unshift(wordArr.join(''))
            wordArr = []
        } else {
            wordArr.push(s.charAt(i))
        }
    }
    if (wordArr.length > 0) {
        arr.unshift(wordArr.join(''))
    }
    return arr.join(' ')
};