/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result = 0
    let sum = 0
    let sign = 1
    
    let stack = []
    
    stack.push(1)
    
    const isNum = (n) => {
        return (n >= '0' && n <= '9')
    }
    
    for(let n of s) {
        if(isNum(n)) sum = sum * 10 + (n - '0')
        else {
            result += sum * sign * stack[stack.length - 1]
            sum = 0
            if(n === '-') sign = -1
            else if (n === '+') sign = 1
            else if (n === '(') {
                stack.push(stack[stack.length - 1] * sign)
                sign = 1
            }
            else if (n === ')') stack.pop()
        }
    }
    
    return result += (sign * sum)
};