class LFU {
  constructor(capacity) {
    this.keyToFreqMap = new Map();
    this.freqToKeyMap = new Map();
    this.keyToValMap = new Map();
    this.lfuValue = 0;
  }

  get(key) {
    let value = this.keyToValMap.get(key);

    if (value) {
      this.addFreqTo(key);
      return value;
    } else {
      return -1;
    }
  }

  addFreqTo(key) {
    let freq = this.keyToFreqMap.get(key) + 1 || 1;
    this.keyToFreqMap.set(key, freq);

    if (freq > 1) {
      let oldFreq = freq - 1,
          oldFreqSet = this.freqToKeyMap.get(oldFreq);

      oldFreqSet.delete(key);

      if (!oldFreqSet.size) {
        this.freqToKeyMap.delete(oldFreq);

        if (oldFreq === this.lfuValue) this.lfuValue++;
      }
    }

    let newFreqSet = this.freqToKeyMap.get(freq) || new Set();
    newFreqSet.add(key);
    this.freqToKeyMap.set(freq, newFreqSet);
  }

  put(key, value) {
    if (this.keyToValMap.size === this.capacity && !this.keyToValMap.has(key)) {
      this.evict();
    }

    if (!this.keyToValMap.has(key)) {
      this.lfuValue = 1;
    }

    this.addFreqTo(key);
    this.keyToValMap.set(key, value);
  }

  evict() {
    let lfuSet = this.freqToKeyMap.get(this.lfuValue),
        lfuVal = lfuSet.values().next().value;

    this.lfuSet.delete(lfuVal);

    if (!this.lfuSet.size) {
      this.freqToKeyMap.delete(this.lfuValue);
    }

    this.keyToFreqMap.delete(lfuVal);
    this.keyToValMap.delete(lfuVal);
  }
}
