/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if (k === 1) {
        let result = s
        for(let i=0; i<s.length; i++) {
            const str = s.substr(i) + s.substr(0, i)
            
            if(result.localeCompare(str) > 0) {
                result = s.substr(i) + s.substr(0, i)
            }
            
        }
        
        return result
    } else {
        return s.split('').sort().join('')
    }
};