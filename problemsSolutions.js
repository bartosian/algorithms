var twoSum = function(nums, target) {
    let len = nums.length,
        checked = [];

    for (let i = 0; i < len; i++) {
        let requiredNum = target - nums[i],
            checkedNumIndex = checked[requiredNum];

        if (checkedNumIndex !== undefined) {
            return [checkedNumIndex, i];
        } else {
            checked[nums[i]] = i;
        }
    }
};

var mergeTwoLists = function(l1, l2) {
    let newHead = new ListNode(-1),
        newTail = newHead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            newTail.next = l1;
            l1 = l1.next;
        } else {
            newTail.next = l2;
            l2 = l2.next;
        }
        newTail = newTail.next;
    }

    newTail.next = l1 ? l1 : l2;

    return newHead.next;
};

var trap = function(height) {
    if (!height.length) return 0;

    let left = leftMax = rightMax = ans = 0,
        right = height.length - 1;

    while (left < right) {
        if (height[left] > leftMax) leftMax = height[left];
        if (height[right] > rightMax) rightMax = height[right];

        if (leftMax < rightMax) {
            ans += leftMax - height[left];
            left++;
        } else {
            ans += rightMax - height[right];
            right--;
        }
    }

    return ans;
};

function DFS(node, level, results) {
    let levelResults;

    if (level >= results.length) {
        levelResults = [];
        levelResults.push(node.val);
        results.push(levelResults);
    } else {
        levelResults = results[level];

        if (level % 2 === 0) {
            levelResults.push(node.val);
        } else {
            levelResults.unshift(node.val);
        }
    }

    if (node.left) DFS(node.left, level + 1, results);
    if (node.right) DFS(node.right, level + 1, results);
}

var zigzagLevelOrder = function(root) {
    let results = new Array();

    if (root) {
        DFS(root, 0, results);
    }

    return results;
};

var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList),
      queue = [];

  queue.push(beginWord);
  let count = 1;

  while (queue.length) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      let currentWord = queue.shift().split("");

      for (let j = 0; j < currentWord.length; j++) {
        let tmpChar = currentWord[j];

        for (let char = 96; char < 123; char++) {
          let newChar = String.fromCharCode(char);
          currentWord[j] = newChar;
          let newWord = currentWord.join("");

          if (wordSet.has(newWord)) {
            if (newWord === endWord) {
              return ++count;
            }

            queue.push(newWord);
            wordSet.delete(newWord);
          }
        }

        currentWord[j] = tmpChar;
      }
    }

    count++;
  }

  return 0;
};

class LinkedNode {
  constructor(key=null, value=null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.head = new LinkedNode();
    this.tail = new LinkedNode();
    this.cache = {};

    head.next = this.tail;
    tails.prev = this.head;
  }

  addNode(node) {
    node.prev = head;
    node.next = head.next;

    head.next.prev = node;
    head.next = node;
  }

  removeNode(node) {
    let prev = node.prev,
        next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  popTail() {
    let res = this.tail.prev;
    this.removeNode(res);
    return res;
  }

  get(key) {
    let node = this.cache[key];

    if (!node) return -1;

    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
      let node = this.cache[key];

      if (!node) {
        let newNode = new LinkedNode(key, value);
        this.cache[key] = newNode;
        this.addNode(newNode);

        ++size;

        if (this.size > this.capacity) {
          let tail = this.popTail();
          delete this.cache[tail.key];
          --size;
        }
      } else {
        node.value = value;
        this.moveToHead(node);
      }
  }
}
