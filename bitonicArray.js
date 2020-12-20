function findMaximum(arr, low, high) {
  if (low === high) return arr[low];

  if (high === low + 1 && arr[high] < arr[low]) {
    return arr[low];
  }

  if (high === low + 1 && arr[high] > arr[low]) {
    return arr[high];
  }

  let mid = Math.floor(low + (high - low) / 2);

  if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return arr[mid];

  if (arr[mid] > arr[mid + 1]) {
    return findMaximum(arr, low, mid - 1);
  } else {
    return findMaximum(arr, mid + 1, high);
  }

}
