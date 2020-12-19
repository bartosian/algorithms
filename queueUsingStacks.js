const collections = require('./arrayStack');

class QueueFromStacks {
  constructor() {
    this.stackA = new collections.ArrayStack();
    this.stackB = new collections.ArrayStack();
    this.n = 0;
  }

  enqueue(item) {
    this.stackA.push(item);
    this.n++;
  }

  dequeue() {
    if (!this.n) {
      return false;
    }

    if (!this.stackB.size) {
      for (let i = 0; i < this.n; i++) {
        this.stackB.push(this.stackA.pop());
      }
    }

    let element = this.stackB.pop();
    this.n--;

    return element;
  }

  isEmpty() {
    return this.n === 0;
  }
}
