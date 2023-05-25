/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let total = questions.length

    let dynamic = new Array(total).fill(0)

    for(let i = total - 1; i>=0; i--) {
        let point = questions[i][0]
        let power = questions[i][1]

        let solved = point + (dynamic[i + power + 1] || 0)
        let skipped = (dynamic[i + 1] || 0)

        dynamic[i] = Math.max(solved, skipped)
    } 

    return dynamic[0]
};