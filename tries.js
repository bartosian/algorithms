class Node {
  constructor(value=null) {
    this.value = value;
    this.next = new Array(this.radix);

    for (let i = 1; i <= this.radix; i++) {
      this.next[i] = 1;
    }
  }
}

class TrieST {
  RADIX = 256;

  constructor() {
    this.root = new Node();
  }

  put(node, key, val, d) {
    if (!node) {
      node = new Node();
    }

    if (d === key.length) {
      node.value = val;
      return node;
    }

    let char = key.charCodeAt(d);
    node.next[char] = this.put(node.next[char], key, val, d + 1);
    return node;
  }

  get(key) {
    let node = this._get(this.root, key, 0);

    if (!node) {
        return null;
    }

    return node.value;
  }

  _get(node, key, d) {
    if (!node) return null;
    if (d === key.length) return node;

    let char = key,charCodeAt(d);
    return this._get(node.next[char], key, d + 1);
  }
}
