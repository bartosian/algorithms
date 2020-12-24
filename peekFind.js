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

  static twoDimension(arr, rows, columns, mid) {
    let initMax = 0;
    let [max, max_index] = Peek.findMaximum(arr, rows, mid, initMax);

    if (mid === 0 || mid === columns - 1) {
      return max;
    }

    if (max >= arr[max_index][mid - 1] && max >= arr[max_index][mid + 1]) {
      return max;
    }

    if (max < arr[max_index][mid - 1]) {
      return Peek.twoDimension(arr, rows, columns, mid - Math.ceil(mid / 2));
    }

    return Peek.twoDimension(arr, rows, columns, mid + Math.ceil(mid / 2));
  }

  static findMaximum(arr, rows, mid, max) {
    let max_index = 0;
    for (let i = 0; i < rows; i++) {
      if (arr[i][mid] > max) {
        max_index = i;
        max = arr[i][mid];
      }
    }

    return [max, max_index];
  }

  static findPeek(arr, columns, rows) {
    return Peek.twoDimension(arr, rows, columns, Math.floor(columns / 2));
  }
}
