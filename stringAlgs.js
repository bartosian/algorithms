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

class LSDRadix {
  constructor(arr) {
    this.radix = 256;
    this.strlen = arr[0].length;
    this.arr = arr;
    this.len = arr.length;
    this.aux = new Array(this.len);

    this.sort(arr);
  }

  sort(arr) {
    for (let l = this.strlen - 1; l >= 0; l--) {
      let count = new Array(this.radix + 1).fill(0);

      for (let j = 0; j < this.len; j++) {
        count[this.arr[j].charCodeAt(l) + 1] += 1;
      }

      for (let k = 0; k < this.radix; k++) {
        count[k + 1] += count[k];
      }

      for (let i = 0; i < this.len; i++) {
        this.aux[count[this.arr[i].charCodeAt(l)]++] = this.arr[i];
      }

      for (let d = 0; d < this.len; d++) {
        this.arr[d] = this.aux[d];
      }
    }

    return this.arr;
  }
}

class MSDRadix {
  constructor(arr) {
    this.radix = 256;
    this.arr = arr;
    this.len = this.arr.length;
    this.aux = new Array(this.len);

    this.sort(this.arr, this.aux, 0, this.len - 1, 0);
  }

  sort(arr, aux, lo, hi, d) {
    if (hi <= lo) return;

    let count = new Array(this.radix + 2);

    for (let i = lo, i <= hi; i++) {
      count[arr[i].charCodeAt(d) + 2] += 1;
    }

    for (let r = 0; r < R + 1; r++) {
      count[r + 1] += count[r];
    }

    for (let i = lo; i <= hi; i++) {
      aux[count[arr[i].charCodeAt(d) + 1]++] = arr[i];
    }

    for (let i = lo; i<= hi; i++) {
      arr[i] = aux[i - lo];
    }

    for (let r = 0; r < this.radix; r++) {
      this.sort(arr, aux, lo + count[r], lo + count[r + 1] - 1, d + 1);
    }
  }
}
