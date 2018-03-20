/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let node = head
  let arr = []
  let newHead = new ListNode(null)
  let ano = newHead
  console.log(node)
  while (node !== null && (node.next !== 'undefined' || node.next === null)) {
    arr.push(node.val)
    if (arr.length > 1) {
      ano.next = new ListNode(arr.pop())
      ano.next.next = new ListNode(arr.pop())
      ano = ano.next.next
    }
    node = node.next
  }
  if (arr.length !== 0) {
    ano.next = new ListNode(arr[0])
  }
  return newHead.next
};