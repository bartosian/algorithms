var twoSum = function(nums, target) {
    let len = nums.length,
        checked = [];

    for (let i = 0; i < len; i++) {
        let requiredNum = target - nums[i],
            checkedNumIndex = checked[requiredNum];

        if (checkedNumIndex !== undefined) {
            return [checkedNumIndex, i];
        } else {
            checked[nums[i]] = i;
        }
    }
};

var mergeTwoLists = function(l1, l2) {
    let newHead = new ListNode(-1),
        newTail = newHead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            newTail.next = l1;
            l1 = l1.next;
        } else {
            newTail.next = l2;
            l2 = l2.next;
        }
        newTail = newTail.next;
    }

    newTail.next = l1 ? l1 : l2;

    return newHead.next;
};

var trap = function(height) {
    if (!height.length) return 0;

    let left = leftMax = rightMax = ans = 0,
        right = height.length - 1;

    while (left < right) {
        if (height[left] > leftMax) leftMax = height[left];
        if (height[right] > rightMax) rightMax = height[right];

        if (leftMax < rightMax) {
            ans += leftMax - height[left];
            left++;
        } else {
            ans += rightMax - height[right];
            right--;
        }
    }

    return ans;
};

function DFS(node, level, results) {
    let levelResults;

    if (level >= results.length) {
        levelResults = [];
        levelResults.push(node.val);
        results.push(levelResults);
    } else {
        levelResults = results[level];

        if (level % 2 === 0) {
            levelResults.push(node.val);
        } else {
            levelResults.unshift(node.val);
        }
    }

    if (node.left) DFS(node.left, level + 1, results);
    if (node.right) DFS(node.right, level + 1, results);
}

var zigzagLevelOrder = function(root) {
    let results = new Array();

    if (root) {
        DFS(root, 0, results);
    }

    return results;
};

var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList),
      queue = [];

  queue.push(beginWord);
  let count = 1;

  while (queue.length) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      let currentWord = queue.shift().split("");

      for (let j = 0; j < currentWord.length; j++) {
        let tmpChar = currentWord[j];

        for (let char = 96; char < 123; char++) {
          let newChar = String.fromCharCode(char);
          currentWord[j] = newChar;
          let newWord = currentWord.join("");

          if (wordSet.has(newWord)) {
            if (newWord === endWord) {
              return ++count;
            }

            queue.push(newWord);
            wordSet.delete(newWord);
          }
        }

        currentWord[j] = tmpChar;
      }
    }

    count++;
  }

  return 0;
};

class LinkedNode {
  constructor(key=null, value=null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.head = new LinkedNode();
    this.tail = new LinkedNode();
    this.cache = {};

    head.next = this.tail;
    tails.prev = this.head;
  }

  addNode(node) {
    node.prev = head;
    node.next = head.next;

    head.next.prev = node;
    head.next = node;
  }

  removeNode(node) {
    let prev = node.prev,
        next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  popTail() {
    let res = this.tail.prev;
    this.removeNode(res);
    return res;
  }

  get(key) {
    let node = this.cache[key];

    if (!node) return -1;

    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
      let node = this.cache[key];

      if (!node) {
        let newNode = new LinkedNode(key, value);
        this.cache[key] = newNode;
        this.addNode(newNode);

        ++size;

        if (this.size > this.capacity) {
          let tail = this.popTail();
          delete this.cache[tail.key];
          --size;
        }
      } else {
        node.value = value;
        this.moveToHead(node);
      }
  }
}

class NumberOfIslandsDFS {
  constructor(grid) {
    this.grid = grid;
    this.count = 0;

    if (!this.grid || !this.grid.length) return 0;

    this.rows = grid.length;
    this.columns = grid[0].length;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        if (this.grid[r][c] == "1") {
          this.count++;
          this.DFS(r, c);
        }
      }
    }
  }

  getCount() {
    return this.count;
  }

  DFS(row, column) {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns || this.grid[row][column] === "0") return;

    this.grid[row][column] = "0";

    this.DFS(row - 1, column);
    this.DFS(row + 1, column);
    this.DFS(row, column - 1);
    this.DFS(row, column + 1);
  }

}

