const search = require('./binary');

function findMaximum(arr, low, high) {
  if (low === high) return low;

  if (high === low + 1 && arr[high] < arr[low]) {
    return low;
  }

  if (high === low + 1 && arr[high] > arr[low]) {
    return high;
  }

  let mid = Math.floor(low + (high - low) / 2);

  if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return arr[mid];

  if (arr[mid] > arr[mid + 1]) {
    return findMaximum(arr, low, mid - 1);
  } else {
    return findMaximum(arr, mid + 1, high);
  }

}

function searchBitonic(arr, n, key, index) {
  if (key > arr[index]) {
    return -1;
  } else if (key === arr[index]) {
    return index;
  } else {
    let ascBinSearch = search.binary(arr, key);

    if (ascBinSearch !== -1) {
      return ascBinSearch;
    } else {
      return search.descBinary(arr, key);
    }
  }
}

function main() {
  let arr = [-8, 1, 2, 3, 4, 5, -2, -3],
      key = 4,
      n = arr.length,
      l = 0,
      r = n - 1;

  let bitonicPoint = findMaximum(arr, 0, arr.length - 1);
  let index = searchBitonic(arr, n, key, bitonicPoint);

  return index;
}
