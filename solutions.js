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

class ShortestPath {
    distTo(v) {
        return this.distTo[v];
    }

    pathTo(v) {
        let path = [];

        for (let edge = this.edgeTo[v]; edge != null; edge = this.edgeTo[edge.from()]) {
            path.push(edge);
        }

        return path;
    }

    relax(e) {
        let v = e.from(),
            w = e.to();

        if (this.distTo[w] > this.distTo[v] + e.weight()) {
            this.distTo[w] = this.distTo[v] + e.weight();
            this.edgeTo[w] = e;
        }    
    }
}

class Dijkstra {
    constructor(graph, start) {
        this.graph = graph;
        this.vertices = graph.vertices;
        this.start = start;
        this.distTo = Array.from({length: this.vertices}, vertex => {
            if (vertex === start) {
                return 0;
            } else {
                return Infinity;
            }
        });
        this.edgeTo = new Array(this.vertices).fill(null);
        this.path = [];
        this.pq = new IndexMinPQ();

        this.pq.insert([this.start, 0]);

        while (this.pq.size()) {
            let minVertex = this.pq.extract();

            for (let edge of this.graph.adj[minVertex]) {
                this.relax(edge);
            }
        }
    }

    relax(edge) {
        let from = edge.from(),
            to = edge.to();

        if (this.distTo[to] < this.distTo[from] + edge.weight) {
            this.distTo[to] = this.distTo[from] + edge.weight;
            this.edgeTo[to] = edge;

            if (this.pq.contains(to)) {
                this.pq.decreaseKey([to, this.distTo[to]]);
            } else {
                this.pq.insert([to, this.diustTo[to]]);
            }
        }    
    }

    distTo(vertex) {
        return this.pathTo[vertex];
    }

    pathTo(vertex) {
        this.path = [];

        for (let edge = this.edgeTo[vertex]; !!edge; edge = this.edgeTo[edge.from()]) {
            this.path.push(edge);
        }

        return this.path;
    }
}

class ShortestPathDAG {
    constructor(graph, start) {
        this.graph = graph;
        this.start = start;
        this.vertices = this.graph.vertices;
        this.path = [];
        this.distTo = Array.from({length: this.vertices}, vertex => {
            if (vertex === start) {
                return 0;
            } else {
                return Infinity;
            }
        });
        this.edgeTo = new Array(this.vertices).fill(null);

        let TopologicalOrder = new TopologicalSort().getOrder();

        for (let vertex of TopologicalOrder) {
            let adj = this.graph.adj(vertex);

            for (let edge of adj) {
                this.relax(edge);
            }
        }
    }

    relax(edge) {
        let from = edge.from(),
            to = edge.to();

        if (this.distTo[to] < this.distTo[from] + edge.weight) {
            this.distTo[to] = this.distTo[from] + edge.weight;
            this.edgeTo = edge;
        }    
    }
}

class BellmanFord {
    constructor(graph, start) {
        this.start = start;
        this.graph = graph;
        this.vertices = this.graph.vertices;
        this.changed = new Array(this.vertices).fill(true);
        this.distTo = Array.from({length: this.vertices}, vertex => {
            if (vertex === start) {
                return 0;
            } else {
                return Infinity;
            }
        });
        this.edgeTo = new Array(this.vertices).fill(null);

        let cycle = this.vertices;

        while (cycle) {
            for (let vertex of vertices) {
                let adj = this.ghraph.adj(vertex);

                for (let edge of adj) {
                    this.changed[edge.to()] && this.relax(edge);
                }
            }
            cycle--;
        }
    }

    relax(edge) {
        let from = edge.from(),
            to = edge.to();

        if (this.distTo[to] > this.distTo[from] + edge.weight) {
            this.distTo[to] = this.distTo[from] + edge.weight;
            this.edgeTo[to] = edge;
        } else {
            this.changed[to] = false;
        }    
    }
}

class KeyIndexedCounting {
    constructor(arr, R) {
        this.R = R;
        this.arr = arr;
        this.length = arr.length;
        this.aux = new Array(this.length).fill(0);
        this.count = new Array(this.R + 1).fill(0);

        this.sort();
    }

    sort() {
        // count frequences
        for (let i = 0; i < this.length; i++) {
            this.count[this.arr[i]++] += 1;
        }

        // compute cumulates
        for (let i = 0; i < this.R; i++) {
            this.count[i + 1] += this.count[i];
        }

        // move items
        for (let i = 0; i < this.length; i++) {
            this.aux[this.count[this.arr[i]]++] = this.arr[i];
        }

        // copy back
        for (let i = 0; i < this.length; i++) {
            this.arr[i] = this.aux[i];
        }
    }

