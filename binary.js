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

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 6));
