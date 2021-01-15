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