class NumberOfIslandsBFS {
  constructor(grid) {
    this.grid = grid;
    this.count = 0;

    if (!this.grid || !this.grid.length) return 0;

    this.rows = grid.length;
    this.columns = grid[0].length;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        if (this.grid[r][c] == "1") {
          this.count++;
          this.grid[r][c] == "0";

          let queue = [];
          queue.push(r * this.columns + c);

          while(queue.length) {
            let id = queue.shift(),
                r = Math.floor(id / this.columns),
                c = id % this.columns;

            if (r - 1 >= 0 && this.grid[r - 1][c] === "1") {
              queue.push((r - 1) * this.columns + c);
              this.grid[r - 1][c] = "0";
            }

            if (r + 1 < this.rows && this.grid[r + 1][c] === "1") {
              queue.push((r + 1) * this.columns + c);
              this.grid[r + 1][c] = "0";
            }

            if (c - 1 >= 0 && this.grid[r][c - 1] === "1") {
              queue.push(r * this.columns + c - 1);
              this.grid[r][c - 1] = "0";
            }

            if (c + 1 >= 0 && this.grid[r][c + 1] === "1") {
              queue.push(r * this.columns + c + 1);
              this.grid[r][c + 1] = "0";
            }
          }
        }
      }
    }
  }

  getCount() {
    return this.count;
  }
}

var maximalSquare = function(matrix) {
    let rows = matrix.length,
        columns = matrix[0] ? matrix[0].length : 0,
        maxSide = 0,
        prev = 0,
        aux = new Array(columns + 1).fill(0);

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            let temp = aux[j];
            if (matrix[i - 1][j - 1] === "1") {
                aux[j] = Math.min(Math.min(aux[j - 1], prev), aux[j]) + 1;
                maxSide = Math.max(maxSide, aux[j]);
        } else {
          aux[j] = 0;
        }

        prev = temp;
    }
  }

    return maxSide * maxSide;
};

var minMeetingRooms = function(intervals) {
    if (!intervals || !intervals.length) return 0;


    let intervalsCount = intervals.length,
        startTimes = new Array(intervalsCount),
        endTimes = new Array(intervalsCount),
        roomsCount = 0,
        endIndex = 0;

    for (let i = 0; i < intervalsCount; i++) {
        startTimes[i] = intervals[i][0];
        endTimes[i] = intervals[i][1]
    }

    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);

    for (let i = 0; i < startTimes.length; i++) {
        if (startTimes[i] < endTimes[endIndex]) {
            roomsCount++;
        } else {
            endIndex++;
        }
    }

    return roomsCount;
};

const ONE = {
   1: "One",
   2: "Two",
   3: "Three",
   4: "Four",
   5: "Five",
   6: "Six",
   7: "Seven",
   8: "Eight",
   9: "Nine"
}

const TWO = {
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen"
}

const TEN = {
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety"
}

const DIGITS = {
    ONE: ONE,
    TWO: TWO,
    TEN: TEN
}

class Solution1 {
    constructor(num) {
        this.num = num;
        this.stringNum = this.numberToWords(num);
    }

    getStrNum() {
        return this.stringNum;
    }

    numberToWords(num) {
        if (!num) return "Zero";

        let billions = Math.floor(num / 1000000000),
            millions = Math.floor((num - billions * 1000000000) / 1000000),
            thousands = Math.floor((num - billions * 1000000000 - millions * 1000000) / 1000),
            rest = num - billions * 1000000000 - millions * 1000000 - thousands * 1000;

        let result = "";

        if (billions) {
            result = this.three(billions) + " Billion";
        }

        if (millions) {
            if (result !== "") result += " ";

            result += this.three(millions) + " Million";
        }
        if (thousands) {
            if (result !== "") result += " ";

            result += this.three(thousands) + " Thousand";
        }
        if (rest) {
            if (result !== "") result += " ";

            result += this.three(rest);
        }

        return result;
    }

    getNumber(num, digits=DIGITS.ONE) {
       let number = digits[num];

       return number ? number : "";
    }

    three(num) {
        let hundred = Math.floor(num / 100),
            rest = num - hundred * 100;

        let result = "";

        if (hundred && rest) {
            result = this.getNumber(hundred) + " Hundred " + this.two(rest);
        } else if (rest) {
            result = this.two(rest);
        } else if (hundred) {
            result = this.getNumber(hundred) + " Hundred";
        }

        return result;
    }

    two(num) {
        if (!num) {
            return "";
        } else if (num < 10) {
            return this.getNumber(num);
        } else if (num < 20) {
            return this.getNumber(num, DIGITS.TWO);
        } else {
            let tens = Math.floor(num / 10),
                rest = num - tens * 10;

            if (rest) {
                return this.getNumber(tens, DIGITS.TEN) + " " + this.getNumber(rest);
            } else {
                return this.getNumber(tens, DIGITS.TEN);
            }
        }
    }

}

var numberToWords = function(num) {
    let solution = new Solution(num).getStrNum();

    return solution;
};

