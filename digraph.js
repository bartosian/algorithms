class Digraph {
  constructor(V) {
    this.verteces = V;
    this.adj = new Array(V);

    for (let i = 0; i < this.verteces; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  adj(v) {
    return this.adj[v];
  }
}
