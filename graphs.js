class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(key) {
    this.adjList[key] = this.adjList[key] || [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(el => el !== v2);
    this.adjList[v2] = this.adjList[v2].filter(el => el !== v1);
  }

  removeVertex(v) {
    for (let edge of this.adjList[v]) {
      this.removeEdge(edge, v);
    }

    delete this.adjList[v];
  }
}
