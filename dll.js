class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.tail) return undefined;

    let node = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let prev = this.tail.prev;
      prev.next = null;
      node.prev = null;
      this.tail = prev;
    }

    this.length--;

    return node;
  }
}
