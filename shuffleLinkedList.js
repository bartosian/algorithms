class LinkedList {
  static merge(lh, rh) {
    let left = lh,
        right = rh;

    if (Math.round(Math.random()) === 1) {
      lh = right;
      right = right.next;
    } else {
      left = left.next;
    }

    let pointer = lh;

    while (left.next != null || right.next != null) {
      if (left.next === null) {
          pointer.next = right;
          right = right.next;
      } else if (right.next === null) {
        pointer.next = left;
        left = left.next;
      } else if (Math.round(Math.random()) === 1) {
        pointer.next = right;
        right = right.next;
      } else {
        pointer.next = left;
        left = left.next;
      }

      pointer = pointer.next;
    }
  }

  static shuffle(head, n) {
    if (n === 1) return;

    let mid = Math.floor(n / 2),
        midNode = head;

    for (let i = 0; i < mid; i++) {
      midNode = midNode.next;
    }

    let lh = head,
        rh = midNode.next;

    midNode.next = null;

    LinkedList.shuffle(lh, mid);
    LinkedList.shuffle(rh, n - mid);

    LinkedList.merge(lh, rh);
  }
}
