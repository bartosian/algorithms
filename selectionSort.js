function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let theLowestValue = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[theLowestValue]) {
        theLowestValue = j
      }
    }

    if (theLowestValue != i) {
      temp = array[i]
      array[i] = array[theLowestValue]
      array[theLowestValue] = temp
    }
  }

  return array;
}
