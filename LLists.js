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
