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
