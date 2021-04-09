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

var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1] - a[1]);

  let units = 0,
      boxLength = boxTypes.length;

  for (let box of boxTypes) {
    let boxCount = Math.min(truckSize, box[0]);

    units += boxCount * box[1];
    truckSize -= boxCount;

    if (!truckSize) break;
  }

  return units;
}

let height = 5,
    width= 4,
    horizontalCuts = [1,2,4],
    verticalCuts = [1,3];

class MaxArea {
  constructor() {
    this.MODULO = 1000000007;
  }

  getMax(height, width, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);

    horizontalCuts = [0, ...horizontalCuts, height];
    verticalCuts = [0, ...verticalCuts, width];

    let maxHor = 0,
        maxVert = 0;

    for (let i = 1; i < horizontalCuts.length; i++) {
      maxHor = Math.max(maxHor, horizontalCuts[i] - horizontalCuts[i - 1]);
    }

    for (let i = 1; i < verticalCuts.length; i++) {
      maxVert = Math.max(maxVert, verticalCuts[i] - verticalCuts[i - 1]);
    }

    return (maxHor * maxVert) % this.MODULO;
  }
}

class SolutionSchedule {
  minDifficulty(jobs, days) {
    if (jobs.length < days) return -1;

    let cache = Array.from({length: days}, day => (new Array(jobs.length)).fill(-1));

    return this.dfs(days, jobs, 0, cache);
  }

  dfs(days, jobs, position, cache) {
    if (days === 1) {
        let max = Number.MIN_SAFE_INTEGER;

        while(position < jobs.length) {
          max = Math.max(max, jobs[position++]);
        }

        return max;
    }

    if (cache[days][position] > -1) return cache[days[position]];

    let max = Number.MIN_SAFE_INTEGER,
        result = Number.MAX_SAFE_INTEGER;

    for (let i = position; i < jobs.length - days + 1; i++) {
      max = Math.max(max, jobs[i]);
      result = Math.min(result, max + this.dfs(days - 1, jobs, i + 1, cache));
    }

    return cache[days][position] = result;
  }
}

function minDifficulty(jobs, days) {
  let size = jobs.length,
      max;

  if (size < days) return -1;

  let dp = new Array(size + 1).fill(Infinity);
  dp[size] = 0;

  for (let day = 1; day <= days; day++) {
    for (let i = 0; i <= size - day; i++) {
      max = 0,
      dp[i] = Infinity;

      for (let j = i; j <= size - day; j++) {
        max = Math.max(max, jobs[j]);
        dp[i] = Math.min(dp[i], max + dp[j + 1]);
      }
    }
  }

  return dp[0];
}

function mostVisitedPattern(username, timestamp, website) {
  let visitEntities = timestamp.map((_, idx) => [username[idx], timestamp[idx], website[idx]])
                               .sort((a, b) => a[1] - b[1]);

  let userVisits = {};

  visitEntities.forEach(([username, _, website], i) => {
    userVisits[username] = (userVisits[username] || []).push(website);
  });

  let userSeq = {},
      max = ["", 0];

  Object.values(userVisits).forEach((visits, i) => {
    let seqByUser = {};

    for (let i = 0; i < visits.length - 2; i++) {
      for (let j = i + 1; j < visits.length - 1; j++) {
        for (let k = j + 1; k < visits.length; k++) {
          let seqKey = `${visits[i]}|${visits[j]}|${visits[k]}`;

          if (!seqByUser[seqKey]) seqByUser[seqKey] = 1;
        }
      }
    }

    Object.keys(seqByUser).forEach(seq, i) => {
      if (!userSeq[seq]) userSeq[seq] = 0;

      userSeq[seq] += 1;

      if (userSeq[seq] > max[1] || userSeq[seq] < max[0] && userSeq[seq] === max[1]) {
        max[0] = seq;
        max[1] = userSeq[seq];
      }
    });

  });

  return max[0].split("|");

}

function isRobotBounded(instructions) {
  let dirs = [[0, 1], [1, 0],[0, -1],[-1, 0]],
      idx = 0,
      x = 0,
      y = 0;


  for (let char of instructions) {
    if (char === "L") {
      idx = (dx + 3) % 4;
    } else if (char === "R") {
      idx = (dx + 1) % 4;
    } else {
      x += dirs[idx][0];
      y += dirs[idx][1];
    }
  }

  return idx != 0 || (!x && !y);
}


function numPairsDivisibleBy60(times) {
    let rem = new Array(60).fill(0),
        count = 0;

    for (let i = 0; i < times.length; i++) {
      let remVal = times[i] % 60;

      count += rem[(60 - remVal) % 60];
      rem[remVal] += 1;
    }

    return count;
}

function orangesRotting(grid) {
  if (!grid.length || !grid[0].length) return -1;

  let rows = grid.length,
      cols = grid[0].length,
      queue = [],
      minutes = 0,
      freshCount = 0,
      dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[rows][cols] === 1 && freshCount++;
      grid[rows][cols] === 2 && queue.push([rows, cols]);
    }
  }

  while (queue.length && freshCount) {
    let next = [];

    while (queue.length) {
      let currentRotten = queue.pop();

      for (let dir of dirs) {
        let newDr = currentRotten[0] + dir[0],
            newDc = currentRotten[1] + dir[1];

        if (newDc >= 0 && newDr >= 0 && newDc < cols && newDr < rows) {
          if (grid[newDr][newDc] === 1) {
            grid[newDr][newDc] = 2;
            freshCount--;

            next.push([newDr, newDc]);
          }
        }
      }
    }

    minutes++;
    queue = next;

  }

  return !!freshCount ? minutes : -1;
}
