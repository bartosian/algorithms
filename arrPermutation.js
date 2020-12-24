function isPermutation(arr1, arr2, n) {
  let sortedArr1 = arr1.sort((a,b) => a - b),
      sortedArr2 = arr2.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) return false;
  }

  return true;
}
