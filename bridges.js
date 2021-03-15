class CriticalConnections {
  constructor(n, connections) {
    this.serversCount = n;
    this.graph = this.buildGraph(n, connections);
    this.ids = new Array(n).fill(0);
    this.lows = new Array(n).fill(0);
    this.bridges = [];
    this.visited = new Array(n);
    this.id = 0;
  }

  buildGraph(servers, connections) {
    let graph = [];

    for ([from, to] of connections) {
      if (!graph[from]) graph[from] = [];
      if (!graph[to]) graph[to] = [];

      graph[from].push(to);
      graph[to].push(from);
    }

    return graph;
  }

  dfs(at, prev) {
    this.visited[at] = true;
    this.id++;
    this.ids[at] = this.lows[at] = this.id;

    let adjList = this.graph[at];

    for (let node of adjList) {
      if (node === prev) continue;

      if (!this.visited[node]) {
        this.dfs(node, at);

        this.lows[at] = Math.min(this.lows[node], this.lows[at]);

        if (this.ids[at] < this.lows[node]) {
          this.bridges.push([at, node]);
        }
      } else {
        this.lows[at] = Math.min(this.lows[at], this.ids[node]);
      }
    }
  }

  getBridges() {
    for (let i = 0; i < this.serversCount; i++) {
      if (!this.visited(i)) {
        this.dfs(i, -1);
      }
    }

    return this.bridges;
  }
}

class MinDifficulty {
  constructor(days, difficulties) {
    this.days = days;
    this.difficulties = difficulties;

    this.minDifficulty = this.minDifficulty(days, difficulties);
  }

  minDifficulty(days, difficulties) {
    if (days > difficulties.length) {
      return -1;
    }

    let cache = new Array({length: days + 1, day => new Array({length: difficulties.length}, diff => -1)});

    return this.dfs(days, difficulties, cache, 0);
  }

  dfs(days, jobs, cache, pos) {
    if (days === 1) {
      let max = Number.MIN_SAFE_INTEGER;

      while (pos < jobs.length) {
        max = Math.max(max, jobs[pos++]);
      }

      return max;
    }

    if (cache[days][pos]) return cache[days][pos];

    let max = Number.MIN_SAFE_INTEGER,
        result = Number.MAX_SAFE_INTEGER;

    for (let i = pos; i < jobs.length - days + 1; i++) {
      max = Math.max(jobs[i]);
      result = Math.min(result, max + this.dfs(days - 1, jobs, cache, i + 1));
    }

    return cache[days][pos] = result;
  }
}
