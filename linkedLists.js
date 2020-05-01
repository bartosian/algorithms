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

    insertAtIndex(index, value) {
        let newNode = new Node(value);

        if(index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current_index = 0,
                node = this.head;

            while(current_index !== (index - 1)) {
                current_index += 1;
                node = node.next;
            }
            
            newNode = node.next;
            node.next = newNode;
        }
    }

    deleteAtIndex(index) {
        if(index == 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head,
                currentIndex = 0;

            while(currentIndex < (index - 1)) {
                currentNode = currentNode.next;
                currentIndex += 1;
            }    
            
            let nodeAfterDeleted = currentNode.next.next;
            currentNode.next = nodeAfterDeleted;
        }
    }
}

class DoublyNode {
    constructor(data) {
        this.data = data;
        this.previousNode = undefined;
        this.nextNode = undefined;
    }
}

class DoublyLinkedList {
    constructor(value) {
        let firstNode = new DoublyNode(value);
        this.head = firstNode;
        this.end = firstNode;
    }

    readNodeAtStart() {

        let readValue = this.head;

        if(this.head !== this.end) {
            this.head = this.head.nextNode;
        } else {
            this.head = this.end = undefined;
        }

        return readValue;
    }

    addToEnd(value) {
        let newNode = new DoublyNode(value);

        if(!this.firstNode) {
            this.head = this.end = newNode;
        } else {
           this.end.next = newNode;
           newNode.previousNode = this.end;
           this.end = newNode;
        }
    }
}

class Queue {
    constructor(value) {
        this.linkedList = new DoublyLinkedList(value);
    }

    enque(value) {
        this.linkedList.addToEnd(value);
    }

    deque() {
        let lastNode = this.linkedList.readNodeAtStart();

        return lastNode.data;
    }

    tail() {
        return this.linkedList.end.data;
    }
}