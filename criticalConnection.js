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