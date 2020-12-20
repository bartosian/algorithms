function binarySearch(arr, key) {
  let low = 0,
      high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2),
        midVal = arr[mid];

    if (key === midVal) return mid;
    if (key > midVal) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function binarySearchDesc(arr, key) {
  let low = 0,
      high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2),
        midVal = arr[mid];

    if (key === midVal) return mid;
    if (key > midVal) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

module.exports = {
  binary: binarySearch,
  descBinary: binarySearchDesc
}
