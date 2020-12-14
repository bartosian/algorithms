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
      i = this._idsList[i]
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
