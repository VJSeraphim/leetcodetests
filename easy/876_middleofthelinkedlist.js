/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* var middleNode = function(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow
}; */

//Javascript로 연결리스트는 익숙하지가 않아서, C언어 할때 연결리스트처럼 비슷하게 해봤는데
//discuss에 유사한 풀이가 있어서 그걸 가져왔음.

var middleNode = function(head) {
    let fast = head.next
    while(fast) {
        head = head.next
        fast = fast.next?.next
    }
    return head
};

// 간소화한 코드
//'?.' : 앞의 값이 존재할 경우에만 실행함.
// 시간복잡도는 이쪽이 더 느리다.