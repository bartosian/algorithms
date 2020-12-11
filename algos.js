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

function findPwermutations(a, b) {
  let aLen = a.length,
      bLen = b.length,
      arrA = a.split(""),
      arrB = b.split(""),
      bSorted = arrB.sort().join(""),
      results = [];

  if (aLen < bLen) return results;

  for (let i = 0; (i < aLen) && ((aLen - i) >= bLen); i++) {
    if (!b.includes(arrA[i])) continue;

    let sortedA = arrA.slice(i, i + bLen).sort().join("");

    if (sortedA == bSorted) {
      results.push(i);
    }
  }

  return results;
}

function findAllPermutations(str) {
  if (str.length == 1) return [str];

  let firstEl = str[0];
      permutations = findAllPermutations(str.substring(1)),
      permLength = permutations.length,
      results = [];

  for (let i = 0; i < permLength; i++) {
    let word = permutations[i],
        arr = word.split(""),
        wordlen = word.length;

    for (let j = 0; j <= wordlen; j++) {
      let newStr = arr.slice();
      newStr.splice(j,0,firstEl);
      results.push(newStr.join(""));
    }
  }

  return results;

}

function elementsInCommon(arr1, arr2) {
  let hash = {},
      result = 0;

  for (let i of arr1) {
    hash[i] = true;
  }

  for (let j of arr2) {
    if (hash[j]) {
      result++;
    }
  }

  return result;
}

function urlify(str, length) {
  let result = "";

  for (let i = 0; i < length; i++) {
    let char = str[i];

    if (char == " ") {
      result += "%20";
    } else {
      result += char;
    }
  }

  return result;
}

function palindromePermutation(str) {
  let   cleanStr = str.toLowerCase().replace(/[\W_]/g, ''),
        hash = {},
        oddCount = 0;

  for (let i of cleanStr) {
    if (hash[i]) {
      hash[i] += 1;
    } else {
      hash[i] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] % 2 != 0) oddCount += 1;

    if (oddCount > 1) return false;
  }

  return true;

}
