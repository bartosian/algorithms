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