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

class DepthFirstPaths {
  constructor(graph, s) {
    this.graph = graph;
    this.s = s;
    this.marked = [];
    this.edgeTo = [];

    this.dfs(this.s);
  }

  // after DFS in O(1)
  hasPathTo(vertex) {
    return this.marked[vertex];
  }

  pathTo(vertex) {
    if (!this.marked[vertex]) {
      return null;
    }

    let path = [];

    for (let i = vertex; i != this.s; i = this.edgeTo(i)) {
      path.push(i);
    }

    path.push(this.s);

    return path;
  }

  dfs(vertex) {
    let adj = this.graph.adj(vertex);
    this.marked[vertex] = true;

    for (let i of adj) {
      if (!this.marked[i]) {
        this.dfs(i);
        this.edgeTo[i] = vertex;
      }
    }
  }
}

class BreadthFirstPaths {
  constructor(graph, root) {
    this.graph = graph;
    this.node = root;
    this.marked = [];
    this.edgeTo = [];
  }

  bfs(node) {
    let queue = new Queue();
    queue.enqueue(node);
    this.marked[node] = true;

    while (queue.size()) {
      let currentVertex = queue.dequeue(),
          adj = this.graph.adj(currentVertex);

      for (let i = 0; i < adj.length; i++) {
        if (!this.marked[adj[i]]) {
          queue.enqueue(adj[i]);
          this.marked[adj[i]] = true;
          this.edgeTo[adj[i]] = currentVertex;
        }
      }
    }
  }
}
