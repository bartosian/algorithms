function ThreeWayPartitioning(arr) {
  let low = 0,
      mid = 0,
      high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, mid, low);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }

  return(arr);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function countSort(arr) {
  let count1 = count2 = count3 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count1++;
    } else if (arr[i] === 1) {
      count2++;
    } else {
      count3++;
    }
  }

  let i = 0;

  while (count1 > 0) {
    arr[i] = 0;
    i++;
    count1--;
  }

  while (count2 > 0) {
    arr[i] = 1;
    i++;
    count2--;
  }

  while (count3 > 0) {
    arr[i] = 2;
    i++;
    count3--;
  }

  return arr;
}

console.log(countSort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
