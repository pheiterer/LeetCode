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
var deleteDuplicates = function(head) {
    if (head === null) return null;
    const result = new ListNode(head.val);
    while(head.next){
        head = head.next;
            let helper = result;
            while(helper.next){
                helper = helper.next;
            }
        if (head.val != helper.val) helper.next = new ListNode(head.val);
    }


    return result;
};