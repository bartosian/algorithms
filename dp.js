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
