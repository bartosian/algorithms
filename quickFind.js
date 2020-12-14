class QuickFindUnionFind {
  constructor(n) {
    this._idsList = new Array(n);

    for (let i = 0; i < this._idsList.length; i++) {
      this._idsList[i] = i;
    }
  }

  connected (a, b) {
    if (this._idsList[a] === this._idsList[b]) return true;
  }

  union (a, b) {
    let idA = this._idsList[a],
        idB = this._idsList[b];

    for (let i = 0; i < this._idsList.length; i++) {
      if (this._idsList[i] === idA) this._idsList[i] = idB;
    }
  }
}
