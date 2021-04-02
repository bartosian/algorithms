class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0,
        PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i],
          value = char.charCodeAt(0) - 96;

      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let idx = this._hash(key);

    this.keyMap[idx] = this.keyMap[idx] : [];
    this.keyMap[idx].push([key, value]);

    return true;
  }

  get(key) {
    let idx = this._hash(key);

    if (!this.keyMap[idx]) return false;

    let chain = this.keyMap[idx],
        element = chain.find(el => el[0] === key);

    return element ? element[1] : null;
  }

  keys() {
    let result = [];

    for (let chain of this.keyMap) {
      if (!chain) continue;

      chain.forEach((el) => {
        result.push(el[0]);
      });
    }

    return result;
  }

  values() {
    let result = [],
        valueSet = {};

    for (let chain of this.keyMap) {
      if (!chain) continue;

      chain.forEach((el) => {
        if (!valueSet.has(el[1])) {
          result.push(el[1]);
          valueSet.add(el[1]);
        }
      });
    }

    return result;
  }
}
