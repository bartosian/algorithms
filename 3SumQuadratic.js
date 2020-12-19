class ThreeSum {
  constructor(arr) {
    this.list = arr;
  }

  main() {
    let sortedArr = this.list.sort(),
        arrLen = sortedArr.length,
        result = 0;

    for (let i = 0; i < arrLen - 2; i++) {
      let j = i + 1,
          k = arrLen - 1;

      while (j < k) {
        let sum = sortedArr[i] + sortedArr[j] + sortedArr[k];

        if (sum === 0) result++;

        if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }

    return result;
  }
}
