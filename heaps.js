class BinaryHeap {
  constructor(comparator= (a, b) => {
    return (a < b) ? -1 : (a === b ? 0 : 1);
  }) {
    this.heap = [];
    this.comparator = comparator;
  }

  size() {
    return this.heap.length;
  }

  insert(val) {
    if (!val) return false;
    this.heap.push(val);

    (this.size() > 1) && this.bubbleUp(this.size() - 1);

    return true;
  }

  getLeftChild(idx) {
    return 2 * x + 1;
  }

  getRightChild(idx) {
    return 2 * x + 2;
  }

  getParent(idx) {
    return Math.floor((x - 1) / 2);
  }

  peak() {
    if (this.size) {
      return this.heap[0];
    }

    return false;
  }

  bubbleUp(idx) {
      while (idx > 0) {
        let currentEl = this.heap[idx],
            parentIdx = this.getParent(idx),
            parentEl = this.heap[parentIdx];

        let compare = this.comparator(parentEl, currentEl);

        if (compare <= 0) break;

        this.swap(idx, parentIdx);
        idx = parentIdx;
      }
  }

  extract() {
    if (!this.size()) return false;
    if (this.size() === 1) return this.heap.shift();

    let element = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.sinkDown(this.size() - 1);

    return element;
  }

  sinkDown(idx) {
    let leftChild = this.getLeftChild(idx),
        rightChild = this.getRightChild(idx),
        parentEl = this.heap[idx];

    if (leftChild < this.size() && this.comparator(this.heap[leftChild], parentEl) < 0) {
      parentIdx = leftChild;
    }

    if (rightChild < this.size() && this.comparator(this.heap[rightChild], parentEl) < 0) {
      parentIdx = rightChild;
    }

    if (idx !== parentIdx) {
      this.swap(idx, parentIdx);
      this.sinkDown(parentIdx);
    }
  }

  swap(idxA, idxB) {
    [this.heap[idxA], this.heap[idxB]] = [this.heap[idxB], this.heap[idxA]];
  }
}
