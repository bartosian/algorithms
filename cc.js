class ConnectedComponets {
  constructor(graph) {
    this.graph = graph;
    this.marked = new Array(graph.vertices().length).fill(false);
    this._count = 1;
    this.id = new Array(graph.vertices().length);

    let vertices = graph.vertices();

    for (let vertex of vertices) {
      if (!this.marked[vertex]) {
        this.dfs(this.graph, vertex);
        thic.count++;
      }
    }
  }

  get count() {
    return this._count;
  }

  getId(v) {
    return this.id[v];
  }

  dfs(graph, s) {
    this.marked[s] = true;
    this.id[s] = this.count;

    let adj = this.graph.adj(s);

    for (let i = 0; i < adj.length; i++) {
      if (!this.marked[adj[i]]) {
        this.marked[adj[i]] = true;
        this.dfs(graph, adj[i]);
      }
    }
  }
}
