class LongestPalInString {
  getLongestSubstr(str) {
    let strLen = str.length,
       resultIdx = [0, 0];

    for (let i = 0; i < strLen; i++) {
      let palLenA = this.exapndAroundCenter(str, i, i),
          palLenB = this.exapndAroundCenter(str, i, i + 1),
          maxPalLen = Math.max(palLenA, palLenB);

      if (maxPalLen > resultIdx[1] - resultIdx[0]) {
        resultIdx[0] = i - Math.floor((maxPalLen - 1) / 2);
        resultIdx[1] = i + Math.floor(maxPalLen / 2);
      }
    }

    return str.substring(resultIdx[0], resultIdx[1] + 1);
  }

  exapndAroundCenter(str, left, right) {
    let L = left,
        R = right;

    while (L >= 0 && R < str.length && str[L] === str[R]) {
      L--;
      R++;
    }

    return R - L - 1;
  }
}

var jump = function(nums) {
  let jumps = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);

  jumps[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i && jumps[j] + 1 < jumps[i]) {
        jumps[i] = jumps[j] + 1;
      }
    }
  }

  return jumps[jumps.length - 1] !== Number.MAX_SAFE_INTEGER;
};

var climbStairsA = function(i, n, memo={}) {
  if (i > n) return 0;
  if (i === n) return 1;

  if (memo[i] > 0) {
    return memo[i];
  }

  memo[i] = climbStairs(i + 1, n, memo) + climbStairs(i + 2, n, memo);
  return memo[i];
};

var climbStairsE = function(n) {
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let j = 3; j <= n; j++) {
    dp[j] = dp[j - 1] + dp[j - 2];
  }

  return dp[n];
};

var climbStairs = function(n) {
  let first = 1,
      second = 2;

  if (n === 1) return first;

  for (let j = 3; j <= n; j++) {
    let prev = second;
    second = first + second;
    first = prev;
  }

  return second;
};


function wordBreak(s, wordDict) {
  let wordSet = new Set(wordDict),
      results = [];

  return getWords(s, wordSet, results);
}

function getWords(str, dict, results) {
  let result = [];

  if (dict.has(str)) result.push(str);

  for (let i = 0; i < str.length; i++) {
    let curSub = str.substr(0, i);

    if (dict.has(curSub)) {
      let remResults = getWords(str.substr(i + 1), dict, results),
          mergedResults = remResults.map(result => curSub + " " + result);

      results = [...results, ...mergedResults];
    }
  }

  return
}

var productExceptSelf = function(nums) {
    let length = nums.length,
        result = new Array(length);

    result[0] = 1;

    for (let i = 1; i < length; i++) {
      result[i] = nums[i - 1] * result[i - 1];
    }

    let right = 1;

    for (let j = length - 1; j >= 0; j--) {
      result[j] = right * result[j];
      right *= nums[j];
    }

    return result;
}
