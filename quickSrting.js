class SortableArray {
  constructor (array) {
    this.array = array
  }

  partition(leftIndex, rightIndex) {
    let pivotIndex = rightIndex,
        pivot = this.array[rightIndex];

    rightIndex -= 1

    while ( true ) {
      while ( this.array[leftIndex] < pivot ) leftIndex += 1;
      while ( this.array[rightIndex] > pivot ) rightIndex -= 1;

      if ( leftIndex >= rightIndex ) {
        break;
      } else {
        let temp = this.array[rightIndex];
        this.array[rightIndex] = this.array[leftIndex],
        this.array[leftIndex] = temp;

        leftIndex += 1;
      }

    }
    let temp = pivot;
    this.array[pivotIndex] = this.array[leftIndex],
    this.array[leftIndex] = temp;

    return leftIndex;
  }

  quickSort(leftPointer, rightPointer) {
    if ( (rightPointer - leftPointer) <= 0 ) {
      return;
    }

    let pivot = this.partition(leftPointer, rightPointer)

    this.quickSort(leftPointer, pivot - 1)
    this.quickSort(pivot + 1, rightPointer)
  }
}

let array = [0,5,2,1,6,3]
let sortArray = new SortableArray(array)
sortArray.quickSort(0, sortArray.array.length - 1)
console.log(sortArray.array)
