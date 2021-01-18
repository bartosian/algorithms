class PriorityQueueUnorderedArray {
  constructor() {
    this.values = [];
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  insert(key) {
    this.values[size++] = key;
  }

  delMax() {
    let max = 0;

    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] > max) {
        max = i;
      }
    }

    this.swap(arr, max, this.size - 1);
    return this.values[--this.size];
  }
}
