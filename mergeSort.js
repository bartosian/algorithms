const { insertionSort } = require('./insertion_sort.js');

class Merge {
  constructor(list) {
    // let arr = list,
    //     len = list.length,
    //     auxArr = new Array(len);
    //
    // this._sort(arr, auxArr, 0, len - 1);
  }

  _merge(arr, aux,low, mid, high) {
    for (let k = low; k <= high; k++) {
      aux[k] = arr[k];
    }

    let i = low,
        j = mid + 1;

    for (let k = low; k <= high; k++) {
      if (i > mid) {
        arr[k] = aux[j++];
      } else if (j > high) {
        arr[k] = aux[i++];
      } else if (aux[i] > aux[j]) {
        arr[k] = aux[j++];
      } else {
        arr[k] = aux[i++];
      }
    }
  }

  _sort(arr, aux, low, high) {
    if (high <= low + 7 - 1) {
      insertionSort(arr);
      return;
    }

    let mid = Math.floor(low + (high - low) / 2);

    this._sort(arr, aux, low, mid);
    this._sort(arr, aux, mid + 1, high);

    if (arr[mid] <= arr[mid + 1]) return;

    this._merge(arr, aux, low, mid, high);
  }

  _sortBU(arr) {
    let len = arr.length,
        aux = new Array(len);

    for (let size = 1; size < len; size += size) {
      for (let low = 0; low < len - size; low += size + size) {
        this._merge(arr, aux, low, low + size - 1, Math.min(low + size + size - 1, len - 1));
      }
    }
  }
}


let arr = [1,4,8,2,7,4,6,9,8];
let merge = new Merge(arr);
merge._sortBU(arr);
console.log(arr);

class MergeSort {
  constructor(arr) {
    this.arr = arr;
    this.size = arr.length;
    this.aux = [];
  }

  merge(low, mid, hi) {
    for (let i = low; i <= hi; i++) {
      this.aux[i] = this.arr[i];
    }

    let i = low,
        j = mid + 1;

    for (let j = low; j <= hi; j++) {
      if (i > mid) this.arr[j] = this.aux[j++];
      if (j > hi) this.arr[j] = this.aux[i++];
      if (this.aux[i] > this.aux[j]) {
        this.arr[j] = this.aux[j++];
      } else {
        this.arr[j] = this.aux[i++];
      }
    }
  }

  sort(low, hi) {
    if (low >= hi) return;

    let mid = Math.floor((hi - low) / 2 + low);

    sort(low, mid);
    sort(mid + 1, hi);
    merge(low, mid, hi);
  }
  // slower than recursive approach
  sortInPlace() {
    for (let size = 1; size < this.size; sz *= 2) {
      for (let lo = 0; lo < this.size - size; lo += size * 2) {
        this.merge(lo, lo + size - 1, Math.min(lo + size + size - 1, this.size - 1));
      }
    }
  }
}
