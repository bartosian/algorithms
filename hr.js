function checkIfAllUnique(str) {
  if (str.length > 256) return false;

  let chars = new Array(256).fill(false);

  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (!chars[char]) {
      chars[char] = true;
    } else {
      return false;
    }
  }

  return true;
}

function checkIfAllUniqueWithoutSpace(str) {
  let sortedStr = str.split("").sort().join("");

  for (let i = 1; i < str.length; i++) {
    if (sortedStr[i] === sortedStr[i - 1]) {
      return false;
    }
  }

  return true;
}

function isPermutation(str1, str2) {
  let len1 = str1.lengthj,
      len2 = str2.length;

  if (len1 !== len2) return false;

  return len1.sort() !== len2.sort();
}

function isPermutationSec(str1, str2) {
  let len1 = str1.lengthj,
      len2 = str2.length;

  if (len1 !== len2) return false;

  let charSet = new Array(256).fill(0);

  for (let i = 0; i < len1; i++) {
    charSet[str1.charCodeAt(i)]++;
  }

  for (let j = 0; i < len1; j++) {
    charSet[str2.charCodeAt(j)]--;

    if (charSet[str2.charCodeAt(j)] < 0) {
      return false;
    }
  }

  return true;

}

function urlify(str, len) {
  return str.trim().split(" ").join("%20");
}

function palindromePermutation(str) {
  let oddCount = 0,
      len = str.length,
      chars = {};

  for (let i = 0; i < len; i++) {
    !chars[str[i]] ? chars[str[i]] = 1 : chars[str[i]]++;
  }

  for (let key in chars) {
    if (chars[key] % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  if (len % 2 === 0) {
    return oddCount === 0;
  }

  return  true;
}

function editAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  if (str1.length === str2.length) {
    return oneReplace(str1, str2);
  } else if (str1.length > str2.length) {
    return oneEdit(str1, str2);
  } else {
    return oneEdit(str2, str1);
  }
}

function oneReplace(str1, str2) {
  let i = 0,
      replaceCounts = 0;

  while (i < str1.length) {
      if (str1[i] !== str2[i]) {
        replaceCounts++;
        if (replaceCounts > 1) return false;
      }
      i++;
  }

  return true;
}

function oneEdit(str1, str2) {
  let i = 0,
      j = 0,
      editCounts = 0;

  while(i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      i++;
      editCounts++;

      if (editCounts > 1) return false;
    } else {
      i++;
      j++;
    }
  }

  return true;
}

function stringCompression(str) {
  let compressedStr = "",
      i = 0;

  while (i < str.length) {
    let char = str[i],
        count = 0;

    while (str[i] === char) {
      count++;
      i++;
    }

    compressedStr += char + count;
  }

  return compressedStr.length > str.length ? str : compressedStr;
}

// for way edge swap
class Matrix {
  constructor(matrix, n) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.columns = matrix[0].length;
  }

  rotate() {
    if (this.rows !== this.columns || this.rows === 0) return false;

    let layers = Math.floor(this.rows / 2);

    for (let i = 0; i < layers; i++) {
      let first = i,
          last = this.rows - 1 - i;

      for (let j = first; j < last; j++) {
        let offset = j - first;

        let top = this.matrix[first][j];
        this.matrix[first][j] = this.matrix[first][last - offset];
        this.matrix[first][last - offset] = this.matrix[last][last - offset];
        this.matrix[last][last - offset] = this.matrix[i][last];
        this.matrix[i][last] = top;
      }
    }

    return true;
  }
}
