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
