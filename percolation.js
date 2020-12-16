import { WQUPC } from 'quickUnion';

class Percolation {
  static directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  constructor(n) {
    if (n <= 0) throw new RangeError("n must be > 0");

    this.size = n;
    this.ufMain = new WQUPC(n * n + 2);
    this.ufSupport = new WQUPC(n * n + 1);

    for (let i = 1; i <= n; i++) {
      this.ufMain.union(0, i);
      this.ufSupport.union(0, i);
    }

    for (let i = n * n; n > n * n - n; n--) {
      this.ufMain.union(n * n + 1, i);
    }

    this.grid = new Array(n * n).fill(0);
  }

  open(i, j) {
    if(!this.isValidCoordinate(i, j)) throw new RangeError("coordinate must be valid");

    if (this.isBlocked(i, j)) {
      this.grid[this.getIndex(i, j)] = 1;

      let tmpI = i,
          tmpJ = j;

      for (let dir of Percolation.directions) {
        i = dir[0] + tmpI;
        j = dir[1] + tmpJ;

        if (this.isValidCoordinate(i, j) && this.isOpen(i, j) === 1) {
          let siteA = this.getIndex(i, j) + 1,
              siteB = this.getIndex(tmpI, tmpJ) + 1;

          this.ufmain.union(siteA, siteB);
          this.ufSupport.union(siteA, siteB);
        }
      }
    }
  }

  isOpen(i, j) {
    if (!this.isValidCoordinate(i, j)) {
      return this.grid[this.getIndex(i, j)] === 1;
    }

    throw new RangeError("coordinate must be valid");
  }

  isFull(i, j) {
    if (!this.isValidCoordinate(i, j)) {
      if (!this.isOpen(i, j)) {
        let index = this.getIndex(i, j) + 1;

        if (index < this.size) {
          return true;
        }

        return this.ufSupport.connected(index, 0);
      }
    } else {
      throw new RangeError("coordinate must be valid");
    }

    return false;
  }

  percolates() {
    let virtualTop = 0,
        virtualBottom = n * n + 1;

    if (virtualBottom === 2) {
      return this.isOpen(1, 1);
    }

    if (virtualBottom === 0) {
      return false;
    }

    return ufMain.connected(virtualTop, virtualBottom);
  }

  isBlocked(i, j) {
    if (this.isValidCoordinate(i, j)) {
      return this.grid(this.getIndex(i, j)) === 0;
    } else {
      throw new RangeError("coordinate must be valid");
    }
  }

  getIndex(i, j) {
    return (i - 1) * n + (j - 1);
  }

  isValidCoordinate(i, j) {
    if (i > 0 && i <= this.size && j > 0 && j <= this.size) {
      return true;
    } else {
      return false;
    }
  }
}
