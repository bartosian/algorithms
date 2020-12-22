class Shell {
  static sort(arr) {
    let len = arr.length,
          h = 1;

    while (h < Math.floor(len / 3)) h = h * 3 + 1;

    while (h >= 1) {
      for (let i = h; i < len; i++) {
        for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
          Shell.swap(arr, j, j - h);
        }
      }

      h = Math.floor(h / 3);
    }
  }

  static swap(arr, i, j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
