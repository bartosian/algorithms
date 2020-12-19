class ArrayStackWithMax {
  constructor() {
    this.size = 0;
    this.stack = new Array();
    this.trackStack = new Array();
  }

  push(item) {
    this.stack.push(item);
    this.size++;

    if (this.size === 1) {
      this.trackStack.push(item);
    } else {
      if (item > this.trackStack[this.trackStack.length - 1]) {
        this.trackStack.push(item);
      } else {
        this.trackStack.push(this.trackStack[this.trackStack.length - 1]);
      }
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  getMax() {
    return this.trackStack[this.trackStack.length - 1];
  }

  pop() {
    if(this.size > 0) {
      let item = this.stack.pop();
      this.size--;
      this.trackStack.pop();

      return item;
    } else {
      return false;
    }
  }
}
