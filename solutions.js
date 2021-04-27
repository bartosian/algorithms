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