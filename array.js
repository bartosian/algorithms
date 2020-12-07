function medianOfArray(arr) {
  var length = arr.length;

  if (length % 2 == 1) {
    return arr[Math.floor(length / 2)]
  } else {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2
  }
}
