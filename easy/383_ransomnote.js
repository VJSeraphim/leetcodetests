/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/* var canConstruct = function(ransomNote, magazine) {
    const magazineArr = magazine.split('') // magazine 문자열을 자름
    for ( let i=0; i<ransomNote.length; i++) {
        if (magazineArr.indexOf(ransomNote[i]) === -1) { //ransomNote가 존재하지 않을 때
            return false 
        } else {
            magazineArr.splice(magazineArr.indexOf(ransomNote[i]), 1)
        }
    }
        return true
} */

/*
    for문과 splice의 사용으로 위 방법은 O(n^2)의 시간복잡도를 가짐.
*/

var canConstruct = function(ransomNote, magazine) {
    let hashMap = {}
    for (const char of magazine) {
        hashMap[char] = hashMap[char] + 1 || 1
    }
    for(const char of ransomNote) {
        if (!hashMap[char]) return false
        hashMap[char]--
    }
    return true
}

/*
    해시맵 사용으로 윗 방법보다 훨씬 빠른 시간에 처리 가능(O(n))
    해시맵에 magazine의 char값을 저장 후, ransomNote와 비교
    일치하는 부분이 없을 경우 false 반환
*/