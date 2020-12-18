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
