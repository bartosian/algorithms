class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(item) {
    let node = new Node(item);

    if (!this.head) {
      this.head = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      node.next = oldHead;
    }

    this.size++;
  }

  isEmpty() {
    return this.head === null;
  }

  pop() {
    if (!this.isEmpty()) {
      return false;
    }

    let node = this.head;
    this.head = this.head.next;
    this.size--;

    return node;
  }
}
