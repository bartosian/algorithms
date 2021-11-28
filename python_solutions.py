class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}

        for i, val in enumerate(nums):
            required_value = map.get(target - val)

            if required_value is not None:
                return [required_value, i]

            map[val] = i

    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        carry = 0
        dummy = current = ListNode(0)

        while l1 or l2 or carry:
            v1 = v2 = 0

            if l1:
                v1 = l1.val
                l1 = l1.next
            if l2:
                v2 = l2.val
                l2 = l2.next

            carry, val = divmod(v1 + v2 + carry, 10)

            current.next = ListNode(val)
            current = current.next

        return dummy.next

    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = {}
        left = 0
        output = 0

        for i, val in enumerate(s):
            if val not in seen or seen[val] < left:
                output = max(output, i - left + 1)
            else:
                left = seen[val] + 1

            seen[val] = i

        return output


class ListNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None
        self.prev = None


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.head = ListNode(0, 0)
        self.tail = ListNode(-1, -1)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.dict = dict()
        self.size = 0

    def get(self, key: int) -> int:
        node = self.dict.get(key)

        if node:
            self.removeFromList(node)
            self.insertIntoHead(node)

            return node.value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        node = self.dict.get(key)

        if node:
            self.removeFromList(node)
            self.insertIntoHead(node)
            node.value = value
        else:
            if self.size >= self.capacity:
                self.removeFromTail()

            node = ListNode(key, value)
            self.insertIntoHead(node)
            self.dict[key] = node
            self.size += 1

    def removeFromList(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def insertIntoHead(self, node):
        headNext = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = headNext
        headNext.prev = node

    def removeFromTail(self):
        if self.size == 0:
            return
        tail_node = self.tail.prev
        del self.dict[tail_node.key]
        self.removeFromList(tail_node)
        self.size -= 1
