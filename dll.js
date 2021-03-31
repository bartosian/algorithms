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

  shift() {
    if (!this.head) return false;

    let node = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;

    return node;
  }

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return false;

    let counter,
        currNode;

    if (idx <= Math.floor(this.length / 2)) {
      counter = 0;
      currNode = this.head;

      while (counter !== idx) {
        currNode = currNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currNode = this.tail;

      while (counter != idx) {
        currNode = currNode.prev;
        counter--;
      }
    }

    return currNode.value;
  }

  set(idx, val) {
    let node = this.get(idx);

    if (!node) return false;

    node.value = val;

    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      return !!this.unshift(val);
    } else if (idx === this.length) {
      return !!this.push(val);
    } else {
      let prevNode = this.get(idx - 1),
          newNode = new Node(val);

      newNode.next = prevNode.next;
      prevNode.next.prev = newNode;
      prevNode.next = newNode;

      this.length++;

      return true;
    }
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();

    let node = this.get(idx);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = node.prev = null;

    this.length--;

    return true;
  }

  reverse() {
    if (this.length <= 1) return this.head;

    let temp = null,
        current = this.head;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    return this.head;    
  }
}
