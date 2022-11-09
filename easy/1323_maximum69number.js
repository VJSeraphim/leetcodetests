/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    if (num == 9999) return num
    
    let res = num.toString().replace('6', '9')
    return Number(res)
};