// Word break recursive solution
function wordBreakOne(word) {
  let wordLen = word.length;

  if (wordLen) return true;

  for (let i = 1; i <= wordLen; i++) {
    if (dictionary.has(word.substr(0, i)) && wordBreak(word.substr(i, wordLen))) {
      return true;
    }
  }

  return false;
}

let dictionary = new Set(["mobile","samsung","sam","sung",
                            "man","mango","icecream","and",
                            "go","i","like","ice","cream"]);

// Dynamic solution with O(n*s), where s - length of largest string in dict, n - length of the given string
function dictionaryContains(word) {
  return dictionary.has(word);
}

function wordBreakTwo(word) {
  let wordLen = word.length;

  if (!wordLen) return true;

  let dp = new Array[wordLen + 1].fill(0),
      matchedIdx = [-1];

  for (let i = 0; i < wordLen; i++) {
    let flag = 0,
        matchedSize = matchedIdx.length;

    for (let j = matchedSize - 1; j >= 0; j--) {
      let sb = word.substr(matchedIdx[j] + 1, i - matchedIdx[j]);

      if (dictionaryContains(sb)) {
        flag = 1;
        break;
      }
    }

    if (flag) {
      dp[i] = 1;
      matchedIdx.push(i);
    }
  }

  return !!dp[wordLen - 1];
}

function wordBreak(str, wordDict) {
  let dp = {},
      wordSet = new Set(wordDict);

  return wordBreakUtil(str, dp, wordSet);
}

function combine(prev, word) {
  for (let i = 0; i < prev.length; i++) {
    prev[i] += " " + word;
  }

  return prev;
}

function wordBreakUtil(s, dict, memo={}) {
  if (memo[s]) return memo[s];

  let result = [],
      strlen = s.length;

  if (dict.has(s)) {
    result.push(s);
  }

  for (let i = 1; i < strlen; i++) {
    let word = s.substring(i);

    if (dict.has(word)) {
      let remStr = s.substring(0, i);
      let prev = combine(wordBreakUtil(remStr, dict, memo), word);

      for (let i of prev) {
        result.push(i);
      }
    }
  }

  memo[s] = result;
  return result;
}

let topKFrequent = function(words, k) {
  let map = {};

  words.forEach(word => {
    map[word] ? map[word]++ : map[word] = 1;
  });

  let sortedMap = Object.entries(map).sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return a[0].localeCompare(b[0]);
  }).slice(0, k).map(a => a[0]);

  return sortedMap;
}


class RandomizedSet {
    constructor() {
        this.map = {};
        this.arr = [];
    }

    insert(value) {
        if (this.map[value] || this.map[value] === 0) return false;

        this.map[value] = this.arr.length;
        this.arr.push(value);

        return true;
    }

    remove(value) {
        if (!this.map[value] && this.map[value] !== 0) return false;

        let lastElement = this.arr.pop(),
            idxOfLast = this.map[value];

        if (this.arr.length) {
            this.arr[idxOfLast] = lastElement;
            this.map[lastElement] = idxOfLast;
        }

        this.map[lastElement] = idxOfLast;
        delete this.map[value];

        return true;
    }

    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

class BinaryHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  size() {
    return this.heap.length;
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(data) {
    if (data === undefined || data === null) return false;

    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);

    return true;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = this.getParentIndex(index),
          parentEl = this.heap[parentIndex],
          compareRes = this.comparator(parentEl, this.heap[index]);

      if (compareRes <= 0) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  peak() {
    return (this.size() > 0) ? this.heap[0] : undefined;
  }

  extract() {
    if (!this.size()) return undefined;

    if (this.size() === 1) {
      return this.heap.shift();
    }

    let el = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.sinkDown(0);
    return el;
  }

  sinkDown(index) {
    let left = this.getLeftIndex(index),
        right = this.getRightIndex(index),
        parent = index;

    if (left < this.size() && this.comparator(this.heap[left], this.heap[parent]) < 0) {
      parent = left;
    }

    if (right < this.size() && this.comparator(this.heap[right], this.heap[parent]) < 0) {
      parent = right;
    }

    if (parent !== index) {
      this.swap(parent, index);
      this.sinkDown(parent);
    }
  }
}

class Key {
  constructor(freq, char) {
    this.freq = freq;
    this.char = char;
  }
}

class Solution2 {
  constructor(str) {
    this.str = str;
    this.len = str.length;

    this.result = this.rearrangeString(str);
  }

  getResult() {
    return this.result;
  }

