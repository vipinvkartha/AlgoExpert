export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    let curr: LinkedList = linkedList;
    while (curr !== null && curr.next !== null) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return linkedList;
}