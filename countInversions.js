class Inversions {
  constructor() {}

  _insertionSort(arr, low, high) {
      let invCount = 0;
      for(let i = low + 1; i <= high; i++) {
          let position = i,
              tmp = arr[i]

          while(position > low && arr[position - 1] > tmp) {
              arr[position] = arr[position - 1]
              position -= 1
              invCount++;
          }

          arr[position] = tmp
      }

      return invCount;
  }

  _merge(arr, aux, low, mid, high) {
    let i = low,
        j = mid + 1,
        k = low,
        inv_count = 0;

    while (i <= mid && j <= high) {
      if(arr[i] <= arr[j]) {
        aux[k++] = arr[i++];
      } else if (arr[j] <= arr[i]) {
        aux[k++] = arr[j++];
        inv_count += (mid - i + 1);
      }
    }

    while (i <= mid) {
      aux[k++] = arr[i++];
    }

    while (j <= high) {
      aux[k++] = arr[j++];
    }

    for (let i = 0; i < high + 1; i++) {
      arr[i] = aux[i];
    }

    return inv_count;
  }

  _sort(arr, aux, low, high) {
    let invCount = 0;

    if ((high - low) < 7) {
      invCount += this._insertionSort(arr, low, high);
      return invCount;
    }

    let mid = Math.floor((high - low) / 2 + low);
    invCount += this._sort(arr, aux, low, mid);
    invCount += this._sort(arr, aux, mid + 1, high);

    if (arr[mid] <= arr[mid + 1]) return;

    invCount += this._merge(arr, aux, low, mid, high);

    return invCount;
  }

  count(arr) {
    return this._sort(arr, [], 0, arr.length - 1);
  }
}

const arr = [1, 20, 6, 4, 5];
const inversions = new Inversions();
console.log(inversions.count(arr));
