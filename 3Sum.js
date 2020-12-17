function 3sum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sortedArr = arr.sort((a, b) => a - b),
      result = 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let subSumm = sortedArr[i] + sortedArr[j];
        if (binarySearch(sortedArr, -subSumm)) result++;
      }
  }

  return result;
}
