class ArrayStack {
  constructor() {
    this.size = 0;
    this.stack = new Array();
  }

  push(item) {
    this.stack.push(item);
    this.size++;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if(this.size > 0) {
      let item = this.stack.pop();
      this.size--;

      return item;
    } else {
      return false;
    }
  }
}

class ResizingArrayStack {
  constructor() {
    this.size = 0;
    this.stack = new Array();
  }

  push(item) {
    if (this.size === this.stack.length) {
      this.resize(this.size * 2);
    }

    this.stack.push(item);
    this.size++;
  }

  resize(capacity) {
    let newArr = new Array(capacity);

    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.stack[i];
    }

    this.stack = newArr;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if(this.size > 0) {
      let item = this.stack.pop();
      this.size--;

      if (this.size === Math.floor(this.stack.length / 4)) this.resize(this.stack.length / 2);

      return item;
    } else {
      return false;
    }
  }
}

exports.ArrayStack = ArrayStack;
