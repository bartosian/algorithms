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

function maxSubarraySum(arr, num){
    let temp = 0,
        max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }

    max = temp;

    for (let i = num; i < arr.length; i++) {
        let sum = temp - arr[i - 1] + arr[i];
        max = math.max(sum, max);
    }

    return max;
}

function minSubArrayLen(num, sum) {
  let start = 0,
      end = 0,
      total = 0,
      min = Number.MAX_SAFE_INTEGER;

  while (start < num.length) {
    if (total < sum && end < num.length) {
      total += num[end];
      end++;
    } else if (total >= sum) {
      min = Math.min(min, end - start);
      total -= num[start];
      start++;
    } else {
      break;
    }
  }

  return min ===  Number.MAX_SAFE_INTEGER ? 0 : min;
}

function findLongestSubstring(str){
    if (str === "" || str === " ") return 0;

    let start = 0,
        end = 0,
        map = new Set(),
        max = Number.MIN_SAFE_INTEGER;

    while (end < str.length) {
        if (!map.has(str[end])) {
            map.add(str[end++]);
            max = Math.max(max, end - start);
        } else if (map.has(str[end])) {
            map.delete(str[start++]);
        }
    }

    return max;
}

function isPalindrome(str){
    if (str.length === 2) return str[0] === str[1];
    if (str.length <= 1) return true;

    return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 1));
}

function someRecursive(arr, cb){
    if (arr.length === 1) return cb(arr[0]);
    return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

function flatten(arr) {
    let result = [];

    if(!arr.length) return result;

    if(Array.isArray(arr[0])) {
        result = [...flatten(arr[0])];
    } else {
        result.push(arr[0]);
    }

    return [...result, ...flatten(arr.slice(1))];
}

function capitalizeFirst (arr) {
    if (!arr.length) return [];
    return [arr[0][0].toUpperCase() + arr[0].slice(1), ...capitalizeFirst(arr.slice(1))];
}

function nestedEvenSum (obj) {
    let sum = 0;

    function isEven(val) {
        return val % 2 === 0;
    }

    function traverseObj(obj) {
        for (const key in obj) {
            if (obj[key] instanceof Object) {
                traverseObj(obj[key]);
            } else if (Number.isInteger(obj[key]) && isEven(obj[key])) {
                sum += obj[key];
            }
        }
    }

    traverseObj(obj);

    return sum;
}

function stringifyNumbers(obj) {
    function traverseObj(obj) {
        for (const key in obj) {
            if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
                traverseObj(obj[key]);
            } else if (typeof obj[key] === 'number') {
                obj[key] = obj[key].toString();
            }
        }
    }

    traverseObj(obj);

    return obj;
}

function collectStrings(obj) {
    let result = [];

    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = [...result, ...collectStrings(obj[key])];
        }
    }

    return result;
}

function binarySearch(arr, el){
    let left = 0,
        right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2),
            midVal = arr[mid];

        if (midVal === el) return mid;
        if (midVal > el) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

function swap(arr, idA, idB) {
  [arr[idA], arr[idB]] = [arr[idB], arr[idA]];
}

function bubbleSort(arr) {
  let right = arr.length - 1;

  for (let i = right; i >= 0; i--) {
    let swaps = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swaps = true;
      }
    }

    if (!swaps) break;
  }

  return arr;
}

function merge(arr, aux, left, mid, right) {
  let  i = left,
       j = mid + 1;

  for (let k = left; k <= right; k++) {
    aux[k] = arr[k];
  }

  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = aux[j++]
    } else if (j > right) {
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      arr[k] = aux[j++];
    } else {
      arr[k] = aux[i++];
    }
  }
}

function mergeSort(arr, aux=[], left, right) {
  if (right <= left) return;


  let mid = Math.floor(left + (right - left) / 2);
  mergeSort(arr, aux,  left, mid);
  mergeSort(arr, aux,  mid + 1, right);
  merge(arr, aux, left, mid, right);
}

class Quick {
  sort(arr) {
    this.sortHelper(arr, 0, arr.length - 1);
  }

  sortHelper(arr, left, right) {
    if (right <= left) return;
    let pivot = this.partition(arr, left, right);
    this.sortHelper(arr, left, pivot - 1);
    this.sortHelper(arr, pivot + 1, right);
  }

  partition(arr, left, right) {
    let i = left,
        j = right + 1;

    while (true) {
      while (arr[++i] <= arr[left]) {
        if (i >= right) break;
      }

      while (arr[left] < arr[--j]) {
        if (j <= left) break;
      }

      if (i >= j) break;
      swap(arr, i, j);
    }

    swap(arr, j, left);
    return j;
  }
}

class Radix {
  getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  mostDigits(nums) {
    let maxDigits = 0;

    for (let num of nums) {
      maxDigits = Math.max(maxDigits, this.digitCount(num));
    }

    return maxDigits;
  }

  createBuckets() {
    return Array.from({length: 10}, el => []);
  }

  sort(nums) {
    let buckets = this.createBuckets(),
        cycles = this.mostDigits(nums);

    for (let i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }

    for (let i = 0; i < cycles; i++) {
      for (let j = 0; j < nums.length; j++) {
        buckets[this.getDigit(nums[j], i)].push(nums[j]);
      }

      nums = [].concat(...buckets);
      buckets = this.createBuckets();
    }

    return nums;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let  current = this.head,
          newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.size--;

    if (!this.size) {
        this.head = this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let node = this.head;
    this.head = this.head.next;
    this.size--;

    if (!this.size) {
      this.tail = this.head = null;
    }

    return node;
  }

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
    return node;
  }

  get(idx) {
    if (idx < 0 || idx >= this.size) return undefined;

    let counter = 0,
        currNode = this.head;

    while (counter != idx) {
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  set(idx, value) {
    let node = this.get(idx);

    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.size) return false;

    let result = true;

    if (idx === 0) {
      result = !!this.unshift(value);
    } else if (idx === this.size) {
      result = !!this.push(value);
    } else {
      let prevNode = this.get(idx - 1);
      let newNode = new Node(value);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }

    this.size++;
    return result;
  }

  remove(idx) {
    if (idx < 0 || idx > (this.size - 1)) return false;
    if (idx === 0) {
      return !!this.shift()
    } else if (idx === this.size - 1) {
      return !!this.pop();
    } else {
      let prevNode = this.get(idx - 1);

      prevNode.next = prevNode.next.next;
      this.size--;
      return true;
    }
  }
}
