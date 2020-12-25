class Merge {
  constructor(arr) {
    this.arr = arr;
    this.n = Math.floor(arr.length / 2);
    this.aux = new Array(this.n);

    for (let i = 0; i < this.n; i++) {
      this.aux[i] = this.arr[i];
    }
  }

  mergeWithSmallAux() {
    let i = 0,
        j = this.n,
        k = 0;

    while (k < this.arr.length) {
      if (i >= this.n) {
        this.arr[k++] = this.arr[j++];
      } else if (j >= this.arr.length) {
        this.arr[k++] = this.aux[i++];
      } else if (this.aux[i] < this.arr[j]) {
        this.arr[k++] = this.aux[i++];
      } else {
        this.arr[k++] = this.arr[j++];
      }
    }
  }
}

const arr = [40, 61, 70, 71, 99, 20, 51, 55, 75, 100];
let merge = new Merge(arr);
merge.mergeWithSmallAux();
console.log(arr);
