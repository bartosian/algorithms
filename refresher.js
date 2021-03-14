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

  return jumps[jumps.length - 1];
};