    getResult() {
        return this.arr;
    }
}

class LSD {
    R=256

    constructor(arr, w) {
        this.arr = arr;
        this.w = w;
        this.length = arr.length;
        this.aux = new Array(this.length).fill(0);

        sort();
    }

    sort() {
        for (let d = this.w - 1; d >= 0; d--) {
            let count = new Array(this.R + 1).fill(0);

            for (let i = 0; i < this.length; i++) {
                this.count[this.arr[i][d] + 1]++;
            }

            for (let r = 0; r < this.R; r++) {
                this.count[r + 1] += this.count[r];
            }

            for (let i = 0; i < this.length; i++) {
                this.aux[this.count[this.arr[i][d]]++] = this.arr[i];
            }

            for (let i = 0; i < this.length; i++) {
                this.arr[i] = this.aux[i];
            }
        }
    }
}

class MSD {
    R=256

    constructor(arr) {
        this.arr = arr;
        this.length = arr.length;
        this.aux = new Array(this.length).fill(0);

        this.sort(this.arr, this.aux, 0, this.length - 1, 0);
    }

    charAt(str, d) {
        if (d < str.length) {
            return str.charAt(d);
        } else {
            return -1;
        }
    }

    sort(arr, aux, lo, hi, digit) {
        let count = new Array(this.R + 1).fill(0);

        for (let i = lo; i <= hi; i++) {
            count[this.charAt(arr[i], digit) + 2]++;
        }

        for (let r = 0; r < R + 1; r++) {
            count[r + 1] += count[r];
        }

        for (let i = lo; i <= hi; i++) {
            aux[count[this.charAt(arr[i], digit) + 1]++] = arr[i];
        }

        for (let i = lo; i <= hi; i++) {
            arr[i] = aux[i - lo];
        }

        for (let r = 0; r < this.R; r++) {
            this.sort(arr, aux, lo + count[r], lo + count[r + 1], d + 1);
        }
    }
}

class ThreeWayQUickSort {
    constructor(arr) {
        this.arr = arr;

        this.sort(arr, 0, arr.length - 1, 0);
    }

    charAt(str, d) {
        if (d < str.length) {
            return str.charAt(d);
        } else {
            return -1;
        }
    }

    sort(arr, lo, hi, digit) {
        if (hi <= lo) return;

        let lt = lo,
            gt = hi,
            pivot = this.charAt(arr[lo], digit),
            i = lo + 1;

        while (i <= gt) {
            let currentChar = this.charAt(arr[i], digit);

            if (currentChar < pivot) {
                this.swap(arr, i++, lt++);
            } else if (currentChar > pivot) {
                this.swap(arr, i, gt--);
            } else {
                i++;
            }
        }
        
        this.sort(arr, lo, lt - 1, digit);

        if (pivot >= 0) this.sort(arr, lt, gt, d + 1);

        this.sort(arr, gt + 1, hi, digit);
    }
}

class LRS {
    constructor(str) {
        this.suffixArr = this.constructSuffixArr(str);
        this.arrLen = thids.suffixArr.length;

        this.suffixArr.sort(this.suffixArr);

        this.lrs = this.findLRS();
    }

    constructSuffixArr(str) {
        let arr = [];

        for (let i = 0; i < str.length; i++) {
            arr.push(str.substring(i));
        }

        return arr;
    }

    findLRS(arr) {
        let lrs = "";

        for (let i = 0; i < this.arrLen - 1; i++) {
            let lrpLen = this.getLRP(arr[i], arr[i + 1]);

            if (lrpLen > lrs.length) {
                lrs = arr[i].substring(0, lrpLen);
            }
        }

        return lrs;
    }

    getLRP(strA, strB) {
        let len = Math.min(strA.length, strB.length),
            i = 0;

        while (strA[i] === strB[i] && i < len) {
            i++;
        }

        return i + 1;
    }
}

class Node {
    constructor(radix, value=null) {
        this.value = value;
        this.next = new Array(radix);
    }
}

class Trie {
    R = 256

    constructor() {
        this.root = new Node(this.R);    
    }

    put(key, value) {
        this.root = this.put_helper(this.root, key, value, digit);
    }

    put_helper(node, key, value, digit) {
        if (!node) node = new Node();

        if (digit === key.length) {
            node.value = value;
            return node;
        }

        let char = key.charAt(digit);
        node.next[char] = this.put(node.next[char], key, value, digit + 1);

        return node;
    }

