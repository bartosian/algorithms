class TreeInTree {
  constructor(rootA, rootB) {
    this.rootA = rootA;
    this.rootB = rootB;

    let result = this.containsTree();
    return result;
  }

  containsTree() {
    let travStrA = [],
        travStrB = [];

    this.getOrderString(this.rootA, travStrA);
    this.getOrderString(this.rootB, travStrB);

    return travStrA.join("").includes(travStrB.join(""));
  }

  getOrderString(node, strBuilder) {
    if (!node) {
      strBuilder.push("X");
      return;
    }

    strBuilder.push(node.data + " ");
    this.getOrderString(node.left, strBuilder);
    this.getOrderString(node.right, strBuilder);
  }
}
