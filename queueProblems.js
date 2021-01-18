class Animal {
  constructor(name, order) {
    this.name = name;
    this._order = order;
  }

  get order() {
    return this._order;
  }

  set order(order) {
    this._order = order;
  }

  isOlderThan(animal) {
    return this.order < animal.order;
  }
}

class AnimalQueue {
  constructor() {
    this.cats = new Stack();
    this.dogs = new Stack();
    this.order = 0;
  }

  enqueue(animal) {
    animal.setOrder(this.order++);

    if (animal instanceof Cat) {
      this.cats.push(animal);
    } else if (animal instanceof Dog) {
      this.dogs.push(animal);
    }
  }

  dequeueAny() {
    if (!this.cats.size()) {
      return this.dequeueDogs();
    } else if (!this.dogs.size()) {
      return this.dequeueCats();
    }

    let cat = this.cats.peek(),
        dog = this.dogs.peek();

    if (cat.isOlderThan(dog)) {
      return this.cats.pop();
    } else {
      return this.dogs.pop();
    }
  }

  dequeueCats() {
    return this.cats.pop();
  }

  dequeueDogs() {
    return this.dogs.pop();
  }
}

class Cat extends Animal {
  constructor(name) {
    super(this, name);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(this, name);
  }
}
