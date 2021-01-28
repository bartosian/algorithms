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

  put(node, key, value) {
    if (!node) return new Node(key, value, COLORS.RED);

    if (key < node.key) {
      node.left = this.put(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.put(node.right, key, value);
    } else {
      node.value = value;
    }

    if (node.right.isRed() && !node.left.isRed()) node = this.rotateLeft(node);
    if (node.left.isRed() && node.left.left.isRed()) node = this.rotateRight(node);
    if (node.left.isRed() && node.right.isRed()) this.flipColors(node);

    return node;
  }
}
