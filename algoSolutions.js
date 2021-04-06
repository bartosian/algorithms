class Solution {
  mergeKLists(lists) {
    let len = lists.length,
        interval = 1;

    while (interval < len) {
      for (let i = 0; i < (len - interval); i = interval * 2) {
        lists[i] = merge(lists[i], lists[i + inreval]);
      }

      interval *= 2;
    }

    return len > 0 && lists[0] || false;
  }

  trap(heights) {
    if (!heights.length) return 0;

    let size = heights.length,
        leftMax = new Array(size),
        rightMax = new Array(size),
        ans = 0;

    leftMax[0] = heaights[0];

    for (let i = 1; i < size; i++) {
      leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
    }

    rightMax[size - 1] = heights[size - 1];

    for (let i = size - 2; i >= 0; i--) {
      rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
    }

    for (let j = 0; j < size; j++) {
      ans += Math.min(leftMax[j], rightMax[j]) - heights[j];
    }

    return ans;
  }

  trap2(heights) {
    if (!heights.length) return 0;

    let left = 0,
        right = heights.length - 1,
        maxArea = 0;

    while (left < right) {
      maxArea = Math.max(maxArea, Math.min(heights[left], heights[right]) * right - left);

      heights[left] < heights[right] && left++ || right--;
    }

    return maxArea;
  }
}

class BinaryHeap {
  constructor(comparator = (a, b) => {
    return (a[0] < b[0]) ? -1 : (a[0] === b[0] ? 0 : 1);
  }) {
    this.heap = [];
    this.comparator = comparator;
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
    if (data === undefined || data === null) {
      return false;
    }
    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);
    return true;
  }
  bubbleUp(index) {
    while (index > 0) {
      let curr = this.heap[index];
      let parentIndex = this.getParentIndex(index);
      let parent = this.heap[parentIndex];

      let compare = this.comparator(parent, curr);
      if (compare < 0 || compare === 0) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  extract() {
    if (this.size() === 0) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return value;
  }
  sinkDown(currIndex) {
    let left = this.getLeftIndex(currIndex);
    let right = this.getRightIndex(currIndex);
    let parentIndex = currIndex;

    if (left < this.size() && this.comparator(this.heap[left], this.heap[parentIndex]) < 0) {
      parentIndex = left;
    }

    if (right < this.size() && this.comparator(this.heap[right], this.heap[parentIndex]) < 0) {
      parentIndex = right;
    }

    if (parentIndex !== currIndex) {
      this.swap(parentIndex, currIndex);
      this.sinkDown(parentIndex);
    }
  }
  peak() {
    return this.size() > 0 ? this.heap[0] : undefined;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    return this.heap.length;
  }
}

function trapWater(heightMap) {
  if (!heightMap.length || !heightMap[0].length) return 0;

  let rows = heightMap.length,
      cols = heightMap[0].length,
      dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]],
      water = 0,
      heap = new BinaryHeap(),
      visited = Array.from({length: rows}, row => (new Array(cols)).fill(false));

  for (let row = 0; row < rows; row++) {
    heap.insert([heightMap[row][0], row, 0]);
    heap.insert([heightMap[row][cols - 1], row, cols - 1]);
    visited[row][0] = true;
    visited[row][cols - 1] = true;
  }

  for (let col = 1; col < cols - 1; col++) {
    heap.insert([heightMap[0][col], 0, col]);
    heap.insert([heightMap[rows - 1][col], rows - 1, col]);
    visited[0][col] = true;
    visited[rows - 1][col] = true;
  }

  while (heap.size()) {
    let [height, row, col] = heap.extract();

    for (let [dr, dc] of dirs) {
        let newRow = row + dr,
            newCol = col + dc;

        if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && !visited[newRow][newCol]) {
          visited[newRow][newCol] = true;

          water += Math.max(0, height - heightMap[newRow][newCol]);
          heap.insert([Math.max(height, heightMap[newRow][newCol]), newRow, newCol]);
        }
    }
  }

  return water;
}

function mergeIntervals(intervals) {
  if (!intervals || !intervals.length) return null;

  let size = intervals.length,
      results = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let int of intervals) {
    if (!results.length || int[0] > results[results.length - 1][1]) {
      results.push(int);
    } else {
      results[results.length - 1][1] = Math.max(int[1], results[results.length - 1][1]);
    }
  }

  return results;
}

var canAttendMeetings = function(intervals) {
    if (!intervals.length) return true;

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) return false;
    }

    return true;
}

function dfs(node, results, level) {
  let levelresult;

  if (level >= results.length) {
    levelresult = [];
    levelresult.push(node.val);
    results.push(levelresult);
  } else {
    levelresult = results[level];

    if (!(level % 2)) {
      levelresult.push(node.val);
    } else {
      levelresult.unshift(node.val);
    }
  }

  if (node.left) dfs(node.left, results, level + 1);
  if (node.right) dfs(node.right, results, level + 1);
}

var zigzagLevelOrder = function(root) {
    let results = [];

    if (root) {
      dfs(root, results, 0);
    }

    return results;
}
