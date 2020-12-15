function deleteDups(node) {
  let set = new Set(),
      previous = null;

  while (node) {
    if (set.has(node.data)) {
      previous.next = node.next;
    } else {
      set.add(node.data);
      previous = node;
    }

    node = node.next;
  }

}

function deleteDupsWithoutBuffer(head) {
  let current = head;

  while(current) {
    let runner = current;

    while (runner.next) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }
}
