class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }
}

class LinkedList {
    constructor(node) {
       this.head = node;
    }
}

let node_1 = new Node("first node");
let node_2 = new Node("second node");
let node_3 = new Node("third node");

node_1.next = node_2;
node_2.next = node_3;
node_3.next = undefined;

let list = LinkedList(node_1);