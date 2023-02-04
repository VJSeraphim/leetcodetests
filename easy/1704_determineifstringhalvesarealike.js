/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let lowerString = s.toLowerCase()
    let firstHalf = lowerString.slice(0, lowerString.length/2)
    let secondHalf = lowerString.slice(lowerString.length/2, lowerString.length)
    let count = 0
    for(let i=0; i<s.length; i++) {
        if(vowel.includes(firstHalf[i])) count++
        if(vowel.includes(secondHalf[i])) count--
    }

    return count === 0
};