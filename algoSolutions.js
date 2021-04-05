class Solution {
  mergeKLists(lists) {
    let len = lists.length,
        interval = 1;

    while (interval < len) {
      for (let i = 0; i < (len - interval); i = interval * 2) {
        lists[i] = merge(lists[i], lists[i + inreval]);
      }

      interval *= 2;
    }

    return len > 0 && lists[0] || false;
  }

  trap(heights) {
    if (!heights.length) return 0;

    let size = heights.length,
        leftMax = new Array(size),
        rightMax = new Array(size),
        ans = 0;

    leftMax[0] = heaights[0];

    for (let i = 1; i < size; i++) {
      leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
    }

    rightMax[size - 1] = heights[size - 1];

    for (let i = size - 2; i >= 0; i--) {
      rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
    }

    for (let j = 0; j < size; j++) {
      ans += Math.min(leftMax[j], rightMax[j]) - heights[j];
    }

    return ans;
  }
}
