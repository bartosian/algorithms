function binarySearch(arr, key, low, high) {
  if (high - low < 0) return -1;

  let mid = Math.floor((high - low) / 2 + low);

  if (arr[mid] === key) return mid;

  if (arr[mid] < key) {
    return binarySearch(arr, key, mid + 1, high);
  } else {
    return binarySearch(arr, key, low, mid - 1);
  }
}

function printUnion(arr1, arr2) {
  let len1 = arr1.length,
      len2 = arr2.length;

  if (len2 < len1) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;

    let tempLen = len1;
    len1 = len2;
    len2 = tempLen;
  }

  arr1 = arr1.sort((a,b) => a - b);

  for (let j = 0; j < len1; j++) {
    console.log(arr1[j]);
  }

  for (let i = 0; i < len2; i++) {
    if(binarySearch(arr1, arr2[i], 0, len1 - 1) === -1) {
      console.log(arr2[i]);
    }
  }
}

function printIntersection(arr1, arr2) {
  let len1 = arr1.length,
      len2 = arr2.length,
      temp = null;

  if (len2 < len1) {
    temp = arr1;
    arr1 = arr2;
    arr2 = temp;

    temp = len1;
    len1 = len2;
    len2 = temp;
  }

  arr1.sort((a, b) => a - b);

  for (let i = 0; i < len2; i++) {
    if (binarySearch(arr1, arr2[i], 0, len1 - 1) !== -1) {
      console.log(arr2[i]);
    }
  }
}

// O((mlogm + n*logm), (nlogn + m*logn));
