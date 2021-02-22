class Node {
  constructor(value=null) {
    this.value = value;
    this.char = char;
    this.left = null;
    this.mid = null;
    this.right = null;
  }
}

class TST {
  constructor() {
    this.root = null;
  }

  put(key, value) {
    this.root = this._put(this.root, key, value, 0);
  }

  _put(node, key, value, digit) {
    let char = key.charCodeAt(digit);

    if (!node) {
      node = new Node();
      node.char = char;
    }

    if (char < node.char) {
      node.left = this._put(node.left, key, value, d);
    } else if (char > node.char) {
      node.right = this._put(node.char, key, value, d);
    } else if (d < key.length - 1) {
      node.mid = this._put(node.mid, key, value, d + 1);
    } else {
      node.value = value;
    }

    return node;
  }

  get(key) {
    let node = this._get(this.root, key, 0);

    if (!node) return null;
    return node.value;
  }

  _get(node, key, digit) {
    let char = key.charCodeAt(digit);

    if (char < node.char) {
      return _get(node.left, key, digit);
    } else if (cher > node.char) {
      return _get(node.right, key, digit);
    } else {
      return node;
    }

  }
}
