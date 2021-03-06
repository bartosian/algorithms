// class FixedMultiStack {
//   constructor(size, number) {
//     this.capacity = size;
//     this. numberOfStacks = number;
//     this.values = new Array(size * number).fill(0);
//     this.sizes = new Array(number).fill(0);
//   }
//
//   push(stackNum, value) {
//     if (this.isFull(stackNum)) {
//       throw new StackOverflowError();
//     }
//
//     this.sizes[stackNum]++;
//
//     let topIndex = this.getTopIndex();
//     this.value[topIndex] = value;
//   }
//
//   pop(stackNum) {
//     if (this.isEmpty(stackNum)) {
//       throw new StackUnderflowError();
//     }
//
//     let topIndex = this.getTopIndex(stackNum),
//         value = this.values[topIndex],
//         this.values[topIndex] = 0,
//         this.sizes[stackNum]--;
//
//     return value;
//   }
//
//   peek(stackNum) {
//     if (this.isEmpty(stackNum)) {
//       throw new StackUnderflowError();
//     }
//
//     let element = this.values[this.getTopIndex(stackNum)];
//     return rlement;
//   }
//
//   isFull(stackNum) {
//     return this.sizes[stackNum] === this.capacity;
//   }
//
//   isEmpty(stackNum) {
//     return this.sizes[stackNum] === 0;
//   }
//
//   getTopIndex(stackNum) {
//     let index = stackNum * capacity + this.sizes[stackNum] - 1;
//
//     return index;
//   }
// }
//
// class StackWithMin {
//   constructor() {
//     this.stack = [];
//     this.size = 0;
//     this.min = [];
//   }
//
//   push(value) {
//     this.stack.push(value);
//     this.size++;
//
//     if (!this.min.length) {
//       this.min.push(value);
//     } else {
//       if (value <= this.min[this.size - 1]) {
//         this.min.push(value);
//       }
//     }
//   }
//
//   pop() {
//     if (this.size) {
//       let el = this.stack.pop();
//
//       if (el === this.min[this.size - 1]) {
//         this.min.pop();
//       }
//
//       return this.stack.pop();
//     } else {
//       throw new StackUnderflowError();
//     }
//   }
//
//   peek() {
//     if (this.size) {
//       return this.stack[this.size - 1];
//     } else {
//       throw new StackUnderflowError();
//     }
//   }
//
//   min() {
//     return this.min[this.size - 1];
//   }
// }
//
// class SetOfStacks {
//   constructor(size) {
//     this.capacity = size;
//     this.stacks = new Stack();
//   }
//
//   getLastStack() {
//     if (this.stacks.size()) return null;
//
//     return this.stacks.peek();
//   }
//
//   push(value) {
//     let lastStack = this.getLastStack();
//
//     if (lastStack && !lastStack.isFull) {
//       lastStack.push(value);
//     } else {
//       let newStack = new Stack();
//       newStack.push(value);
//
//       this.stacks.push(newStack);
//     }
//   }
//
//   pop() {
//     let lastStack = this.getLastStack();
//
//     if (!lastStack) {
//       throw new EmptyStackExecption();
//     }
//
//     let value = lastStack.pop();
//
//     if (lastStack.isEmpty) {
//       this.stacks.pop();
//     }
//
//     return value;
//   }
//
//   isEmpty() {
//    let lastStack = this.getLastStack();
//
//    if (!this.stack.size() || !lastStack) return true;
//
//    return false;
//   }
//
//   popAt(stackId) {
//     return this.shiftLeft(stackId, true);
//   }
//
//   shiftLeft(stackId, removeTop) {
//     let stack = this.stacks[stackId],
//         removedItem = 0;
//
//     if (removeTop) {
//       removedItem = stack.pop();
//     } else {
//       removedItem = stack.removeBottom();
//     }
//
//     if (stack.isEmpty) {
//       this.stacks.pop();
//     } else if (this.stacks.size() > stackId + 1) {
//       let value = this.shiftLeft(stackId + 1, false);
//       stack.push(v);
//     }
//
//     return removedItem;
//   }
// }
//
// clas Stack {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.size = 0;
//     this.values = [];
//   }
//
//   isFull() {
//     return this.size === this.capacity;
//   }
//
//   isEmpty() {
//     return this.size === 0;
//   }
//
//   push(value) {
//     if (this.size === this.capacity) return false;
//
//     this.values.push(value);
//     this.size++;
//   }
// }
//
// class QueueOfStacks {
//   constructor() {
//     this.stack1  = new Stack();
//     this.stack2 = new Stack();
//     this.size = 0;
//   }
//
//   enqueue(value) {
//     this.stack1.push(value);
//
//     this.size++;
//   }
//
//   dequeue() {
//     if (!this.size) {
//       throw new EmptyQueueError();
//     }
//
//     if (!this.stack2.isEmpty) {
//       this.size--;
//       return this.stack2.pop();
//     } else {
//       let stackSize = this.stack1.size();
//
//       for (let i = 0; i < stackSize; i++)  {
//         this.stack2.push(this.stack1.pop());
//       }
//
//       this.size--;
//       return this.stack2.pop();
//     }
//   }
//
//   sort(stack) {
//     let aux = new Stack();
//
//     while (!s.isEmpty()) {
//       let tmp = s.pop();
//
//       while (!aux.isEmpty && aux.peek() > tmp) {
//         stack.push(aux.pop());
//       }
//
//       aux.push(tmp);
//     }
//
//     while (!aux.empty()) {
//       stack.push(ayx.pop());
//     }
//   }
// }

function check(str, bracketsConfig) {
  let openMap = {},
      closeMap = {},
      stack = [];

  bracketsConfig.forEach(([open, close]) => { closeMap[close] = open; openMap[open] = close });

  for (let i = 0; i < str.length; i++) {
    openMap[str[i]] ?
      str[i] === stack[stack.length - 1] && closeMap[str[i]] ? stack.pop() : stack.push(str[i]) :
      stack[stack.length - 1] === closeMap[str[i]] ? stack.pop() : i = str.length;
  }

  return !stack.length;
}

function dfs(row, grid, visited) {
    visited.add(row);

    for (let i = 0; i < grid.length; i++) {
        !visited.has(i) && grid[row][i] && dfs(i, grid, visited);
    }
}


var findCircleNum = function(isConnected) {
    let visited = new Set(),
        count = 0,
        citiesCount = isConnected.length;

    for (let i = 0; i < citiesCount; i++) {
        if (!visited.has(i)) {
            dfs(i, isConnected, visited);
            count++;
        }
    }

    return count;
};

class IsSubtree {
  constructor(tree1, tree2) {
    this.tree1 = tree1;
    this.tree2 = tree2;
    this._result = this.dfs(tree1);
  }

  getResult() {
    return this._result;
  }

  isSame(nodeA, nodeB) {
    if (!nodeA && !nodeB) return true;
    if (!nodeA || !nodeB || nodeA.val !== nodeB.val) return false;

    return this.isSame(nodeA.left, nodeN.left) && this.isSame(nodeA.right, nodeB.right);
  }

  dfs(node) {
    if (!node) return false;

    if (node.val === this.tree2.val && this.isSame(node, this.tree2) {
      return true;
    }

    return this.dfs(node.left) || this.dfs(node.right);
  }
}
