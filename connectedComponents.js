class CC {
  constructor(graph) {
    this.marked = [];
    this.id = [];
    this.count = 0;
    this.graph = graph;

    let verteces = this.graph.verteces();

    for (let i = 0; i < verteces.length; i++) {
      if (!this.marked[verteces[i]]) {
        this.dfs(verteces[i]);
        this.count++;
      }
    }
  }

  dfs(vertex) {
    this.marked[vertex] = true;
    this.id[vertex] = this.count;

    let adj = this.graph.adj(vertex);

    for (let node of adj) {
      if (!this.marked[node]) {
        this.dfs(node);
      }
    }
  }
}
