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

  dfsRecursive(node) {
    let result = [],
        visited = new Set().
        self = this;

    (function traverse(node) {
      if (!node) return;

      visited.add(node);
      result.push(node);

      let adjList = self.adjList[node];

      for (let vertex of adjList) {
        !visited.has(vertex) && traverse(vertex);
      }
    })(node);

    return result;
  }

  dfsIterative(node) {
    let result = [],
        stack = [],
        visited = new Set();

    stack.push(node);

    while(stack.length) {
      let vertex = stack.pop();
      visited.add(vertex);
      result.push(vertex);

      let adjList = this.adjList[vertex];

      for(let v of agjList) {
        if (!visited.has(v)) {
          stack.push(v);
        }
      }
    }

    return result;
  }

  bfs(node) {
    let result = [],
        queue = [],
        visited = new Set();

    stack.push(node);

    while(stack.length) {
      let vertex = stack.shift();
      visited.add(vertex);
      result.push(vertex);

      let adjList = this.adjList[vertex];

      for(let v of agjList) {
        if (!visited.has(v)) {
          stack.push(v);
        }
      }
    }

    return result;
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(key) {
    this.adjList[key] = this.adjList[key] || [];
  }

  addEdge(v1, v2, weight) {
    this.adjList[v1].push({node: v2, weight});
    this.adjList[v2].push({node: v1, weight});
  }
}

class Dijkstra {
  constructor(graph) {
      this.graph = graph;
      this.verteces = Object.keys(graph);
  }

  shortestPath(start, end) {
    if (!this.grah[start] || !this.graph[end]) return false;

    let distances = {},
        parents = {},
        pq = new PQ((a, b) => a - b);

    for (let vertex of this.verteces) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue({node: vertex, priority: 0});
      } else {
        distances[vertex] = Infinity;
        pq.enqueue({node: vertex, priority: Infinity});
      }

      parents[vertex] = null;
    }

    while (pq.size()) {
      let minVertex = pq.dequeue();

      if (minVertex.node === end) return;

      let adj = this.grap[minVertex.node];

      for (let vertex of adj) {
        let dist = distances[minVertex.node] + vertex.weight;

        if (dist < distances[vertex.node]) {
          distances[vertex.node] = dist;
          parents[vertex.node] = minVertex.node;

          pq.enqueu(vertex);
        }
      }
    }

  }
}
