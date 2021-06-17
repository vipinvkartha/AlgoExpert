/**
 * 
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/
/*
 * Definition for singly-linked list.
 */
class ListNode {

    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }
    let temp = head;
    let tempNext = head.next;
    let dup = tempNext;
    while ((temp !== null) && (tempNext !== null) && (tempNext.next !== null)) {
        temp.next = tempNext.next;
        temp = temp.next;
        tempNext.next = temp.next
        tempNext = tempNext.next;
    }
    temp.next = dup;
    return head;

};