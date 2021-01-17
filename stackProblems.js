class FixedMultiStack {
  constructor(size, number) {
    this.capacity = size;
    this. numberOfStacks = number;
    this.values = new Array(size * number).fill(0);
    this.sizes = new Array(number).fill(0);
  }

  push(stackNum, value) {
    if (this.isFull(stackNum)) {
      throw new StackOverflowError();
    }

    this.sizes[stackNum]++;

    let topIndex = this.getTopIndex();
    this.value[topIndex] = value;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new StackUnderflowError();
    }

    let topIndex = this.getTopIndex(stackNum),
        value = this.values[topIndex],
        this.values[topIndex] = 0,
        this.sizes[stackNum]--;

    return value;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new StackUnderflowError();
    }

    let element = this.values[this.getTopIndex(stackNum)];
    return rlement;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.capacity;
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  getTopIndex(stackNum) {
    let index = stackNum * capacity + this.sizes[stackNum] - 1;

    return index;
  }
}

class StackWithMin {
  constructor() {
    this.stack = [];
    this.size = 0;
    this.min = [];
  }

  push(value) {
    this.stack.push(value);
    this.size++;

    if (!this.min.length) {
      this.min.push(value);
    } else {
      if (value <= this.min[this.size - 1]) {
        this.min.push(value);
      }
    }
  }

  pop() {
    if (this.size) {
      let el = this.stack.pop();

      if (el === this.min[this.size - 1]) {
        this.min.pop();
      }

      return this.stack.pop();
    } else {
      throw new StackUnderflowError();
    }
  }

  peek() {
    if (this.size) {
      return this.stack[this.size - 1];
    } else {
      throw new StackUnderflowError();
    }
  }

  min() {
    return this.min[this.size - 1];
  }
}

class SetOfStacks {
  constructor(size) {
    this.capacity = size;
    this.stacks = new Stack();
  }

  getLastStack() {
    if (this.stacks.size()) return null;

    return this.stacks.peek();
  }

  push(value) {
    let lastStack = this.getLastStack();

    if (lastStack && !lastStack.isFull) {
      lastStack.push(value);
    } else {
      let newStack = new Stack();
      newStack.push(value);

      this.stacks.push(newStack);
    }
  }

  pop() {
    let lastStack = this.getLastStack();

    if (!lastStack) {
      throw new EmptyStackExecption();
    }

    let value = lastStack.pop();

    if (lastStack.isEmpty) {
      this.stacks.pop();
    }

    return value;
  }

  isEmpty() {
   let lastStack = this.getLastStack();

   if (!this.stack.size() || !lastStack) return true;

   return false;
  }

  popAt(stackId) {
    return this.shiftLeft(stackId, true);
  }

  shiftLeft(stackId, removeTop) {
    let stack = this.stacks[stackId],
        removedItem = 0;

    if (removeTop) {
      removedItem = stack.pop();
    } else {
      removedItem = stack.removeBottom();
    }

    if (stack.isEmpty) {
      this.stacks.pop();
    } else if (this.stacks.size() > stackId + 1) {
      let value = this.shiftLeft(stackId + 1, false);
      stack.push(v);
    }

    return removedItem;
  }
}

clas Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.values = [];
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.size === this.capacity) return false;

    this.values.push(value);
    this.size++;
  }
}

class QueueOfStacks {
  constructor() {
    this.stack1  = new Stack();
    this.stack2 = new Stack();
    this.size = 0;
  }

  enqueue(value) {
    this.stack1.push(value);

    this.size++;
  }

  dequeue() {
    if (!this.size) {
      throw new EmptyQueueError();
    }

    if (!this.stack2.isEmpty) {
      this.size--;
      return this.stack2.pop();
    } else {
      let stackSize = this.stack1.size();

      for (let i = 0; i < stackSize; i++)  {
        this.stack2.push(this.stack1.pop());
      }

      this.size--;
      return this.stack2.pop();
    }
  }
}
