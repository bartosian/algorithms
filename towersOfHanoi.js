class HanoiTowers {
  constructor() {
    let diskCount = 3,
        towers = [];

    for (let i = 0; i < 3; i++) {
      towers.push(new Tower(i));
    }

    for (let j = diskCount - 1; j >= 0; j--) {
      towers[0].add(j);
    }

    towers[0].moveDisks(diskCount, towers[2], towers[1]);
  }
}

class Tower {
  constructor(index) {
    this._index = index;
    this.disks = [];
  }

  get index() {
    return this._index;
  }

  add(disk) {
    if (this.disks.length && this.disks[this.disks.length - 1].index < disk) {
      throw new Error("Error placing new disk!");
    } else {
      this.disks.push(disk);
    }
  }

  moveTopTo(tower) {
    let disk = this.disks.pop();
    tower.add(disk);
  }

  moveDisks(n, destination, buffer) {
    if (n > 0) {
      this.moveDisks(n - 1, buffer, destination);
      this.moveTopTo(destination);
      buffer.moveDisks(n - 1, destination, this);
    }
  }
}
