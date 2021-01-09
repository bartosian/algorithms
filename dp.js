// top-down
function fiboWithMemo(n, memo={}) {
  if (memo[n]) {
    return memo[n];
  }

  if (n <= 2) {
    memo[n] = 1;
    return 1;
  }

  let num = fiboWithMemo(n - 1, memo) + fiboWithMemo(n - 2, memo);
  fibo[n] = num;

  return num;
}

// bottom-up
function fiboWithMemoSec(n) {
  let memo = [];
  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

function solve(n, memo={}) {
  if (n < 1) return 0;
  if (n === 1) return 1;

  if (!memo[n]) {
    let result = solve(n - 3) + solve(n - 1) + solve(n - 5);
    memo[n] = result;
  }
  return memo[n];
}
