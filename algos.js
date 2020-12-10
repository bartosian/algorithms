function binarySearch(array, n, leftIndex, rightIndex) {
  let pivot = Math.floor(array.length / 2);

  if (array[pivot] == n) {
    return pivot;
  } else if (array[pivot] > n) {
    return binarySearch(array, n, leftIndex, pivot - 1)
  } else {
    return binarySearch(array, n, pivot + 1, rightIndex)
  }

  return -1;
}
