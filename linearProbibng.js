class LinearProbing {
  static tableCapacity = 30001;

  constructor() {
    this.values = new Array(LinearProbing.tableCapacity);
    this.keys = new Array(LinearProbing.tableCapacity);
  }

  hash(key) {
    // hashing function implementation
  }

  get(key) {
    for (let i = this.hash(key); this.keys[i]; i = (i + 1) % LinearProbing.tableCapacity) {
      if (key === this.keys[i]) {
        return this.values[i];
      }
    }
  }

  put(key, value) {
    let i = this.hash(key);

    for (let j = i; this.keys[j]; i = j = (j + 1) % LinearProbing.tableCapacity) {
      if (key === this.keys[i]) {
        break;
      }
    }

    this.keys[i] = key;
    this.values[i] = value;
  }
}