  rearrangeString(str) {
    let strlen = str.length,
        count = new Array(26).fill(0);

    for (let i = 0; i < strlen; i++) {
      count[str.charCodeAt(i) - 97]++;
    }

    let pq = new BinaryHeap((a, b) => {
      return a.freq > b.freq ? -1 : (a.freq === b.freq ? 0 : 1);
    });

    for (let char = 97; char < 123; char++) {
      let index = char - 97;

      if (count[index]) {
        pq.insert(new Key(count[index], String.fromCharCode(char)));
      }
    }

    let result = "",
        prev = new Key(-1, "#");

    while (pq.size() !== 0) {
      let top = pq.peak();

      pq.extract();
      result += top.char;

      if (prev.freq > 0) {
        pq.insert(prev);
      }

      top.freq--;
      prev = top;
    }

    if (strlen != result.length) {
      return "";
    } else {
      return result;
    }
  }
}

var maximumUnits = function(boxTypes, truckSize) {
    let sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1]),
        units= 0;

    for (let box of sortedBoxes) {
      console.log(box);
        let boxCount = Math.min(box[0], truckSize);
        units += box[0] * boxCount;
        truckSize -= boxCount;

        if (!truckSize) break;
    }

    return units;
};

class Quick {
  constructor(arr) {
    this.arr = arr;
  }

  partition(arr, lo, hi) {
    let i = lo,
        j = hi + 1;

    while (true) {
      while (this.less(arr[++i], arr[lo])) {
        if (i >= hi) {
          break;
        }
      }

      while (this.less(arr[lo], arr[--j])) {
        if (j <= lo) {
          break;
        }
      }

      if (i >= j) break;
      this.swap(arr, i, j);
    }

    this.swap(arr, lo, j);
    return j;
  }

  sort(arr, lo, hi) {
    if (lo >= hi) return;

    let pivot = this.partition(arr, lo, hi);
    this.merge(arr, lo, pivot - 1);
    this.merge(arr, pivot + 1, hi);
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function less(elA, elB) {
  console.log(elA, elB);
  if (elA[1] < elB[1]) {
    return true;
  } else if (elA[1] > elB[1]) {
    return false;
  } else {
    return (elA[0].localeCompare(elB[0]) < 0) ? true : false;
  }
}

function partition(arr, lo, hi) {
  let i = lo,
      j = hi + 1;

  while (true) {
    while (less(arr[++i], arr[lo])) {
      console.log("IT IS LESS");
      if (i === hi) {
        break;
      }
    }

    while (less(arr[lo], arr[--j])) {
      console.log("IT IS HIGHER");
      if (j === lo) {
        break;
      }
    }

    if (i >= j) break;
    swap(arr, i, j);
  }

  swap(arr, lo, j);
  return j;
}

function topKFrequent2(words, k) {
  let map = {};

  words.forEach(word => {
    map[word] ? map[word]++ : map[word] = 1;
  });

  let mapArr = Object.entries(map),
      result = [];

  let lo = 0,
      hi = mapArr.length - 1;

  while(hi > lo) {
    let pivot = partition(mapArr, lo, hi);

    if (pivot > k - 1) {
      hi = pivot - 1;
    } else if (pivot < k - 1) {
      lo = pivot + 1;
    } else {
      result.push(mapArr[pivot]);
      console.log(result);
    }
  }

  return result.reverse();
}

function topKFrequent3(words, k) {
  let map = {};

  words.forEach(word => {
    map[word] ? map[word]++ : map[word] = 1;
  });

  let mapArr = Object.entries(map);
  let heap = new BinaryHeap((a, b) => {
    return a[1] > b[1] ? -1 : (a[1] === b[1] ? 0 : 1);
  });

  for (let i = 0; i < mapArr.length; i++) {
    heap.insert(mapArr[i]);
  }

  let result = [];

  while (k) {
    result.push(heap.extract()[0]);
    k--;
  }

  return result;
}

function maxSquare(grid) {
  let rows = grid.length,
      columns = grid[0].length,
      auxGrid = new Array(columns + 1).fill(0),
      maxSide = 0,
      prev = 0;

  console.log(auxGrid);

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      let temp = auxGrid[j];
      if (grid[i - 1][j - 1]) {
        auxGrid[j] = Math.min(Math.min(auxGrid[j - 1], prev), auxGrid[j]) + 1;
        maxSide = Math.max(maxSide, auxGrid[j]);
      }
      prev = temp;
    }
  }

  return maxSide * maxSide;

}

