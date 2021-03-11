class BinaryHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  insert(data) {
    if (data === undefined || data === null) return false;
    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);

    return true;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = this.getParent(index),
          parentElement = this.heap[parentIndex],
          compareRes = this.comparator(parentElement, this.heap[index]);


      if (compareRes <= 0) return;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  swap(indexA, indexB) {
    [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]];
  }

  peak() {
    if (this.size()) {
      return this.heap[0];
    } else {
      return undefined;
    }
  }

  extract() {
    if (!this.size()) return undefined;

    if (this.size() === 1) {
      return this.heap.shift();
    }

    let element = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return element;
  }

  sinkDown(index) {
    let leftChild = this.getLeftChildIndex(index),
        rightChild = this.getRightChildIndex(index),
        parent = index;

    if (leftChild < this.size() && this.comparator(this.heap[leftChild], this.heap[parent]) < 0) {
      parent = leftChild;
    }

    if (rightChild < this.size() && this.comparator(this.heap[rightChild], this.heap[parent]) < 0) {
      parent = rightChild;
    }

    if (parent !== index) {
      this.swap(parent, index);
      this.sinkDown(parent);
    }
  }
}

class MedianFinder {
  constructor() {
    this.lowerHalf = new BinaryHeap((a, b) => b - a);
    this.biggerHalf = new BinaryHeap((a, b) => a - b);
    this.median = 0;
  }

  addNum(num) {
    if (this.lowerHalf.size() > this.biggerHalf.size()) {
      if (num >= this.median) {
        this.biggerHalf.insert(num);
      } else {
        this.biggerHalf.insert(this.lowerHalf.extract());
        this.lowerHalf.insert(num);
      }

      this.median = (this.lowerHalf.peak() + this.biggerHalf.peak()) / 2;
    } else if (this.lowerHalf.size() < this.biggerHalf.size()) {
      if (num < this.median) {
        this.lowerHalf.insert(num);
      } else {
        this.lowerHalf.insert(this.biggerHalf.extract());
        this.biggerHalf.insert(num);
      }

      this.median = (this.lowerHalf.peak() + this.biggerHalf.peak()) / 2;
    } else {
      if (num >= this.median) {
        this.biggerHalf.insert(num);
        this.meadian = this.biggerHalf.peak();
      } else {
        this.lowerHalf.insert(num);
        this.meadian = this.lowerHalf.peak();
      }
    }
  }

  findMedian() {
    if (!this.lowerHalf.size() && !this.biggerHalf.size()) return null;

    if (this.lowerHalf.size() > this.biggerHalf.size()) {
      return this.lowerHalf.peak();
    } else if (this.lowerHalf.size() < this.biggerHalf.size()) {
      return this.biggerHalf.peak();
    } else {
      return (this.lowerHalf.peak() + this.biggerHalf.peak()) / 2;
    }
  }
}
