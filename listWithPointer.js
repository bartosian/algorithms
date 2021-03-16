function Node {
  constructor(val, next, random) {
    this.val = val || null;
    this.next = next || null;
    this.random = random || null;
  }
}

class RandomListCopy {
  constructor() {
    this.nodeMap = new Map();
  }
  copy(head) {
    if (!head) {
        return null;
    }

    if (this.nodeMap.has(head)) {
      return this.nodeMap.get(head);
    }

    let newNode = new Node(head.val);

    this.nodeMap.set(head, newNode);

    newNode.next = this.copy(head.next);
    newNode.random = this.copy(head.random);

    return newNode;
  }
}
