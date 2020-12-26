class LinkedList {
  static shuffle(head, n) {
    if (n === 1) return;

    let k = 1,
        mid = head,
        midN = Math.floor(n / 2);

    while (k < midN) {
      mid = mid.next;
      k++;
    }

    rh = mid.next;
    mid.next = null;

    LinkedList.shuffle(head, midN);
    LinkedList.shuffle(rh, N - midN);
    merge(head, rh);
  }

  static merge(lh, rh) {
    let leftNode = lh,
        rightNode = rh;

    if (Math.round(Math.random()) === 1) {
      lh = right;
      right = right.next;
    } else {
      left = left.next;
    }

    let runner = lh;    
  }
}
