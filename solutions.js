class UndirectedGraph {
    constructor(vertices) {
        this.vertices = vertices;
        this.graph = Array.from({length: vertices}, vertex => new Array());
    }

    addEdge(v, w) {
        this.graph[v].push(w);
        this.graph[w].push(v);
    }

    adj(v) {
        return this.graph[v];
    }
}

class DFSPaths {
    constructor(graph, s) {
        this.startVertex = s;
        this.marked = new Array(graph.vertices);
        this.edgeTo = new Array(graph.vertices);

        this.dfs(s);
    }

    dfs(s) {
        this.marked[s] = true;

        let adj = this.graph.adj(s);

        for (let vertex of adj) {
            if (!this.marked[vertex]) {
                this.dfs(vertex);
                this.edgeTo[vertex] = s;
            }
        }
    }

    hasPathTo(vertex) {
        return this.marked[vertex];
    }

    pathTo(vertex) {
        if (!this.hasPathTo(vertex)) return null;

        let path = [];

        for (let i = vertex; i != this.startVertex; i = this.addEdge[i]) {
            path.push(i);
        }

        path.push(this.startVertex);

        return path;
    }
}

class BFSPaths {
    constructor(graph, s) {
        this.startVertex = s;
        this.graph = graph;
        this.marked = new Array(graph.vertices);
        this.edgeTo = new Array(graph.vertices);

        this.bfs(s);
    }

    bfs(s) {
        let queue = [];

        queue.push(s);
        this.marked[s] = true;

        while (queue.length) {
            let vertex = queue.shift();

            if (!this.marked[vertex]) {
                queue.push(vertex);
                this.marked[vertex] = true;
                this.edgeTo[vertex] = s;
            }
        }
    }
}

class ConnectedComponents {
    constructor(graph) {
        this.graph = graph;
        this.id = new Array(graph.vertices);
        this.marked = new Array(graph.vertices);
        this.count = 0;

        let vertices = graph.vertices;

        for (let i = 0; i <= vertices; i++) {
            if (!this.marked[i]) {
                this.dfs(vertices[i]);
                this.count++;
            }
        }
    }

    dfs(vertex) {
        this.marked[vertex] = true;
        this.id[vertex] = this.count;

        let adjList = this.graph.adj(vertex);

        for (let vertex of adjList) {
            if (!this.marked[vertex]) {
                this.dfs(vertex);
            }
        }
    }
}

class Digraph {
    constructor(vertices) {
        this.vertices = vertices;
        this.graph =  Array.from({length: vertices}, vertex => new Array());
    }

    addEdge(v, w) {
        this.graph[v].push(w);
    }

    adj(vertex) {
        return this.graph[vertex];
    }
}

class DiDFSPAths {
    constructor(graph, vertex) {
        this.graph = graph;
        this.startVertex = vertex;
        this.marked = new Array(graph.vertices);

        this.dfs(vertex);
    }

    dfs(vertex) {
        this.marked[vertex] = true;

        let adjList = this.graph.adj[vertex];

        for (let vert of adjList) {
            if (!this.marked[vert]) {
                this.dfs(vert);
            } 
        }
    }

    hasPathTo(vertex) {
        return this.marked[vertex];
    }
}

class WebCrawler {
    SITE_REGEXP = "http://(\\w+\\.)*(\\w+)";

    constructor(startSite) {
        this.root = startSite;
        this.marked = new Set();

        this.dfs(this.root);
    }

    dfs(webSite) {
        let queue = [];
        this.marked.add(webSite);

        queue.push(webSite);

        while (!queue.length) {
            let nextSite = queue.shift(),
                siteContent = getContent(nextSite);

            while (matcher.find(this.SITE_REGEXP)) {
                let nextMatch = matcher.group();

                if (!this.marked.has(nextMatch)) {
                    this.marked.add(nextMatch);
                    queue.push(nextMatch);
                }
            }    
        }
    }
}

