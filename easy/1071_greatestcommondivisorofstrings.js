/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1) return ''

    let gcd = (x, y) => {
        if(!y) return x
        return gcd(y, x%y)
    }

    let divided = gcd(str1.length, str2.length)
    return str1.slice(0, divided)
};