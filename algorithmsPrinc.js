// euclids algorithm
function greatestCommonDivisor(p, q) {
  if (q === 0) return p;

  let rem = p % q;

  return greatestCommonDivisor(q, r);
}

function binarySearch(key, array, lo, hi) {
  if (lo > hi) return -1;

  let mid = Math.floor(lo + (hi -lo) / 2);

  if (key < array[mid]) {
    return binarySearch(key, array, lo, mid - 1);
  } else if (key > array[mid]) {
    return binarySearch(key, array, mid + 1, hi);
  } else {
    return array[mid];
  }
}

class Selection {
  sort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      let min = i;

      for (let j = i + 1; j < len; j++) {
        if (this.less(arr, j, min)) {
          min = j;
        }
      }

      if (min !== i) {
        this.swap(arr, min, i);
      }
    }

    return arr;
  }

  less(arr, idA, idB) {
    return arr[idA] < arr[idB];
  }

  swap(arr, idA, idB) {
    [arr[idA], arr[idB]] = [arr[idB], arr[idA]];
  }
}

class Insertion {
  sort(arr) {
    let len = arr.length;

    for (let i = 1; i < len; i++) {
      for (let j = i; j > 0 && this.less(arr, j, j - 1); j--) {
        this.swap(arr, j, j - 1);
      }
    }

    return arr;
  }

  less(arr, idA, idB) {
    return arr[idA] < arr[idB];
  }

  swap(arr, idA, idB) {
    [arr[idA], arr[idB]] = [arr[idB], arr[idA]];
  }
}


class Shell {
  sort(arr) {
    let len = arr.length,
        h = 1;

    // interval sequence
    while(h < Math.floor(len / 3)) {
      h = 3 * h + 1;
    }

    while (h >= 1) {
      for (let i = h; h < len; i++) {
        for (let j = i; j >= h && this.less(arr, j, j - h); j -= h) {
          this.swap(arr, j, j - h);
        }
      }

      h = Math.floor(h / 3);
    }

    return arr;
  }

  less(arr, idA, idB) {
    return arr[idA] < arr[idB];
  }

  swap(arr, idA, idB) {
    [arr[idA], arr[idB]] = [arr[idB], arr[idA]];
  }
}

function validAnagram(strA, strB){
    let lenA = strA.length,
        lenB = strB.length;

    if (lenA !== lenB) return false;

    let counter = {};

    for (let char of strA) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (let char of strB) {
        if (!counter[char] || counter[char] === 0) {
          console.log(false);
          return false;
        }
        counter[char] -= 1;
    }
    console.log(true);
    return true;
}

function countUniqueValues2(arr) {
  let left = 0,
      right = 1,
      count = 0;

  while (left < arr.length) {
    count++;

    while(right < arr.length && arr[right] === arr[left]) {
      right++;
    }

    left = right;
  }

  return count;
}

function countUniqueValues(arr) {
  let i = !arr.length ? -1 : 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return ++i;
}

function sameFrequency(numA, numB){
    let strA = "" + numA,
        strB = "" + numB;

    if (strA.length !== strB.length) return false;

    let counter = {};

    for (let char of strA) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (let char of strB) {
        if (!counter[char]) return false;

        counter[char] -= 1;
    }

    return true;
}

function areThereDuplicates(...args) {
    if (!args.length) return false;

    let counter = new Set(args);

    return counter.size !== args.length;
}

console.log(areThereDuplicates('a', 'b', 'd', 'e', 'e'));
