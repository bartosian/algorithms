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

class CheckSubtree {
  constructor() {
    this.rootA = rootA;
    this.rootB = rootB;

    return this.containsTree(this.rootA, this.rootB);
  }

  containsTree(nodeA, nodeB) {
    if (!nodeB) {
      return true;
    }

    return this.subTree(nodeA, nodeB);
  }

  subTree(nodeA, nodeB) {
    if (!nodeA) {
      return false;
    }

    if (nodeA.data === nodeB.data && this.matchTree(nodeA, nodeB)) {
      return true;
    }

    return this.subtree(nodeA.left, nodeB) || this.subTree(nodeA.right, nodeB);
  }

  matchTree(nodeA, nodeB) {
    if (!nodeA && !nodeB) {
      return true;
    } else if (!nodeA || !nodeB) {
      return false;
    } else if (nodeA.data !== nodeB.data) {
      return false;
    }

    return this.matchTree(nodeA.left, nodeB.left) && this.matchTree(nodeA.right, nodeB);
  }
}
