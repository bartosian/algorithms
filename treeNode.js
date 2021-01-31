// O(logn) ~ O(d)
class TreeNode {
  constructor(data) {
    this.data = data;
    this.size = 1;
    this.left = this.right = null;
  }

  get size() {
    return this.size;
  }

  get data() {
    return this.data;
  }

  getRandomNode(index) {
    let leftSize = this.left ? this.left.size : 0;

    if (index < leftSize) {
      return this.left.getRandomNode(index);
    } else if (index === leftSize) {
      return this;
    } else {
      return this.right.getRandomNode(index - (leftSize + 1));
    }
  }

  insertInOrder(data) {
    if (data <= this.data) {
      if (!this.left) {
        this.left = new TreeNode(data);
      } else {
        return this.left.insertInOrder(data);
      }
    } else {
      if (!this.right) {
        this.right = new TreeNode(data);
      } else {
        return this.right.insertInOrder(data);
      }
    }

    this.size++;
  }

  find(data) {
    if (this.data === data) {
      return this;
    } else  if (data <= this.data) {
      return this.left ? this.left.find(data) : null;
    } else if (data > this.data) {
      return this.right ? this.right.find(data) : null;
    }

    return null;
  }
}

class RandomNodeTree {
  constructor(root) {
    this.root = root;
  }

  get size() {
    return this.root ? this.root.size : 0;
  }

  insertInOrder(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.root.insertInOrder(value);
    }
  }

  getRandomNode() {
    if (!this.root) {
      return null;
    }

    let randomIndex = Math.floor(Math.random() * this.size);
    return this.root.getRandomNode(randomIndex);
  }
}
