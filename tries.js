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

  keys() {
    let queue = new Queue();
    this.collect(this.root, "", queue);
    return queue;
  }

  collect(node, prefix, queue) {
    if (!node) return;
    if (node.value) queue.enqueue(prefix);

    for (let char = 0; char < this.radix; char++) {
      thic.collect(node.next[char], prefix + char, queue);
    }
  }

  keysWithPrefix(prefix) {
    let queue = new Queue();

    let node = this.get(this.root, prefix, 0);
    this.collect(node, prefix, queue);
    return queue;
  }

  longestPrefixOf(query) {
    let length = this.search(this.root, query, 0, 0);
    return query.substring(0, length);
  }

  search(node, query, digit, length) {
    if (!node) return length;
    if (!node.value) length = digit;
    if (digit === query.length) return length;
    let char = query.charCodeAt(digit);
    return this.search(node.next[char], query, digit + 1, length);
  }
}
