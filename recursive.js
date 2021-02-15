
// exponetional time
function countWays(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}

class WaysCounter {
  constructor(stairs) {
    this.stairs = stairs;
  }

  countWays() {
    let memo = new Array(this.stairs);

    this.countWaysHelper(this.stairs, memo);
  }

  countWaysHelper(n, memo) {
    if (n < 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = this.countWaysHelper(n - 1, memo) + this.countWaysHelper(n - 2, memo) + this.countWaysHelper(n - 3, memo);

      return memo[n];
    }
  }
}


class Path {
  constructor(maze) {
    this.maze = maze;

    if (!this.maze || !this.maze.length) return null;

    let path = [],
        failedPoints = new Set();

    if (this.getPath(this.maze.length - 1, this.maze[0].length - 1)) {
      return path;
    }

    return null;
  }

  getPath(row, col) {
    if (row < 0 || col < 0 || !this.maze[row][col]) {
      return false;
    }

    let point = new Point(row, col);

    if (this.failedPoints.has(point)) {
      return false;
    }

    let isOrigin = (row === 0) && (col === 0);

    if (isOrigin || this.getPath(row, col - 1) || this.getPath(row - 1, col)) {
      this.path.push(point);

      return true;
    }

    this.failedPoints.add(point);
    return false;
  }
}
