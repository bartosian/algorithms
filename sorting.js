function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }

  return array;
}

function selectionSort(array) {
  var len = array.length,
      min;

  for (var i = 0; i < len; i++) {
    min = i;

    for (var j = i + 1; j < len; j++) {
      if (array[i] > array[j]) {
        min = j;
      }
    }

    if (min != i) swap(array, i, min);
  }

  return items;
}

function insertionSort(items) {
  var len = items.length,
      value,
      i,
      j;

  for (i = 0; i < len; i++) {
    value = items[i];

    for (j = i - 1; j >= 0 && items[j] > value; j--) {
      items[j + 1] = items[j]
    }

    items[j + 1] = value;
  }

  return items;
}

class SortableArray {
  constructor(array) {
    this.array = array
  }

  partition(leftIndex, rightIndex) {
    let pivotIndex = rightIndex,
        pivot = this.array[pivotIndex];

    rightIndex -= 1;

    while(true) {
      while(this.array[leftIndex] < pivot) {
        leftIndex += 1;
      }

      while(this.array[rightIndex] > pivot) {
        rightIndex -= 1;
      }

      if (leftIndex >= rightIndex) break;

      var temp = this.array[leftIndex];
      this.array[leftIndex] = this.array[rightIndex];
      this.array[rightIndex] = temp;

      leftIndex += 1;
    }

    var temp = this.array[leftIndex];
    this.array[leftIndex] = pivot;
    this.array[pivotIndex] = temp;

    return leftIndex;
  }

  quickSort(leftIndex, rightIndex) {
    if ((rightIndex - leftIndex) <= 0) return;

    let pivot = this.partition(leftIndex, rightIndex);

    this.quickSort(leftIndex, pivot - 1);
    this.quickSort(pivot + 1, rightIndex);
  }
}

function partition(leftIndex, rightIndex) {
  let pivotIndex = rightIndex,
      pivot = this.array[pivotIndex];

  rightIndex -= 1;

  while(true) {
    while(this.array[leftIndex] < pivot) {
      leftIndex += 1;
    }

    while(this.array[rightIndex] > pivot) {
      rightIndex -= 1;
    }

    if (leftIndex >= rightIndex) break;

    var temp = this.array[leftIndex];
    this.array[leftIndex] = this.array[rightIndex];
    this.array[rightIndex] = temp;

    leftIndex += 1;
  }

  var temp = this.array[leftIndex];
  this.array[leftIndex] = pivot;
  this.array[pivotIndex] = temp;

  return leftIndex;
}

function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);

  if(p == (k - 1)) {
    retun A[p];
  } else if(p > (k - 1)) {
    return quickSelectInPlace(A, l, p - 1, k)
  } else {
    return quickSelectInPlace(A, p + 1, h, k)
  }
}

function medianQuickselect(array) {
  return quickSelectInPlace(array, 0, array.length - 1, Math.floor(array.length/2))
}


function merge(leftA, rightA) {
  var results = [],
      leftIndex = 0,
      rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }

  var leftRemains = leftA.slice(leftIndex),
      rightRemains = rightA.slice(rightIndex);

  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
  if(array.length < 2) return array;

  var midpoint = Math.floor(array.length / 2),
      leftArray = array.slice(0, midpoint),
      rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function countSort(array) {
  var hash = {}, resultArr = [];

  for (var i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]]++;
    }
  }

  for (var key in hash) {
    for(var i = 0; i < hash[key]; i++) {
      resultArr.push(parseInt(key));
    }
  }

  return resultArr;
}
