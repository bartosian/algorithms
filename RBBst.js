const COLORS = {
  RED: "red",
  BLACK: "black"
};

class Node {
  constructor(key, value) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.color = COLORS.BLACK;
  }

  isRed() {
    return this.color ===  COLORS.RED;
  }
}

class RBBst {
  constructor() {}

  rotateLeft(node) {
    let nodeRight = node.right;
    node.right = nodeRight.left;
    nodeRight.left = node;
    nodeRight.color = node.color;
    node.color = COLORS.RED;

    return nodeRight;
  }

  rotateRight(node) {
    let nodeLeft = node.left;
    node.left = nodeLeft.right;
    nodeLeft.right = node;
    nodeLeft.color = node.color;
    node.color = COLORS.RED;

    return nodeLeft;
  }

  flipColors(node) {
    node.color = COLORS.RED;
    node.left.color = COLORS.BLACK;
    node.right.color = COLORS.BLACK;
  }
}
