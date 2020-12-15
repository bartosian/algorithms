class QuickUnionFind {
  constructor(n) {
    this._idsList = new Array(n);
    this._size = new Array(n);
    this._grouped = new Array(n);
    this._groupMax = new Array(n);
    this.size = n;

    for (let i = 0; i < this._idsList.length; i++) {
      this._idsList[i] = i;
      this._size[i] = 1;
      this._grouped[i] = [i];
      this._groupMax[i] = i;
    }
  }

  _root(i) {
    while (this._idsList[i] !== i) {
      this._idsList[i] = this._idsList[this._idsList[i]];
      i = this._idsList[i];
    }
    return i;
  }

  find(i) {

  }

  connected(a, b) {
    return this._root(a) === this._root(b);
  }

  union(a, b) {
    let rootA = this._root(a),
        rootB = this._root(b),
        sizeA = this._sizes[rootA],
        sizeB = this._sizes[rootB];

    if (rootA === rootB) return;

    if (sizeA > sizeB) {
      this._idsList[rootB] = rootA;
      this._sizes[rootA] += sizeB;
      this._groupMax[rootA] = Math.max(this._groupMax[rootA], this._groupMax[rootB]);
      this._grouped[rootA] =
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
    this._groupMax = new Array(n);

    for (let i = 0; i < this._idsList.length; i++) {
      this._idsList[i] = i;
      this._groupMax[i] = i;
    }
  }

  _root(i) {
    while (i !== this._idsList[i]) {
      this._idsList[i] = this._idsList[this._idsList[i]];
      i = this._idsList[i];
    }
  }

  find(i) {
    let root = this._root(i);

    if (!root) return false;

    return this._groupMax[root];
  }

  union(a, b) {
    let rootA = this._root(a),
        rootB = this._root(b),
        sizeA = this._sizes[rootA],
        sizeB = this._sizes[rootB];

    if (sizeA < sizeB) {
      this._idsList[rootA] = rootB;
      this._sizes[rootB] += this._sizes[rootA];
      this._groupMax[rootB] = Math.max(this._groupMax[rootA], this._groupMax[rootB]);

      if (this._sizes[rootB] === this._idsList.length) this._allConnected = true;
    } else {
      this._idsList[rootB] = rootA;
      this._sizes[rootA] += this._sizes[rootB];
      this._groupMax[rootA] = Math.max(this._groupMax[rootA], this._groupMax[rootB]);

      if (this._sizes[rootA] === this._idsList.length) this._allConnected = true;
    }
  }
}

class Seq {
  constructor(arr) {
      this._hash = {};

      for (let key of arr) {
        this._hash[key] = key;
      }
  }

  root(i) {
    while (i !== this._hash[i]) {
      this._hash[i] = this._hash[this._hash[i]];
      i = this._hash[i];
    }

    return i;
  }

  remove(x) {
    this._hash[x] = this.root(x - 1);
  }

  find(x) {
    let root = this.root(x);
    return root >= 0 ? root : null;
  }
}
