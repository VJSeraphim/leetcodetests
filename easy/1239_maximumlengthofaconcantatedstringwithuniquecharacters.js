/**
 * @param {string[]} arr
 * @return {number}
 */

var maxLength = function(arr) {
    let result = 0
    const uniqueWords = (word) => {
        const hashMap = new Map()
        for(let i=0; i<word.length; i++) {
            const w = word[i]
            if(hashMap.has(w)) return false
            hashMap.set(w, true)
        }
        return true
    }
    
    const dfs = (idx, string) => {
        if(idx === arr.length) return
        const combinedStr = arr[idx] + string
        
        if(uniqueWords(combinedStr)) {
            result = Math.max(result, combinedStr.length)
            dfs(idx + 1, combinedStr)
        }
        dfs(idx + 1, string)
        
    }
    
    dfs(0, '')
    return result
    
};

/*
dfs로 Recursion을 돌림. 주어진 배열의 원소와 빈 문자열, 0번 인덱스를 시작으로 돌린다.
돌리는 중, 중복되는 원소가 있을 경우 위의 uniquewords에 false로 리턴됨.
중복되지 않을 경우 기존의 string과 arr에서 추가로 배치된 idx string의 길이 중 더 큰 것을
result에 저장 후 반환.
그 후에 다음 인덱스로 이동.
*/