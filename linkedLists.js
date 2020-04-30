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

    read(index) {
        let current_index = 0,
            node = this.head;

        
        while(current_index !== index) {
            node = node.next;
            current_index += 1;


            if(!node) {
                return "Nothing found"
            }
        }
        
        return node.data;
    }

    indexOf(value) {
        let current_index = 0,
            node = this.head;

        
        while(node.data !== value) {
            current_index += 1;
            node = node.next;


            if(!node) {
                return null;
            }
        }

        return current_index;
    }
}

let node_1 = new Node("first node");
let node_2 = new Node("second node");
let node_3 = new Node("third node");

node_1.next = node_2;
node_2.next = node_3;
node_3.next = undefined;

let list = new LinkedList(node_1);