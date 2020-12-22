class Random {
  static shuffle(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      let random = Math.floor(Math.random() * (i + 1));

      Random.swap(arr, i, random);
    }
  }

  static swap(arr, i, j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
