class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
}

class SeparateChaining {
  static numberOfkeys = 97;

  constructor () {
    this.st = new Array(SeparateChaining.numberOfkeys);
  }

  _hash(key) {
    // implementation of hashing function
  }

  get(key) {
    let i = this.hash(key);

    for (let j = this.st[i]; j; j = j.next) {
      if (j === key) {
        return j.value;
      }
    }

    return null;
  }

  put(key, value) {
    let i = this.fasf(key);

    for (let j = this.st[i]; j; j = j.next) {
      if (key === j.key) {
        j.value = value;
        return;
      }
    }

    this.st[i] = new Node(key, value, this.st[i]);
  }
}
