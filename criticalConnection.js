class CriticalConnections {
  constructor(n, connections) {
    this.count = n;
    this.connections = connections;
    this.graph = this.buildGraph(connections);
    this.ids = new Array(count).fill(0);
    this.id = 0;
    this.lows = new Array(count).fill(0);
    this.visited = new Array(count).fill(false);
    this.bridges = [];

    this.getBridges(this.count, this.connections);
  }

  buildGraph(connections) {
    let graph = [];

    for ([from, to] of connections) {
      if (!graph[from]) graph[from] = [];
      if (!graph[to]) graph[to] = [];

      graph[from].push(to);
      graph[to].push(from);
    }

    return graph;
  }

  getResult() {
    return this.result;
  }

  dfs(at, prev) {
    this.visited[at] = true;
    this.id++;
    this.lows[at] = this.ids[at] = this.id;

    for (let to of graph[at]) {
      if (to == prev) continue;
      if (!visited[to]) {
        this.dfs(to, at);

        this.lows[at] = Math.min(this.lows[at], this.lows[to]);

        if (this.ids[at] < this.lows[to]) {
          this.bridges.push([at, to]);
        }
      } else {
        this.lows[at] = Math.min(this.lows[at], this.ids[to]);
      }
    }
  }

  getBridges(count, connections) {
    for (let i = 0; i < n; i++) {
      if (!this.visited[i]) {
        this.dfs(i, -1);
      }
    }
  }
}


function isRobotBounded(instructions) {
  // north = 0, east = 1, south = 2, west = 3
  const directions = [[0, 1],[1, 0],[0,-1],[-1,0]];
  let x = 0,
      y = 0,
      idx = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "L") {
      idx = (idx + 3) % 4;
    } else if (instructions[i] === "R") {
      idx = (idx + 1) % 4;
    } else {
      x += directions[idx][0];
      y += directions[idx][1];
    }
  }

  return (x === 0 && y === 0) || idx !== 0;
}

function numPairsDivisibleBy60(time) {
  let remMap = new Array(60).fill(0),
      count = 0;

  for (let i = 0; i < time.length; i++) {
    let rem = time[i] % 60;
    count += remMap[(60 - rem) % 60];

    remMap[rem] += 1;
  }

  return count;
}

class KClosest {
  constructor(points, K) {
    this.points = points;
    this.count = K;

    this.solution = this.getPoints(points, K);
  }

  compare(pointA, pointB) {
    return (Math.pow(pointA[0], 2) + Math.pow(pointA[1], 2)) - (Math.pow(pointB[0], 2) + Math.pow(pointB[1], 2));
  }

  getPoints(points, count) {
    let lo = 0,
        hi = points.length - 1;

    while (lo <= hi) {
      let pivot = this.partition(points, lo, hi);

      if (pivot === count) {
        break;
      } else if (pivot < count) {
        lo = pivot + 1;
      } else {
        hi = pivot - 1;
      }
    }

    return points.slice(0, count);
  }

  partition(points, lo, hi) {
    let pivot = points[lo];

    while (lo < hi) {
      while (this.compare(points[hi], pivot) >= 0) hi--;
      points[lo] = points[hi];
      while (this.compare(points[lo], pivot) <= 0) lo++;
      points[hi] = points[lo];
    }

    points[lo] = pivot;
    return lo;
  }
}
