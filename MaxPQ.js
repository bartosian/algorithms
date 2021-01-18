class MaxPQ {
  constructor(capacity) {
    this.n = 0;
    this.pq = new Array(capacity + 1);
  }

  isEmpty() {
    return !this.n;
  }

  insert(key) {
    this.pq[++this.n] = key;

    this.swim(this.n);
  }

  delMax() {
    let max = this.pq[1];
    this.swap(1, this.n--);
    this.pq[this.n + 1] = null;

    this.sink(1);

    return max;
  }

  swim(k) {
    while (k > 1 && less(k/2, k)) {
      this.swap(k, k / 2);
      k = k / 2;
    }
  }

  sink(k) {
    while (2 * k <= this.n) {
      let j = 2 * k;

      if (j < this.n && this.less(j, j + 1)) j++;
      if (!less(k, j)) break;

      this.swap(k, j);
      k = j;
    }
  }

  less(i, j) {
    return this.pq[i] < this.pq[j];
  }

  swap(i, j) {
    let tmp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = tmp;
  }
}
