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

class RandomListCopyWithoutMap {
  copy(head) {
    if (!head) return null;

    let newList = head;

    while (newList) {
      let newNode = new Node(newList.val);
      newNode.next = newList.next;
      newList.next = newNode;
      newList = newNode.next;
    }

    newList = head;

    while (newList) {
      newList.next.random = newList.random ? newList.random.next : null;
      newList = newList.next.next;
    }

    let oldList = head,
        newlist = head.next,
        headOld = head.next;

    while (oldList) {
      oldList.next = oldList.next.next;
      newlist.next = newlist.next ? newlist.next.next : null;
      oldList = oldList.next;
      newlist = newlist.next;
    }

    return headOld;
  }
}
