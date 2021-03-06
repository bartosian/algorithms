
// exponetional time
function countWays(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}



class WaysCounter {
  constructor(stairs) {
    this.stairs = stairs;
  }

  countWays() {
    let memo = new Array(this.stairs);

    this.countWaysHelper(this.stairs, memo);
  }

  countWaysHelper(n, memo) {
    if (n < 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = this.countWaysHelper(n - 1, memo) + this.countWaysHelper(n - 2, memo) + this.countWaysHelper(n - 3, memo);

      return memo[n];
    }
  }
}


class Path {
  constructor(maze) {
    this.maze = maze;

    if (!this.maze || !this.maze.length) return null;

    let path = [],
        failedPoints = new Set();

    if (this.getPath(this.maze.length - 1, this.maze[0].length - 1)) {
      return path;
    }

    return null;
  }

  getPath(row, col) {
    if (row < 0 || col < 0 || !this.maze[row][col]) {
      return false;
    }

    let point = new Point(row, col);

    if (this.failedPoints.has(point)) {
      return false;
    }

    let isOrigin = (row === 0) && (col === 0);

    if (isOrigin || this.getPath(row, col - 1) || this.getPath(row - 1, col)) {
      this.path.push(point);

      return true;
    }

    this.failedPoints.add(point);
    return false;
  }
}


class MagicIndex {
  construstor(arr) {
    this.arr = arr;

    if (this.arr || this.arr.length) return -1;

    return this.magicFast(0, this.arr.length - 1);
  }

  magicFast(start, end) {
    if (end < start) {
      return -1;
    }

    let mid = Math.floor((end + start) / 2),
        midValue = this.arr[mid];

    if (this.arr[mid] === mid) {
      return mid;
    } else if (this.arr[mid] < mid) {
      this.magicFast(mid + 1, end);
    } else {
      this.magicFast(start, mid - 1)
    }
  }

  magicFastNonDistinct(start, end) {
    if (end < start) {
      return -1;
    }

    let midIndex = Math.floor((start + end) / 2),
        midValue = this.arr[midIndex];

    if (midIndex === midValue) {
      return midIndex;
    }

    let leftIndex = Math.min(midIndex - 1, midValue),
        left = this.magicFastNonDistinct(start, leftIndex);

    if (left >= 0) {
      return left;
    }

    let rightIndex = Math.max(midIndex + 1, midValue),
        right = this.magicFastNonDistinct(rightIndex, end);

    return right;
  }
}

class Subsets {
  constructor(set) {
    this.set = set;

    let subsets = this.getSubsets(this.set, 0);
    return subsets;
  }

  getSubsets(set, index) {
    if (set.length === index) {
      let allSubsets = [];
      allSubsets.push([]);
    } else {
      let allSubsets = this.getSubsets(set, index + 1),
          item = set[index],
          moreSubsets = [];

      for (let subset of allSubsets) {
        let newSubset = [];
        newSubset.addAll(subset);
        newSubset.add(item);
        moreSubsets.add(newSubset);
      }

      allSubsets.addAll(moreSubsets);
    }
    return allSubsets;
  }
}

function powerSet(str) {
  const results = [],
        setSize = (1 << str.length);

  for (let i = 0; i < setSize; i++) {
    let subset = "";

    for (let j = 0; j < str.length; j++) {
      let bitMap = (1 << j);

      if (i & bitMap) {
        subset += str[j];
      }
    }
    results.push(subset);
  }
  return results;
}

function putCharAt(word, firstChar, j) {
  let firstPart = word.substring(0, j),
      secondPart = word.substring(j);

  return firstPart + firstChar + secondPart;
}

function getPerms(str) {
  if (!str) {
      return null;
  }

  let permutations = [];

  if (str === "") {
    permutations.push("");
    return permutations;
  }

  let firstChar = str[0],
      reminder = str.substring(1),
      words = getPerms(reminder);

  for (let word of words) {
    for (let j = 0; j < word.length; j++) {
      let newString = putCharAt(word, firstChar, j);
      permutations.push(newString);
    }
  }

  return permutations;
}

class PermutationsWithDups {
  constructor(str) {
    this.str = str;

    const result = [],
          map = this.buildFreqtable(str);

    this.printPerms(map, "", str.length, result);

    return result;
  }

  buildFreqtable(str) {
    let map = {};

    for (let char of str) {
      if (!map[char]) {
        map[char] = 1;
      } else {
        map[char] = map[char] + 1;
      }
    }

    return map;
  }

  printPerms(map, prefix, remaining, result) {
    if (remaining) {
      result.add(prefix);
      return;
    }

    for (let key in map) {
      let count = map[key];

      if (count > 0) {
        map[key] = map[key]--;
        this.printPerms(map, prefix + key, remaining - 1, result);
        map[key] = count;
      }
    }
  }
}

function generateParens(n) {
  let strSet = new Set();

  if (!n) {
    return strSet.add("");
  }

  let prevParens = generateParens(n - 1);

  for (let str of prevParens) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        let newstr = insertInside(str, i);
        strSet.has(newStr)? strSet.add(newStr) : false;
      }
    }
    let newStr = "()" + str;

    strSet.has(newStr)? strSet.add(newStr) : false;
  }

  return strSet;
}

function insertInside(str, i) {
  let leftPart = str.substring(0, i + 1),
      rightPart = str.substring(i + 1);

  return leftPart + "()" + rightPart;
}

function addParen(list, leftRem, rightRem, str, index) {
  if (leftRem < 0 || (leftRem > rightRem)) return;

  if (!leftRem && !rightRem) {
    list.push(str.join(""));
  } else {
    str[index] = "(";
    addParen(list, leftRem - 1, rightRem, str, index + 1);

    str[index] = ")";
    addParen(list, leftRem, rightRem - 1, str, index + 1);
  }
}


function generateParens(count) {
  let str = new Array(count * 2),
      listStr = [];

  addParen(listStr, count, count, str, 0);

  return listStr;
}

function paintFill(screen, row, col, ncolor) {
  if (screen[row][col] === ncolor) return false;

  paintFillHelper(screen, row, col, ncolor);
}

function paintillHelper(screen, row, col, ncolor) {
  if (row < 0 || row > screen.length || col < 0 || col > screen[0].length) {
    return false;
  }

  if (screen[row][col] == ocolor) {
    screen[row][col] = ncolor;

    paintFillHelper(screen, row - 1, col, ncolor);
    paintFillHelper(screen, row + 1, col, ncolor);
    paintFillHelper(screen, row, col - 1, ncolor);
    paintFillHelper(screen, row, col + 1, ncolor);
  }

  return true;
}