    contains(key) {
        return !!this.get(key);
    }

    get(key) {
        let node = this.get_helper(this.root, key, 0);

        if (node) {
            return node.value;
        } else {
            return null;
        }
    }

    get_helper(node, key, digit) {
        if (!node) return null;

        if (key.length === digit) {
            return node;
        }

        let char = key.charAt(digit);

        return this.get_helper(node[char], key, digit + 1);
     }

     keys() {
         let queue = [];

         this.collect(this.root, "", queue);

         return queue;
     }

     collect(node, prefix, queue) {
        if (!node) return null;

        if (node.value) queue.unshift(prefix);

        for (let char = 0; char < this.R; char++) {
            this.collect(node[char], prefix + String.fromCharCode(97 + char), queue);
        }
     }

     keysWithPrefix(prefix) {
        let prefixNode = this.get_helper(this.root, prefix, 0);

        if (!prefixNode) return null;

        let queue = [];

        this.collect(prefixNode, prefix, queue);

        return queue;
     }

     longestPrefixOf(query) {
        let length = this.search(this.root, query, 0, 0);

        return query.substring(0, length);
     }

     search(node, query, digit, length) {
        if (!node) return length;

        if (node.value) length = digit;
        if (digit === query.length) return length;

        let char = query.charAt(digit);

        return this.search(node.next[char], query, digit + 1, length);
     }
}

class NodeTST {
    constructor(val=null, char=null) {
        this.value = val;
        this.char = char;
        this.left = null;
        this.middle = null;
        this.right = null;
    }
}

class TST {
    constructor() {
        this.root = null;
    }

    put(key, value) {
        this.put_helper(this.root, key, value, 0);
    }

    put_helper(node, key, value, digit) {
        let char = key.charAt(digit);

        if (!node) {
            node = new NodeTST();
            node.char = char;
        }

        if (char < node.char) {
            node.left = this.put_helper(node.left, key, value, digit);
        } else if (char > node.char) {
            node.right = this.put_helper(node.right, key, valaue, digit);
        } else if (digit < key.length - 1) {
            node.middle = this.put_helper(node.middle, key, value, digit + 1);
        } else {
            node.value = value;
        }

        return node;
    }

    contains(key) {
        return this.get(key) !== null;
    }

    get(key) {
        let node = this.get_helper(this.root, key, 0);

        if (!node) return null;

        return node.value;
    }

    get_helper(node, key, digit) {
        if (!node) return null;

        let char = key.charAt(digit);

        if (char < node.char) {
            return this.get_helper(node.left, key, digit);
        } else if (char > node.char) {
            return this.get_helper(node.right, key, digit);
        } else if (digit < key.length - 1) {
            return this.get_helper(node.middle, key, digit + 1);
        } else {
            return node;
        }
    }
}

function  stringSearch(text, pat) {
    let textLen = text.length,
        patLen = pat.length;

    for (let i = 0; i < textLen - patLen; i++) {
        let j;

        for (j = 0; j < patLen; j++) {
            if (text.charAt(i + j) !== pat.charAt(j)) {
                break;
            }
        }

        if (j === patLen) return i;
    }
    
    return textLen;
}

class KMP {
    R=256

    constructor(text, pattern) {
        this.text = text;
        this.pattern = pattern;
        this.textLen = text.length;
        this.patLen = pattern.length;

        this.dfs = this.buildDFA();

        let index = this.search();

        if (index === this.textLen) return -1;

        return index;
    }

    buildDFA() {
        let dfa = Array.from({ length: 256}, char => new Array(this.patLen));

        dfa[this.pattern.charAt(0)][0] = 1;

        for (let X = 0, j = 1; j < MSD; j++) {
            for (let c = 0; c < this.R; c++) {
                dfa[c][j] = dfa[c][X];
            }

            dfa[this.pattern.charAt(j)][j] = j + 1;
            X = dfa[this.pattern.charAt(j)][X];
        }
    }

    search() {
        let i, j;

        for (i = 0, j = 0; i < this.textLen && j < this.patLen; i++) {
            j = this.dfa[this.text.charAt(i)][j];
        }

        if (j === this.patLen) return i - this.patLen;
        return this.textLen;
    }
}

class NFA {
    constructor(regexp) {
        this.statesNum = regexp.length;
        this.re = regexp.split("");
        this.grap = this.buildEpsilonTransitionDigraph();
    }

    buildEpsilonTransitionDigraph() {}

    recognizes(txt) {}
}