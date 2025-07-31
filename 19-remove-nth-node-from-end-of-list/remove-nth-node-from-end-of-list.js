/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) return head.next;
    const temp = new ListNode(-1, head);
    let size = 1;
    while(head.next){
        size++;
        head = head.next;
    }

    if (size == n) return temp.next.next;

    head = temp.next;

    while(size != n+1){
        head = head.next;
        size--;
    }

    head.next = head.next.next;
    
    return temp.next;
};