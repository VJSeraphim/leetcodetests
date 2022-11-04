/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const map = new Map()
    let count = 0
    
    let isSame = false
    
    for(const w of words) {
        if (!map[w]) map[w] = 1
        else map[w]++
    }
    
    for (const w of words) {
        const reverse = w[1] + w[0]
        if( w === reverse ) {
            while(map[w] >= 2) {
                map[w] -= 2
                count += 4
            }
            if(map[w] === 1 & !isSame ) {
                isSame = true
                count += 2
                map[w]--
            }
            continue
        }
        while(map[w] > 0 && map[reverse] > 0) {
            map[w]--
            map[reverse]--
            count += 4
        }
    }
    
    return count
};