// euclids algorithm
function greatestCommonDivisor(p, q) {
  if (q === 0) return p;

  let rem = p % q;

  return greatestCommonDivisor(q, r);
}

function binarySearch(key, array, lo, hi) {
  if (lo > hi) return -1;

  let mid = Math.floor(lo + (hi -lo) / 2);

  if (key < array[mid]) {
    return binarySearch(key, array, lo, mid - 1);
  } else if (key > array[mid]) {
    return binarySearch(key, array, mid + 1, hi);
  } else {
    return array[mid];
  }
}

class Selection {
  sort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      let min = i;

      for (let j = i + 1; j < len; j++) {
        if (this.less(arr, j, min)) {
          min = j;
        }
      }

      if (min !== i) {
        this.swap(arr, min, i);
      }
    }

    return arr;
  }

  less(arr, idA, idB) {
    return arr[idA] < arr[idB];
  }
}
