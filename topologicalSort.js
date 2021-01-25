class Project {
  constructor(name) {
    this.name = name;
    this.dependencies = 0;
    this.map = {};
    this.children = [];
  }

  addNeighbor(node) {
    if (!this.map[node.getName()]) {
      this.map[node.getName()] = node;
      this.children.push(node);
      node.incrementDependencies();
    }
  }

  incrementDependencies() {
    this.dependencies++;
  }

  decrementDependencies() {
    this.dependencies--;
  }

  getName() {
    return this.name;
  }

  getChildren() {
    return this.children;
  }

  getNumberOfDependencies() {
    return this.dependencies;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }

  getOrCreateNode(name) {
    if (!this.map[name]) {
      let node = new Project(name);
      this.nodes.push(node);
      this.map[name] = node;
    }

    return this.map[name];
  }

  addEdge(nameA, nameB) {
    let projectA = this.getOrCreateNode(nameA);
    let projectB = this.getOrCreateNode(nameB);

    projectA.addNeighbor(projectB);
  }

  getNodes() {
    return this.nodes;
  }
}

class BuildOrder {
  constructor() {
    this.graph = this.buildGraph(projects, dependencies);
    return this.orderProjects();
  }

  buildGraph(projects, dependencies) {
    let graph = new Graph();

    for (let i = 0; i < projects.length; i++) {
      graph.getOrCreateNode(projects[i]);
    }

    for (let j = 0; j < dependencies.length; j++) {
      [nameA, nameB] = dependencies[j];

      graph.addEdge(nameA, nameB);
    }

    return graph;
  }

  orderProjects() {
    let projects = this.graph.getNodes(),
        order = new Array(this.graph.getNodes().length());

    let endOfList = this.addNonDependent(order, projects, 0);

    let toBeProcessed = 0;

    while (toBeProcessed < order.length) {
      let current = order[toBeProcessed];

      if (!current) {
        return null;
      }

      let children = current.getChildren();

      for (let i = 0; i < children.length; i++) {
        children[i].decrementDependencies();
      }

      endOfList = addNonDependent(order, children, endOfList);
      toBeProcessed++;
    }

    return order;

  }

  addNonDependent(order, projects, offset) {
    for (let i = 0; i < projects.length; i++) {
      if (!projects[i].getNumberOfDependencies()) {
        order.push(projects[i]);
        offset++;
      }
    }

    return offset;
  }
}
