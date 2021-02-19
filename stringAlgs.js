function reverseStr(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

function suffixes(str) {
  let len = str.length,
      suffixes = [];

  for (let i = 0; i < len; i++) {
    suffixes.push(str.substring(i));
  }

  return suffixes;
}

function lcp(strA, strB) {
  let len = Math.min(strA.length, strB.length);

  for (let i = 0; i < len; i++) {
    if (strA.charAt(i) !== strB.charAt(i)) {
      return i;
    }
  }

  return len;
}

function keyIndexedCount(arr, radix) {
  let len = arr.length,
      count = new Array(radix + 1).fill(0),
      aux = [];

  for (let i = 0; i < len; i++) {
    count[arr[i] + 1] += 1;
  }

  console.log(count);

  for (let r = 0; r < radix; r++) {
    count[r + 1] += count[r];
  }

  console.log(count);

  for (let j = 0; j < len; j++) {
    aux[count[arr[j]]++] = arr[j];
  }

  console.log(aux);

  for (let i = 0; i < len; i++) {
    arr[i] = aux[i];
  }

  console.log(arr);
}
