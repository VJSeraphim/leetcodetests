/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length
    const col = board[0].length
    
    const DFS = (r, c, i) => {
        if(word.length === i) return true
        if(r >= row || r < 0 || board[r][c] !== word[i]) return false
        
        board[r][c] = '*'
        
        if(DFS(r+1, c, i + 1) || DFS(r, c+1, i + 1) || DFS(r-1, c, i + 1) || DFS(r, c-1, i + 1)) return true
        
        board[r][c] = word[i]
        
    }
    
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            if(board[i][j] === word[0] && DFS(i, j, 0)) return true
        }
    }
    
    return false
};