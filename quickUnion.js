class QuickUnionFind {
  constructor(n) {
    this._idsList = new Array(n);
    this._size = new Array(n);

    for (let i = 0; i < this._idsList.length; i++) {
      this._idsList[i] = i;
      this._size[i] = 1;
    }
  }

  _root(i) {
    while (this._idsList[i] !== i) {
      this._idsList[i] = this._idsList[this._idsList[i]];
      i = this._idsList[i];
    }
    return i;
  }

  connected(a, b) {
    return this._root(a) === this._root(b);
  }

  union(a, b) {
    let rootA = this._root(a),
        rootB = this._root(b);

    if (rootA === rootB) return;

    if (this._size[rootA] < this._size[rootB]) {
      this._idsList[rootA] = rootB;
      this._size[rootB] += this.size[rootA];
    } else {
      this._idsList[rootB] = rootA;
      this._size[rootA] += this._size[rootB];
    }

    this._idsList[rootA] = rootB;
  }
}

class WQUPC {
  constructor(n) {
    this._ids = new Array(n);
    this._sizes = new Array(n).fill(1);
    this._allConnected = false;

    for (let i = 0; i < this._idsList.length; i++) {
      this._idsList[i] = i;
    }
  }

  _root(i) {
    while (i !== this._idsList[i]) {
      this._idsList[i] = this._idsList[this._idsList[i]];
      i = this._idsList[i];
    }
  }

  union(a, b) {
    let rootA = this._root(a),
        rootB = this._root(b),
        sizeA = this._sizes[rootA],
        sizeB = this._sizes[rootB];

    if (sizeA < sizeB) {
      this._idsList[rootA] = rootB;
      this._sizes[rootB] += this._sizes[rootA];

      if (this._sizes[rootB] === this._idsList.length) this._allConnected = true;
    } else {
      this._idsList[rootB] = rootA;
      this._sizes[rootA] += this._sizes[rootB];

      if (this._sizes[rootA] === this._idsList.length) this._allConnected = true;
    }
  }
}
