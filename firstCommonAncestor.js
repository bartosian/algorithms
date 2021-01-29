// O(d)
class CommonAncestor {
  constructor(nodeA, nodeB) {
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
}