class TopologicalSort {
    constructor(graph) {
        this.graph = graph;
        this.order = [];
        this.marked = new Array(graph.vertices);

        let vertices = graph.vertices;

        for (let vertex of vertices) {
            if (!this.marked[vertex]) {
                this.dfs(vertex);
            }
        }
    }

    dfs(vertex) {
        this.marked[vertex] = true;

        let adjList = this.graph.adj(vertex);

        for (let vertex of adjList) {
            if (!this.marked[vertex]) {
                this.dfs(vertex);
            }
        }

        this.order.push(vertex);
    }

    getOrder() {
        return this.order;
    }
}

class StrongCC {
    constructor(graph) {
        this.count = 0;
        this.id = new Array(graph.vertices);
        this.marked = new Array(graph.vertices);
        this.graph = graph;

        let postOrder = new TopologicalSort(graph).getOrder();

        for (let vertex of postOrder) {
            if (!this.marked[vertex]) {
                this.dfs(vertex);
                count++;
            }
        }
    }

    dfs(vertex) {
        this.marked[vertex] = true;
        this.id[vertex] = this.count;

        let adj = this.graph.adj[vertex];

        for (let adjVrtex of adj) {
            if (!this.marked[adjVrtex]) {
                this.dfs(adjVrtex);
            }
        }
    }

    areStronglyConnected(v, w) {
        return this.id[v] === this.id[w];
    }
}

class Edge {
    constructor(v, w, weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    }

    either() {
        return this.v;
    }

    other(vertex) {
        return vertex === this.v ? this.w : this.v;
    }

    compareTo(edge) {
        if (this.weight < edge.weight) {
            return -1;
        } else if (this.weight > edge.weight) {
            return 1;
        } else {
            return 0;
        }
    }
}

class EdgeWeightedGraph {
    constructor(vertices) {
        this.vertices = vertices;
        this.graph = Array.from({length: vertices}, vertex => new Array());
    }

    addEdge(edge) {
        let v = edge.either(),
            w = edge.other(v);

        this.graph[v].push(edge);
        this.graph[w].push(edge);    
    }

    adj(vertex) {
        return graph[vertex];
    }

    edges() {
        return this.graph.reduce((result, adj) => {
            return [...result, ...adj];
        }, []);
    }
}

// Kruskal's algortihm
class KruskalMST {
    constructor(graph) {
        this.graph = graph;
        this.pq = new PQ();
        this.mst = [];
        this.union = new UF(graph.vertices);
        this.vertices = graph.vertices;

        for (let edge of graph.edges()) {
            this.pq.insert(edge);
        }

        this.getMST();
    }

    getMST() {
        while (this.pq.size() && this.getMST.length < this.vertices - 1) {
            let minEdge = this.pq.extract(),
                v = minEdge.either(),
                w = minEdge.other(v);

            if (!this.UF.connected(v, w)) {
                this.UF.union(v, w);
                this.mst.push(minEdge);
            }    
        }
    }

    edges() {
        return this.mst;
    }
}

class LazyPrimsMST {
    constructor(graph) {
        this.graph = graph;
        this.vertices = graph.vertices;
        this.mst = [];
        this.pq = new PQ();
        this.marked = new Array(this.vertices).fill(false);

        this.visit(0);
    }

    getMst() {
        while(this.pq.size() && this.mst.length < this.vertices - 1) {
            let minEdge = this.pq.extract(),
                v = minEdge.either(),
                w = minEdge.other();

            if (this.marked[v] && this.marked[w]) continue;
            this.mst.push(minEdge);
            this.marked[v] ? this.visit(w) : this.visit(v);    
        }
    }

    visit(vertex) {
        this.marked[vertex] = true;

        let adj = this.graph.adj(vertex);

        for (let edge of adj) {
            let w = edge.other(vertex);

            !this.marked[w] && this.pq.insert(edge); 
        }
    }

    mst() {
        return this.mst;
    }
}

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
        this.adjList = Array.from({length: vertices}, vertex => new Array());
    }

    addEdge(edge) {
        let v = edge.from();
        this.adjList[v].push(edge);
    }

    adj(vertex) {
        return this.adjList[vertex];
    }
}