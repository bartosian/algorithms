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
}
