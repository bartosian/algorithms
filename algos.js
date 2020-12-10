function binarySearch(array, n, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let pivot = Math.floor((leftIndex + rightIndex) / 2);

  if (array[pivot] == n) {
    return pivot;
  } else if (array[pivot] > n) {
    return binarySearch(array, n, leftIndex, pivot - 1)
  } else {
    return binarySearch(array, n, pivot + 1, rightIndex)
  }

  return -1;
}

function reverseString(str) {
  let arr = str.split(""),
      length = str.length,
      middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    let another = length - i - 1;
    let temp = arr[i];
    arr[i] = arr[another];
    arr[another] = temp;
  }

  return arr.join("");
}
