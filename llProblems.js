class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  // ...

  printKthToLast(head, k) {
    if (head === null) {
      return 0;
    }

    let index = this.printKthToLast(head.next, k) + 1;

    if (k === index) {
      console.log(head.item);
    }

    return index;
  }

  nthToLast(head, k, i=0) {
    if (!head) {
      return null;
    }

    let node = this.nthToLast(head.next, k, i);
    i++;

    if (k === i) {
      return head;
    }

    return node;
  }

  nthToLast2(head, k) {
    let p1 = head,
        p2 = head;


    for (let i = 0; i < k; i++) {
      if (!p1) return null;

      p1 = p1.next;
    }

    while (p1) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p2.item;
  }

  deleteNode(node) {
    if (!node.next) {
      return;
    }

    node.item = node.next.item;
    node.next = node.next.next;
  }

  partition(head, k) {
    if (!head.next) return false;

    let beforeHead = beforeTail = afterHead = afterTail = null;

    while (head) {
      let next = head.next;
      head.next = null;

      if (head.item < k) {
        if (!beforeHead) {
          beforeHead = beforeTail = head;
        } else {
          beforeTail.next = head;
          beforeTail = head;
        }
      } else {
        if (!afterHead) {
          afterHead = afterTail = head;
        } else {
          afterTail.next = head;
          afterTail = head;
        }
      }

      head = next;
    }

    if (!beforeHead) {
      return afterHead;
    }

    beforeTail.next = afterHead;
    return afterHead;
  }

  partition2(node, k) {
    let head = tail = node;

    node = node.next;

    while (node) {
      let next = node.next;

      if (node.item < k) {
        node.next = head;
        head = node;
      } else {
        tail.next = node;
        tail = node;
      }

      node = next;
    }

    tails.next = null;

    return head;
  }
}

var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0),
      current = head,
      sum = 0;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum > 9 ? sum = 1 : sum = 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }

  return head.next;
};


var lengthOfLongestSubstring = function(s) {
    let strList = [],
        maxStr = 0;


    for (let i = 0; i < s.length; i++) {
      let char = s.charAt(i),
          indexOfChar = strList.indexOf(char);

      if (indexOfChar) {
        strList = strList.slice(indexOfChar);
      }

      strList.push(char);

      maxStr = Math.max(maxStr, strList.length);
    }

    return maxStr;
};

function isPalindrome(l1) {
  let fast = slow = l1;
  let stack = [];

  while (fast && fast.next) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    let el = stack.pop();

    if (slow.data !== el) return false;
    slow = slow.next;
  }

  return true;
}

class Result {
  constructor(node, result) {
    this.node = node;
    this.result = result;
  }
}

function lengthOfList(head) {
  let size = 0;

  while (head) {
    size++:
    head = head.next;
  }
}

function isPlalindromeRecurse(head, length) {
  if (!head || length === 0) {
    return new Result(head, true);
  } else if (length === 1) {
    return new Result(head.next, true);
  }

  let result = isPlalindromeRecurse(head.next, length - 2);

  if (!result.result || !result.node) {
    return result;
  }

  result.result = (head.data === result.node.data);
  result.node = result.node.next;

  return result;

}

class Result {
  constructor(node, result) {
    this.node = node;
    this.result = result;
  }
}


class LinkedListPalindrome {
  constructor(head) {
    this.head = head;
    this.length = this.getListLength(this.head);
    { result, node } = this.isPlalindromeRecurse(this.head, this.length);

    return result;
  }
  isPalindromeRecurse(head, length) {
    if (!length || !head) {
      return new Result(head, true);
    } else if (length === 1) {
      return new Result(head.next, true;);
    }

    let res = this.isPalindromeRecurse(head.next, length - 2);

    if (!res.result || !res.node) {
      return res;
    }

    if (res.node.data === head.data) {
      res.node = res.node.next;
      res.result = true;
    } else {
      res.result = false;
    }

    return res;
  }

  getListLength(head) {
    let node = head,
        size = 0;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }
}
