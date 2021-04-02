class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(comparator=(a,b) => {
    return a.priority < b.priority ? -1 : (a.priority === b.priority ? 0 : 1);
  }) {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  getLeftChild(idx) {
    return 2 * idx + 1;
  }

  getRightChild(idx) {
    return 2 * idx + 2;
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  swap(idxA, idxB) {
    [this.values[idxA], this.heap[idxB]] = [this.heap[idxB], this.heap[idxA]];
  }

  enqueue(el) {
    if (!el) return false;

    this.values.push(el);

    if (this.size()) {
      this.bubbleUp(this.size() - 1);
    }

    return true;
  }

  bubbleUp(idx) {
    while (idx > 0) {
      let currEl = this.values[idx],
          parentIdx = this.getParent(idx),
          parentEl = this.heap[parentEl];

      let compare = this.comparator(parentEl, currEl);

      if (compare <= 0) break;

      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  peak() {
    if (this.size()) {
      return this.heap[0].value;
    }

    return false;
  }

  dequeue() {
    if (!this.size()) return false;
    if (this.size() === 1) return this.values.shift();

    let value = this.heap[0].value;
    this.heap[0] = this.heap.pop();

    this.sinkDown(0);

    return value;
  }

  sinkDown(idx) {
    let elIdx = idx,
        currEl = this.heap[0],
        leftChildIdx = this.getLeftChild(elIdx),
        rightChildIdx = this.getRightChild(elIdx);

    if (leftChildIdx < this.size() && this.comparator(this.heap[leftChildIdx], currEl) < 0) {
      currEl = this.heap[leftChildIdx];
    }

    if (rightChildIdx < this.size() && this.comparator(this.heap[rightChildIdx], currEl) < 0) {
      currEl = this.heap[rightChildIdx];
    }

    if (elIdx != idx) {
      this.swap(elIdx, idx);
      this.sinkDown(elIdx);
    }
  }
}
