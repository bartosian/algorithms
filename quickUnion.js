class QuickUnionFind {
  constructor(n) {
    this._idsList = new Array(n);

    for (let i = 0; i < this._idsList.length; i++) {
      this._idsList[i] = i;
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

    this._idsList[rootA] = rootB;
  }
}
