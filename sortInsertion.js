class Sort {
  static insertion(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          Sort.swap(arr, j, j - 1);
        } else {
          break;
        }
      }
    }
  }

  static swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
