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
var middleNode = function (head) {
    let curr = head;
    let size = 1;
    while (curr.next) {
        curr = curr.next;
        size++;
    }
    
    size = (size >> 1) + 1;

    while (size > 1) {
        head = head.next;
        size--;
    }
    return head;
};