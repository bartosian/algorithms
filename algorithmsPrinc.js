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
