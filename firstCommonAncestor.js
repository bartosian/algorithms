// O(d)
class CommonAncestor {
  constructor(root, nodeA, nodeB) {
    this.root = root;
    this.nodeA = nodeA;
    this.nodeB = nodeB;
  }

  findCommonAncestor() {
    let nodeA = this.nodeA,
        nodeB = this.nodeB,
        depthA = this.getDepth(nodeA),
        depthB = this.getDepth(nodeB),
        depthDiff = depthA - depthB,
        first = depthDiff > 0 ? nodeA : nodeB,
        second = depthDiff > 0 ? nodeB : nodeA;

    second = this.goUpBy(second, depthDiff);

    while (first && second && first !== second) {
      first = first.parent;
      second = second.parent;
    }

    return !first || !second ? null : first;
  }

  getDepth(node) {
    let depth = 0;

    while (node) {
      node = node.parent;
      depth++;
    }

    return depth;
  }

  goUpBy(node, depth) {
    while (node && depth) {
      node = node.parent;
      depth--;
    }

    return node;
  }

  findCommonAnc() {
    let root = this.root,
        nodeA = this.nodeA,
        nodeB = this.nodeB;

    if (!this.covers(root, nodeA) || !this.covers(root, nodeB)) {
      return null;
    }

    return this.ancestorHelper(root, nodeA, nodeB);
  }

  ancestorHelper(root, nodeA, nodeB) {
    if (!root || root === nodeA || root === nodeB) {
      return root;
    }

    let isOnLeftA = this.covers(root.left, nodeA),
        isOnLeftB = this.covers(root.left, nodeB);

    if (isOnLeftA !== isOnLeftB) {
      return root;
    }

    childSie = isOnLeftA ? root.left : root.right;

    return this.ancestorHelper(childSie, nodeA, nodeB);
  }

  covers(root, node) {
    if (root === node) return true;
    if (!root) return false;

    return this.covers(root.left, node) || this.covers(root.right, node);
  }

  commonAncestor(root, p, q) {
    if (!root) return null;
    if (root === p && root === q) return root;

    let ancA = this.commonAncestor(root.left, p, q);

    if (ancA && ancA !== p && ancA !== q) return ancA;

    let ancB = this.commonAncestor(root.right, p, q);

    if (ancB && ancB !== p && ancB !== q) return ancB;

    if (ancA && ancB) {
      return root;
    } else if (ancA === p || ancB === q) {
      return root;
    } else {
      return !ancA ? ancB : ancA;
    }
  }
}