// class LongestPalSubstr {
//   constructor(str) {
//     this.str = str;
//     this.result = this.getLongestSubstr(str);
//   }
//
//   getLongestSubstr(str) {
//     let len = str.length,
//         palTable = new Array(len).fill(0),
//         maxLen = 1;
//
//     palTable = palTable.map(a => new Array(len).fill(false));
//
//     for (let i = 0; i < len; i++) {
//       palTable[i][i] = true;
//     }
//
//     let start = 0;
//
//     for (let i = 0; i < len - 1; i++) {
//       if (str[i] === str[i + 1]) {
//         palTable[i][i + 1] = true;
//         start = i;
//         maxLen = 2;
//       }
//     }
//
//     for (let k = 3; k <= len; k++) {
//       for (let i = 0; i < len - k + 1; i++) {
//         let j = i + k - 1;
//
//         if (palTable[i + 1][j - 1] && str[i] === str[j]) {
//           palTable[i][j] = true;
//
//           if (k > maxLen) {
//             start = i;
//             maxLen = k;
//           }
//         }
//       }
//     }
//     return maxLen;
//   }
// }

class LongestPalSubstr {
  constructor(str) {
    this.str = str;
    this.result = this.getLongestSubstr(str);
  }

  getLongestSubstr(str) {
    if (!str || !str.length) return "";

    let len = str.length,
        start = 0,
        end = 0;

    for (let i = 0; i < len; i++) {
      let len1 = this.exapndAroundCenter(str, i, i),
          len2 = this.exapndAroundCenter(str, i, i + 1),
          lenMax = Math.max(len1, len2);

      if (lenMax > (end - start)) {
        start = i - Math.floor((lenMax - 1) / 2),
        end = i + Math.floor(lenMax / 2);
      }
    }

    return str.substring(start, end + 1);
  }

  exapndAroundCenter(str, left, right) {
    let L = left,
        R = right;

    while (L >= 0 && R < str.length && str[L] === str[R]) {
      L--;
      R++;
    }

    return R - L - 1;
  }
}

class SolutionA {
  minDifficulty(jobs, days) {
    if (days > jobs.length) {
      return -1;
    }

    let cache = Array.from({length: days + 1}, day => Array.from({length: jobs.length}, job => -1));

    return this.dfs(days, jobs, cache, 0);
  }

  dfs(days, jobs, cache, pos) {
    if (days === 1) {
      let max = 0;

      while (pos < jobs.length) {
        max = Math.max(max, jobs[pos++]);
      }

      return max;
    }

    if (cache[days][pos] !== -1) {
      return cache[days][pos];
    }

    let result = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;

    for (let i = pos; i < jobs.length - days + 1; i++) {
      max = Math.max(max, jobs[i]),
      result = Math.min(result, max + this.dfs(days - 1, jobs, cache, pos + 1));
    }

    return cache[days][pos] = result;
  }
}

const STATES = {
  NOTPROCESSED: "0",
  PROCESSED: "-1",
  PROCESING: "1"
};

class Solution {
  constructor(courses, prereq) {
    this.is_possible = true;
    this.adjList = {};
    this.states = Array.from({length: courses}, state => STATES.NOTPROCESSED);
    this.order = [];

    this.buildGraph(prereq, courses);
  }

  buildGraph(prereq, courses) {
    for (let req of prereq) {
      let start = req[1],
          end = req[0],
          adj = this.adjList[start] || [];

      adj.push(end);
      this.adjList[start] = adj;
    }
  }

  getOrder(courses) {
    for (let course = 0; course < courses; course++) {
      if (this.states[course] === STATES.NOTPROCESSED) {
        this.dfs(course);
      }
    }

    if (this.is_possible) {
      return this.order.reverse();
    } else {
      return [];
    }
  }

  dfs(course) {
    if (!this.is_possible) {
      return;
    }

    this.states[course] = STATES.PROCESING;

    let adj = this.adjList[course];

    if (adj) {
      for (let req of adj) {
        if (this.states[req] === STATES.NOTPROCESSED) {
          this.dfs(req);
        } else if (this.states[req] === STATES.PROCESING) {
          this.is_possible = false;
        }
      }
    }

    this.states[course] = STATES.PROCESSED;
    this.order.push(course);
  }
}

var mostCommonWord = function(paragraph, banned) {
    let wordsMap = {},
        bannedSet = new Set(banned),
        wordsArr = paragraph.replace(/[^0-9a-zA-Z]/g, ' ').toLowerCase().split(/\s*[\s,]\s*/);
        console.log(wordsArr);
    for (let i = 0; i < wordsArr.length; i++) {
        let currentWord = wordsArr[i];

        if (!bannedSet.has(currentWord)) {
            wordsMap[currentWord] = wordsMap[currentWord] ? ++wordsMap[currentWord] : 1;
        }
    }

    let sortedArr = Object.entries(wordsMap).sort((a, b) => b[1] - a[1]);
    return sortedArr[0][0];
};

console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));
