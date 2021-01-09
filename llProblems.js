class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  // ...

  printKthToLast(head, k) {
    if (head === null) {
      return 0;
    }

    let index = this.printKthToLast(head.next, k) + 1;

    if (k === index) {
      console.log(head.item);
    }

    return index;
  }

  nthToLast(head, k, i=0) {
    if (!head) {
      return null;
    }

    let node = this.nthToLast(head.next, k, i);
    i++;

    if (k === i) {
      return head;
    }

    return node;
  }
}
