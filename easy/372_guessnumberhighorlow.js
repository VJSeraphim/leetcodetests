/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let bottom = 1
    while(true) {
        const middle = Math.floor((n + bottom)/2)
        let result = guess(middle)
        if (result === 0) return middle
        result === 1 ? bottom = middle + 1 : n = middle - 1
    }
};