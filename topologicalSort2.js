class Project {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.dependencies = 0;
    this.map = {};
    this.state = Project.STATES.UNVISITED;
  }

  addNeighbor(node) {
    let {name} = node;

    if (!this.map[name]) {
      this.map[name] = node;
      this.children.push(node);
    }
  }

  getName() {
    return this.name;
  }

  getChildren() {
    return this.children;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

Project.STATES = {
  VISITED: "visited",
  UNVISITED: "unvicited",
  VISITING: "visiting"
};

class Graph {
  constructor() {
    this.map = {};
    this.nodes = [];
  }

  getOrCreateNode(name) {
    let node = this.map[name];

    if (!node) {
      node = new Project(name);
      this.map[name] = node;
      this.nodes.push(node);
    }

    return node;
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
  constructor(projects, dependencies) {
    this.graph = this.buildGraph(projects, dependencies);
    return this.getOrderBuild(projects);
  }

  buildGraph(projects, dependencies) {
    let graph = new Graph();

    for (let i = 0; i < projects.length; i++) {
      graph.getOrCreateNode(projects[i].getName());
    }

    for (let j = 0; j < dependencies.length; j++) {
      let [projectA, projectB] = dependencies[i];

      graph.addEdge(projectA, projectB);
    }

    return graph;
  }

  getOrderBuild(projects) {
    let order = [];

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].getState() === Project.STATES.UNVISITED) {
        if (!this.DFS(projects[i], order)) {
          return null;
        }
      }
    }

    return order;
  }

  doDFS(node, order) {
    if (node.getState() === Project.STATES.VISITING) {
      return null;
    }

    if (node.getState() === Project.STATES.UNVISITED) {
      node.setState(Project.STATES.VISITING);

      let children = node.getChildren();

      for (let j = 0; j < children.length; j++) {
        if (!DFS(children[i], order)) {
          return null;
        }
      }

      node.setState(Project.STATES.VISITED);
      order.push(node);
    }

    return true;
  }
}
