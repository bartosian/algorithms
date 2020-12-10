function binarySearch(array, n, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let pivot = Math.floor((leftIndex + rightIndex) / 2);

  if (array[pivot] == n) {
    return pivot;
  } else if (array[pivot] > n) {
    return binarySearch(array, n, leftIndex, pivot - 1)
  } else {
    return binarySearch(array, n, pivot + 1, rightIndex)
  }

  return -1;
}

function reverseString(str) {
  let arr = str.split(""),
      length = str.length,
      middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    let another = length - i - 1;
    let temp = arr[i];
    arr[i] = arr[another];
    arr[another] = temp;
  }

  return arr.join("");
}

function isPrime(n) {
  if (n < 2) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

function fibo(n) {
  if (n <= 0) return 0;

  if (n == 1) return 1;

  return fibo(n - 1) + fibo(n - 2);
}

function fiboWithMemo(n, memo=[]) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (memo[n] > 0) {
    return memo[n];
  }

  memo[n] = fiboWithMemo(n - 1) + fiboWithMemo(n - 2);

  return memo[n];
}
