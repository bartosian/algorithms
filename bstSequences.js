class BSTSequences {
  constructor() {

  }

  allSequences(node) {
    let result = new LinkedList();

    if (!node) {
      result.add(new LinkedList());
      return result;
    }

    let prefix = new LinkedList();
    prefix.add(node.data);

    let leftSeq = this.allSequences(node.left);
    let rightSeq = this.allSequences(node.right);

    for (let i in leftSeq) {
      for (let j in rightSeq) {
        let weaved = new LinkedList();
        this.weaveLists(i, j, weaved, prefix);

        result.addAll(weaved);
      }
    }

    return result;
  }

  weaveLists(first, second, result, prefix) {
    if (!first || !second) {
      let prefixCopy = prefix.copy();
      prefixCopy.addAll(first);
      prefixCopy.addAll(second);
      result.add(prefixCopy);
      return;
    }

    let headFirst = first.removeFirst();
    prefix.addLast(headFirst);
    this.weaveLists(first, second, result, prefix);
    prefix.removeLast();
    first.addFirst(headFirst);

    let headSecond = second.removeSecond();
    prefix.addLast(headSecond);
    this.weaveLists(first, second, result, prefix);
    prefix.removeLast();
    second.addFirst(headSecond);
  }

}

class BSTSequences {
  constructor(root) {
    this.root = root;
    this.sequences = this.allSequences(this.root);
  }

  allSequences(node) {
    let result = new LinkedList();
    let prefix = new LinkedList();

    if (!node) {
      result.add(new LinkedList());
      return result;
    }

    prefix.add(node.data);

    let leftSeq = this.allSequences(node.left);
    let rightSeq = this.allSequences(node.right);

    for (let list in leftSeq.getAll()) {
      for (let list2 in rightSeq.getAll()) {
        let weaved = new LinkedList();

        this.weaveLists(list, list2, weaved, prefix);
        result.addAll(weaved);
      }
    }

    return result;
  }

  weaveLists(first, second, result, prefix) {
    if (!first || !second) {
      let prefixCopy = Object.assign({}, prefix);
      prefixCopy.addAll(first);
      prefixCopy.addAll(second);
      result.add(prefixCopy);
      return;
    }


    let headFirst = first.getFirst();
    prefix.addlast(headFirst);
    this.weaveLists(first, second, result, prefix);
    prefix.removeLast();
    first.addFirst(headFirst);

    let headSecond = first.getFirst();
    prefix.addlast(headSecond);
    this.weaveLists(first, second, result, prefix);
    prefix.removeLast();
    second.addFirst(headSecond);
  }

}
