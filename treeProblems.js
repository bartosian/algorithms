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

  sort(arr) {
    let len = arr.length,
        halfOfLen = Math.floor(len / 2);

    for (let i = halfOfLen; i >= 1; i--) {
      this.sink(arr, i);
    }

    while (len > 1) {
      this.swap(arr, 1, len);
      this.sink(arr, 1, --N);
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

const STATES = {
  UNVISITED: "unvisited",
  VISITED: "visited",
  VISITING: "visitng"
}

function search(graph, start, end) {
  if (start === end) return ture;

  let queue = new Queue();

  for (let vertex in graph) {
    vertex.state = STATES.UNVISITED;
  }

  queue.enqueu(start);
  start.state = STATES.VISITING;

  while (queue.size) {
    let nextVertex = queue.dequeue();

    for (let node in nextVertex.adjList()) {
      if (node === end) {
        return true;
      } else {
        node.state = STATE.VISITING;
        queue.enqueue(node);
      }
    }

    nextVertex.state = STATES.VISITED;
  }

  return false;
}

function minimalBST(arr, left, right) {
  if (right < left) return null;

  let mid = Math.floor((right - left) / 2),
      node = new Node(mid);
  node.left = minimalBST(arr, left, mid - 1);
  node.right = minimalBST(arr, mid + 1, right);

  return node;
}

function createLevelLinkedList(root, lists, level) {
  if (!root) return;

  let level;

  if (lists.size() === level) {
    level = new List();
  } else {
    level = lists.get(level);
  }

  level.add(root);

  createLevelLinkedList(root.left, lists, level + 1);
  createLevelLinkedList(root.right, lists, level + 1);
}

function getHeight(root) {
  if (!root) return -1;

  return Math.max(getHeight(root.left), getheight(root.right)) + 1;
}

function isBalanced(root) {
  if (!root) return true;

  let heightDiff = getHeight(root.left) - getHeight(root.right);

  if (Math.abs(heightDiff) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

function getHeightOf(root) {
  if (!root) return -1;

  let leftHeight = getHeightOf(root.left);

  if (leftHeight === Integer.MIN_SAFE_INTEGER) {
    return Integer.MIN_SAFE_INTEGER;
  }

  let rightHeight = getHeightOf(root.right);

  if (rightHeight === Integer.MIN_SAFE_INTEGER) {
    return Integer.MIN_SAFE_INTEGER;
  }

  let diff = leftHeight - rightHeight;

  if (Math.abs(diff) > 1) {
    return Integer.MIN_SAFE_INTEGER;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function ifBalanced(root) {
  return getHeightOf(root) !== Number.MIN_SAFE_INTEGER;
}

let lastNode = null;

function checkBST(root) {
  if (!root) return true;

  if (!checkBST(root.left)) return false;

  if (lastNode && root.data <= lastNode) {
    return false;
  } else {
    lastNode = root.data;
  }

  if (!checkBST(root.right)) return false;

  return true;
}

function checkBSTSec(root, min, max) {
  if ((min && root.data <= min) || (max && root.data > max)) return false;

  if (!checkBSTSec(root.left, min, root.data) || !checkBSTSec(root.right, root.data, max)) return false;

  return true;
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(node) {
    this.root = node;
  }

  get(key) {
    let node = this.root;

    while (node) {
      if (key < node.key) {
        node = node.left;
      } else  if (key > node.key) {
        node = node.right;
      } else {
        return node.value;
      }
    }

    return null;
  }

  insert(node, key, value) {
    if (!node) return new Node(key, value);

    if (key < node.key) {
      return this.insert(node.left, key, value);
    } else if (key > node.key) {
      return this.insert(node.right, key, value);
    } else {
      node.value = value;
    }

    return node;
  }
}

function inOrderSuccessor(root, node) {
  if (!node) return null;
   
  if (!node.right) {
    return getMin(node.right);
  }

  let parent = node.parent;

  while(parent) {
    if (node !== parent.right) break;
    parent = parent.parent;
    node = parent;
  }

  return parent;
}

function minValue(root) {
  let current = root;

  while (current.left) {
    current = current.left;
  }

  return current;
}
