function merge(arr, aux, low, mid, high) {
  for (let k = low; k < high; k++) {
    aux[k] = arr[k];
  }

  let i = low,
      j = mid + 1;

  for (let k = low; k < high; k++) {
    if (i > mid) {
      arr[k] = aux[j++];
    } else if (j > high) {
      arr[k] = aux[i++];
    } else if (aux[i] < aux[j]) {
      arr[k] = aux[i++];
    } else {
      arr[k] = aux[j++];
    }
  }
}

let arr = [1,3,5,7,9,11,14,20,31,50];
merge(arr, [], 0, 5, 9);

console.log(arr);
