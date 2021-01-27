class Node {
  constructor(key, value, size) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1;
  }
}

class BST {
  constructor(node) {
      this.root = node;
  }

  put(node=this.root, key, value) {
    if (!node) {
      return new Node(key, value, 1);
    }

    if (key < node.key) {
      node.left = this.put(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.put(node.right, key, value);
    } else {
      node.value = value;
    }

    node.count = 1 + this.size(node.left) + this.size(node.right);

    return node;
  }

  size() {
    return this._size(this.root);
  }

  _size(node) {
    if (!node) return 0;

    return node.size;
  }

  min() {
    let node = this.root;

    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    let node = this.root;

    while (node.right) {
      node = node.right;
    }

    return node.value;
  }

  get(key) {
    let node = this.root;

    while(node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node.value;
      }
    }

    return null;
  }

  floor(key) {
    let node = this._floor(this.root, key);

    if (node) {
      return node value;
    }

    return null;
  }

  _floor(node, key) {
    if (!node) return null;

    if (key === node.key) return node;

    if (key < node.key) {
      return this._floor(node.left, key);
    } else (key > node.key) {
      let t = this._floor(node.right, key);

      if (!t) {
        return node;
      } else {
        return t;
      }
    }
  }

  rank(key) {
    return this._rank(key, this.root);
  }

  _rank(key, node) {
    if (key < node.key) {
      return this._rank(key, node.left);
    } else if (key > node.right) {
      return 1 + this.size(node.left) + this._rank(key, node.right)
    } else {
      return this.size(node.left);
    }
  }

  keys() {
    let queue = new Queue();

    this.inorder(this.root, queue);
    return queue;
  }

  // return in ascending order
  inorder(node, queue) {
    this.inorder(node.left, queue);
    queue.enqueue(node.key);
    this.inorder(node.right, queue);
  }

  deleteMin(node) {
    if (!node) return node.right;

    node.left = this.deleteMin(node.left);
    node.count = 1 + this.size(node.left) + this.size(node.right);

    return node;
  }

  // Hibbard deletion
  delete(node=this.root, key) {
    if (!node) return null;

    if (key < node.key) {
      node.left = this.delete(node.left, key);
    } else if (key > node.key) {
      node.right = this.felete(node.right, key);
    } else {
      if (!node.right) return node.left;
      if (!node.left) return node.right;

      let t = node;
      node = min(t.right);
      node.right = this.deleteMin(node.right);
      node.lrft = t.left;
    }

    node.count = this.size(node.left) + this.size(node.right) + 1;
    return node;
  }
}

function depthLists(root, levels, level) {
  if (!root) return;

  let level = null;

  if (levels.size() === level) {
    level = new List();
    levels.add(level);
  } else {
    level = levels.get(level);
  }

  level.add(root);

  depthLists(root.left, levels, level + 1);
  depthLists(root.right, levels, level + 1);
}

depthLists(root, [], 0);

function checkHeight(root) {
  if (!root) return -1;

  let leftheight = checkHeight(root.left);
  let rightHeight = checkHeight(root.right);

  let heightDiff = leftheight - rightHeight;

  if (Math.abs(heightDiff) > 1) {
    return Number.MIN_SAFE_INTEGER;
  } else {
    return Math.max(leftheight, rightHeight) + 1;
  }
}

function isBalanced(root) {
  return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
}

let lastPrinted = null;

function isBST(node) {
  if (!isBST(node.left)) return false;

  if (lastPrinted && node.value < lastPrinted) {
    return false;
  }

  lastPrinted = node.value;

  if (!isBST(node.right)) return false;

  return true;
}
