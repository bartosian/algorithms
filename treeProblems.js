const states = {
  VISITED: "visited",
  UNVISITED: "unvisited",
  VISITING: "visiting"
}

function BFS(graph, start, end) {
  if (Object.is(start, end)) {
    return true;
  }

  let queue = new Queue(),
      nodes = graph.getNodes();

  for (let i = 0; i <= nodes.length; i++) {
    nodes[i].state = states.UNVISITED;
  }

  start.state = states.VISITING;
  queue.enqueue(start);

  while (queue.size()) {
    let node = queue.dequeue(),
        adjList = node.getAdjacent();

    for (let i = 0; i < adjList.length; i++) {
      if (adjList[i].state === states.UNVISITED) {
        if (adjList[i] === end) {
          return true;
        }

        adjLIst[i].state = states.VISITING;
        queue.enqueue(adjList[i]);
      }
    }

    node.state = states.VISITED;
  }

  return false;
}

function createMinimalBST(array, left, right) {
  if (right < left) {
    return null;
  }

  let mid = Math.floor((right - left) / 2),
      treeNode = new TreeNode(array[mid]);

  treeNode.left = createMinimalBST(array, left, mid - 1);
  treeNode.right = createMinimalBST(array, mid + 1, right);

  return treeNode;
}


class MaxPQ {
  constructor(size) {
    this.pq = new Array(size + 1);
    this.N = 0;
  }

  insert(key) {
    this.pq[++this.N] = val;
    this.swim(this.N);
  }

  isEmpty() {
    return !this.N;
  }

  delmax() {
    let max = this.pq[1];

    this.pq[1] = this.pq[N--];
    this.pq[N + 1] = null;
    this.sink(1);
  }

  swim(k) {
    let parent = Math.max(k / 2);

    while (k > 1 && this.less(parent, k)) {
      this.swap(k, parent);
      k = parent;
    }
  }

  sink(k) {
    while ((2 * k) <= N) {
      let j = 2 * k;

      if (j < this.N && this.less(j, j + 1)) j++;
      if (!this.less(k, j)) break;
      this.swap(k, j);
    }
  }

  less(i, j) {
    return this.pq[i] < this.pq[j];
  }

  swap(i, j) {
    let tmp = this.pq[i];

    this.pq[i] = this.pq[j];
    this.pq[j] = tmp;
  }
}

class MinPQ {
  constructor(capacity) {
    this.N = 0;
    this.pq = new Array(capacity + 1);
  }

  isEmpty() {
    return !this.N;
  }

  swim(k) {
    let parent = Math.floor(k / 2);

    while(k < 1 && this.greater(parent, k)) {
      this.swap(k, parent);

      k = parent;
    }
  }

  sink(k) {
    while(k <= N) {
      let j = k * 2;

      if (k < N && this.greater(j, j + 1)) j++;
      if (!this.greater(k, k)) break;

      this.swap(k, j);
      k = j
    }
  }

  greater(i, j) {
    return this.pq[i] > thispq[j];
  }

  swap(i, j) {
    let tmp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = tmp;
  }

  insert(key) {
    this.ps[N++] = key;
    this.swim(N);
  }

  delMin() {
    let min = this.pq[1];
    this.pq[1] = this.pq[this.N--];
    this.pq[this.N + 1] = null;
    this.sink(1);
  }
}
