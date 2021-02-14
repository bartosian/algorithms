
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
