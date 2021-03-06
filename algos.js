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

function isOneEdit(strA, strB) {

}

function isUniqueString(str) {
  let len = str.length;

  if (len > 94) return false;

  let char_set = new Array(94).fill(false);

  for (let char of str) {
    let code = char.charCodeAt();

    if (char_set[code]) {
      return false;
    } else {
      char_set[code] = true;
    }
  }


  return true;
}

function checkIfPermutation(strA, strB) {
  let lenA = strA.length,
      lenB = strB.length,
      charArr = new Array(94).fill(0);

  if (lenA !== lenB) return false;

  for (let char of strA) {
    let charCode = char.charCodeAt();
    charArr[charCode]++;
  }

  for (let char of strB) {
    let charCode = char.charCodeAt();
    charArr[charCode]--;

    if (charArr[charCode] < 0) return false;
  }

  return true;
}

function oneEditAway(strA, strB) {
  if (strA.length === strB.length) {
    return oneEditReplace(strA, strB);
  } else if ((strA.length + 1) === strB.length) {
    return oneEditInsert(strA, strB);
  } else if ((strA.length - 1) == strB.length) {
    return oneEditInsert(strB, strA);
  }

  return false;
}

function oneEditReplace(strA, strB) {
  let difference = false;

  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      if (difference) {
        return false;
      } else {
        difference = true;
      }
    }
  }

  return true;
}

function oneEditInsert(strA, strB) {
  let indexA = 0,
      indexB = 0;

  while (indexA < strA.length && indexB < strB.length) {
    if (strA[indexA] !== strB[indexB]) {
      if (indexA !== indexB) {
        return false;
      }

      indexB++;
    } else {
      indexA++:
      indexB++;
    }
  }

  return true;
}

function oneEditAway(strA, strB) {
  if (Math.abs(strA.length - strB.length) > 1) return false;

  let indexA = 0,
      indexB = 0,
      difference = false;

  strA = strA.length < strB.length ? strA : strB;
  strB = strA.length < strB.length ? strB : strA;

  while (indexA < strA.length && indexB < strB.length) {
    if (strA[indexA] !== strB[indexB]) {
      difference && return false;

      difference = true;

      if (strA.length === strB.length) {
        indexA++;
      }
    } else {
      indexA++;
    }

    indexB++;
  }

  return true;
}

function stringCompression(str) {
  let strLen = str.length,
      conseqChars = 0,
      compressedStr = "";

  for (let i = 0; i < strLen; i++) {
    conseqChars++;

    if ((str[i + 1] !== str[i]) || (i + 1) >= strLen) {
      compressedStr += `${str[i]}${conseqChars}`;

      if (compressedStr.length >= strLen) return str;
      conseqChars = 0;
    }
  }

  return compressedStr;
}

function rotateMatrix(matrix) {
  let n = matrix.length;

  if (n == 0 || n !== matrix[0].length) return false;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer,
        last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;

      let top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }

  return true;
}

function setZeros(matrix) {
  let firstRowHasZeros = false,
      firstColumnHasZeros = false;

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZeros = true;
      break;
    }
  }

  for (let j = 0; i < matrix.length; j++) {
    if (matrix[j][0] === 0) {
      firstColumnHasZeros = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      nullifyColumn(matrix, i);
    }
  }

  for (let j = 0; j < matrix.length; j++) {
    if (matrix[j][0] == 0) {
      nullifyRow(matrix, j);
    }
  }

  if (firstRowHasZeros) {
    nullifyRow(matrix, 0);
  }

  if (firstColumnHasZeros) {
    nullifyColumn(matrix, 0);
  }
}

function nullifyRow(matrix, row) {
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
}

function nullifyColumn(matrix, column) {
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][column] = 0;
  }
}

function isRotation(s1, s2) {
  let len1 = s1.length,
      len2 = s2.length;

  if (len1 === len2 && len1 > 0) {
    let newSubstr = len1 + len1;

    return newSubstr.includes(s2);
  }

  return false;    
}
