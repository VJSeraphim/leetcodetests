/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let orderMap = new Map()
    for(let i=0; i<order.length; i++) {
        orderMap.set(order[i], i)
    }
    for(let j=1; j<words.length; j++) {
        let prev = words[j-1]
        let curr = words[j]
        if (orderMap.get(prev[0]) > orderMap.get(curr[0])) {
            return false
        } else if(prev[0] === curr[0]) {
            let target = 1
            while(prev[target] === curr[target] && target < Math.max(curr.length, prev.length)) {
                target++
            }
            if((orderMap.get(prev[target]) >= 0 && !orderMap.get(curr[target])) || 
            orderMap.get(prev[target]) > orderMap.get(curr[target])) 
            return false
        }

    }
    return true
};