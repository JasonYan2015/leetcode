/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    n = ~~n
    let obj = [{node: head, count: 0}]
    let node = head
    while (node.next) {
        node = node.next
        let count = obj.length
        obj.push({node, count})
    }
    const len = obj.length
    if (n === len) {
        return typeof obj[1] == 'undefined' ? null : obj[1].node
    } else if (n === 1) {
        obj[(len-n-1)].node.next = null
    } else {
        obj[(len-n-1)].node.next = obj[(len-n+1)].node
    }
    return obj[0].node
};