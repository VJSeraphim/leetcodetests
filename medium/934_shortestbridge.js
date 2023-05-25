/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {

        const calculateDist = (aDist, bDist) => {
        let min = Infinity

        for(let i=0; i<aDist.length; i++) {
            for(let j=0; j<bDist.length; j++) {
                let diff = Math.abs(aDist[i][0] - bDist[j][0]) + Math.abs(aDist[i][1] - bDist[j][1]) -1
                min = Math.min(diff, min)
            }
        }

        return min
    }

    const dfs = (A, i, j, result) => {
        if(i < 0 || j < 0 || i >= A.length  || A[i][j] !== 1) return

        A[i][j] = 0
        result.push([i, j])

        dfs(A, i-1, j, result)
        dfs(A, i+1, j, result)
        dfs(A, i, j-1, result)
        dfs(A, i, j+1, result)
    }

    let aIsland = []
    let bIsland = []

    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
            if(grid[i][j] === 1) {
                if(!aIsland.length) {
                    dfs(grid, i, j, aIsland)
                }
                if(!bIsland.length) {
                    dfs(grid, i, j, bIsland)
                }
            }
        }
    }

    let dist = aIsland.length > bIsland.length ? calculateDist(bIsland, aIsland) : calculateDist(aIsland, bIsland)
    return dist


};