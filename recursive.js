
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

    let path = [];

    if (this.getPath(this.maze.length - 1, this.maze[0].length - 1, path)) {
      return path;
    }

    return null;
  }

  getPath(row, col, path) {
    if (row < 0 || col < 0 || !this.maze[row][col]) {
      return false;
    }

    let isOrigin = (row === 0) && (col === 0);

    if (isOrigin || this.getPath(row, col - 1, path) || this.getPath(row - 1, col, path)) {
      let point = new Point(row, col);
      path.push(point);

      return true;
    }

    return false;
  }
}
