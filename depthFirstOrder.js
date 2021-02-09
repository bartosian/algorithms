class DepthFirstOrder {
  constructor(graph) {
    this.graph = graph;
    this.verteces = this.graph.verteces();
    this.marked = new Array(this.verteces);
    this.order = [];


    for (let i = 0; i < this.verteces; i++) {
      if (!this.marked(i)) {
        this.dfs(i);
      }
    }
  }

  dfs(v) {
    this.marked[v] = true;

    let adj = this.graph.adj(v);
    for (let j = 0; j < adj.length; j++) {
      if (!this.marked[j]) {
        this.dfs(j);
      }
    }

    this.order.push(v);
  }

  get order() {
    return this.order;
  }
}
