class QuickSort {
  constructor(arr) {
    this.arr = arr;
    this.shuffle();

    // this.sort(0, this.arr.length - 1);
    this.threeWayQuickSort(0, this.arr.length - 1);
  }

  shuffle() {
    let len = this.arr.length;

    for (let i = 0; i < len; i++) {
      let newIndex = Math.floor(Math.random() * (i + 1));

      this.swap(i, newIndex);
    }
  }

  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  select(k) {
    let left = 0,
        right = this.arr.length - 1;

    while (right > left) {
      let partition = this.partition(left, right);

      if (partition > k) {
        right = partition - 1;
      } else if (partition < k) {
        left = partition + 1;
      } else {
        return this.arr[partition];
      }
    }

    return this.arr[partition];
  }

  partition(leftPointer, rightPointer) {
      let pivotId = rightPointer,
          pivot = this.arr[rightPointer];

      rightPointer -= 1;

      while(true) {
          while(this.arr[leftPointer] <= pivot) {
              leftPointer += 1;
          }

          while(this.arr[rightPointer] > pivot) {
              rightPointer -= 1;
          }

          if(leftPointer >= rightPointer) {
              break;
          } else {
              this.swap(leftPointer, rightPointer);
          }
      }

      this.swap(leftPointer, pivotId);

      return leftPointer;
  }

  sort(left, right) {
    if ((right - left) <= 0) return;

    let pivot = this.partition(left, right);


    this.sort(left, pivot - 1);
    this.sort(pivot + 1, right);
  }

  threeWayQuickSort(left, right) {
    if (right <= left) return;

    let lt = left,
        gt = right,
        v = this.arr[left],
        i = left;

    while (i <= right) {
      if (this.arr[i] < v) {
        this.swap(i++, lt++);
      } else if (this.arr[i] > v) {
        this.swap(i++, gt--);
      } else {
        i++;
      }
    }

    this.threeWayQuickSort(left, lt - 1);
    this.threeWayQuickSort(gt + 1, right);
  }
}

let arr = [9,1,2,4,3,2,1,4,1,9,9];

let quickSort = new QuickSort(arr);
console.log(arr);
