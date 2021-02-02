class Graph {
  constructor(V) {
    this.V = V;
    this.adj = new Array(V);

    for (let i = 0; i < this.adj.length; i++) {
      this.adj[i] = new Array();
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  adj(v) {
    return this.adj[v];
  }

  degree(vertex) {
    let degree = 0,
        adjList = this.adj[vertex];

    for (let i of adjList) {
      degree++;
    }

    return degree;
  }

  maxDegree() {
    let max = 0;

    for (let vertex of this.verteces) {
      let degree = this.degree(vertex);

      if (degree > max) {
        max = degree;
      }
    }

    return max;
  }

  averageDegree() {
    return this.edges * 2 / this.verteces;
  }
}
