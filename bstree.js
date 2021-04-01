class BST {
  constructor() {
    this.root = null;
  }

  insert(root, val) {
    if (!root) {
      return new Node(val);
    }

    if (val < root.value) {
      root.left = this.insert(root.left, val);
    } else {
      root.right = this.insert(root.right, val);
    }
  }

  find(val) {
    let current = this.root;

    while (current) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return false;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new BST();
tree.root = new Node(15);

class Search {
  bfs(root) {
    let queue = [];
    queue.push(root);

    while(queue.length) {
      let current = queue.shift();

      console.log(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  preorder(root) {
    let data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(node);

    return data;
  }

  postorder(root) {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(node);

    return data;
  }

  inorder(root) {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      
      data.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(node);

    return data;
  }
}
