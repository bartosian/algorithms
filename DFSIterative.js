class Graph {
  constructor(v) {
    this.verteces = v;
    this.adj = new Array(v);
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  DFS() {
    let visited = new Array(this.verteces).fill(false);

    for (let i = 0; i < this.verteces.length; i++) {
      if (!visited[i]) {
        this.dfsUtil(i, visited);
      }
    }
  }

  dfsUtil(v, visited) {
    let stack = [];

    stack.push(v);

    while (stack.length) {
      let vertex = stack.pop();

      if (!visited[vertex]) {
        console.log(vertex);
        visited[vertex] = true;
      }

      let adj = this.adj[vertex];

      for (let i = 0; i < adj.length; i++) {
        if (!visited[i]) {
          stack.push(i);
        }
      }
    }
  }
}
