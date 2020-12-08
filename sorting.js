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
