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
