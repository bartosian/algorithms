class Peek {
  static oneDimension(arr, low, high, len) {
    let mid = Math.floor((high - low) / 2 + low),
        midEl = arr[mid];

    if ((mid === 0 || arr[mid - 1] <= arr[mid]) && (mid === n - 1 || arr[mid + 1] <= arr[mid])) {
      return mid;
    }

    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return Peek.oneDimension(arr, low, mid - 1, n);
    } else {
      return Peek.oneDimension(arr, mid + 1, mid - 1, high, n);
    }
  }
}
