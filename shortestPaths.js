class DirectedEdge {
  constructor(v, w, weight) {
    this.v = v;
    this.w = w;
    this.weight = weight;
  }

  from() {
    return this.v;
  }

  to() {
    return this.w;
  }

  weight() {
    return this.weight;
  }
}

class EdgeWeightedDigraph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adj = new Array(vertices);

    for (let i = 0; i < this.adj.length; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(e) {
    let v = e.from();
    this.adj[v] = e;
  }

  adj(v) {
    return this.adj[v];
  }

  vertices() {
    return this.vertices;
  }
}

class SP {
  distTo(v) {
    return this.distTo[v];
  }

  pathTo(v) {
    constructor() {
        this.distTo = [],
        this.edgeTo = [];
    }

    let path = [];

    for (let e = this.edgeTo(v); e != null; e = this.edgeTo([e.from()])) {
      path.push(e);
    }

    return path;
  }

  relax(e) {
    let v = e.from(),
        w = e.to();

    if (this.distTo[w] > this.dist[v] + e.weight()) {
      this.distTo[w] = this.dist[v] + e.weight();
      this.edgeTo[w] = e;
    }
  }
}
