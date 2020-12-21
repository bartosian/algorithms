const { insertionSort } = require('./insertion_sort.js');

class Merge {
  constructor(list) {
    let arr = list,
        len = list.length,
        auxArr = new Array(len);

    this._sort(arr, auxArr, 0, len - 1);
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
}
