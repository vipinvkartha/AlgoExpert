// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
    // Write your code here.
    let newList = new LinkedList(0);
    let carry = 0;
    let curr1: any = linkedListOne;
    let currNode = newList;
    let curr2: any = linkedListTwo;
    while (curr1 !== null || curr2 !== null) {
        let val1 = curr1?.value || 0;
        let val2 = curr2?.value || 0;
        let sum = val1 + val2 + carry;
        let value = sum % 10;
        let newNode = new LinkedList(value);
        currNode.next = newNode;
        currNode = newNode;
        carry = Math.floor(sum / 10);
        curr1 = curr1?.next || null;
        curr2 = curr2?.next || null;
    }
    return newList.next;
  }
  