class Sort {
  static selection(arr) {
    const len = arr.length;

    if (len < 2) return;

    for (let i = 0; i < len - 1; i++) {
      let min = i;

      for (let j = i + 1; j < len; j++) {
        let curEl = arr[j];

        if (curEl < arr[min]) {
          min = j;
        }
      }
      
      if (min !== i) {
        this.swap(arr, i, min);
      }
    }
  }

  static swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

}
