class Heap {
  constructor(arr) {
    this.arr = arr;
    this.size = arr.length;

    let mid = Math.floor(this.size / 2);

    for (let i = mid; i >= 0; i--) {
      this.max_heapify(i);
    }
  }

  sort() {
    let result = [];

    while (this.size > 0) {
      this.swap(0, this.size - 1);
      result.push(this.arr[this.size - 1]);
      this.size--;
      this.max_heapify(0);
    }

    return result;
  }

  max_heapify(i) {
    let left = i * 2,
        right = i * 2 + 1,
        largest = i;

    if (left < this.size && this.arr[left] > this.arr[i]) {
      largest = left;
    }

    if (right < this.size && this.arr[right] > this.arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.max_heapify(largest);
    }

  }

  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
}

let heap = new Heap([1, 3, 4, 5, 6, 9, 2]);
console.log(heap.sort());
