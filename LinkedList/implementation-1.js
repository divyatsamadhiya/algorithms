//LinkedList Implementation and traversal

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");

a.next = b;
b.next = c;

//Iterative Method to print
const printLinkedList1 = (head) => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
};

//Recursive Method to print
const printLinkedList2 = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedList2(head.next);
};

printLinkedList1(a);
printLinkedList2(a);
