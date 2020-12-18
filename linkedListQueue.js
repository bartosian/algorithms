class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.n = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  enqueue(item) {
    let node = new Node(item),
        oldTail = this.tail;

    this.tail = node;

    if (this.isEmpty()) {
      this.head = this.tail;
    } else {
      oldTail.next = this.tail;
    }

    this.n++;
  }

  dequeue() {
    if (this.isEmpty()) return false;

    let node = this.head;
    this.head = this.head.next;

    if (this.isEmpty()) {
      this.last = this.head;
    }
  }
}
