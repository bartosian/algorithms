from functools import lru_cache


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

    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        merged = []

        intervals.sort(key=lambda x: x[0])

        for i in intervals:
            if not merged or merged[-1][-1] < i[0]:
                merged.append(i)
            else:
                merged[-1][-1] = max(merged[-1][-1], i[-1])

        return merged


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

    def rob_memo(self, nums: List[int]) -> int:
        def dp(i):
            """Calculate result for given step"""

            if i == 0:
                return nums[0]
            if i == 1:
                return max(nums[0], nums[1])
            if i not in memo:
                memo[i] = max(dp(i - 1), dp(i - 2) + nums[i])

            return memo[i]

        memo = {}
        return dp(len(nums) - 1)

    def rob_tab(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        dp = [0] * len(nums)
        dp[0] = nums[0]
        dp[1] = nums[1]

        for i in range(2, len(nums)):
            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

        return dp[-1]

    def minCostClimbingStairs(self, cost: List[int]) -> int:
        def dp(i):
            if i <= 1:
                return 0

            if i not in memo:
                memo[i] = min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2])

            return memo[i]

        memo = {}
        return dp(len(cost))

    def tribonacci_memo(self, n: int) -> int:
        def dp(i):
            if i == 0:
                return 0
            if i <= 2:
                return 1
            if i not in memo:
                memo[i] = dp(i - 1) + dp(i - 2) + dp(i - 3)

            return memo[i]

        memo = {}
        return dp(n)

    def tribonacci_tab(self, n: int) -> int:
        if n == 0:
            return 0
        if n <= 2:
            return 1

        dp = [0, 1, 1] + [0] * (n - 2)

        for i in range(3, n + 1):
            dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]

        return dp[n]

    def binary_search(self, arr, left, right, el):
        if right >= left:
            mid = (left + right) // 2

            if arr[mid] == el:
                return mid
            elif arr[mid] > el:
                return self.binary_search(arr, left, mid - 1, el)
            else:
                return self.binary_search(arr, mid + 1, right, el)
        else:
            return -1

    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:
        @lru_cache(2000)
        def dp(i, left):
            if i == m:
                return 0

            right = n - 1 - (i - left)
            mult = multipliers[i]

            return max(
                mult * nums[left] + dp(i + 1, left + 1),
                mult * nums[right] + dp(i + 1, left),
            )

        n, m = len(nums), len(multipliers)
        return dp(0, 0)

    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        @lru_cache(100000)
        def dp(i, j):
            if i < 0 or j < 0:
                return 0

            if text1[i] == text2[j]:
                return 1 + dp(i - 1, j - 1)
            else:
                return max(dp(i - 1, j), dp(i, j - 1))

        n, m = len(text1), len(text2)
        return dp(n - 1, m - 1)

    def longestCommonSubsequence_tab(self, text1: str, text2: str) -> int:
        n, m = len(text1), len(text2)
        dp = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                if text1[i] == text2[j]:
                    dp[i][j] = 1 + dp[i + 1][j + 1]
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])
        return dp[0][0]

    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if not matrix or len(matrix) < 1:
            return 0

        rows, columns = len(matrix), len(matrix[0])

        dp = [[0] * (columns + 1) for _ in range(rows + 1)]

        max_side = 0

        for i in range(rows):
            for j in range(columns):
                if matrix[i][j] == "1":
                    dp[i + 1][j + 1] = 1 + min(dp[i][j], dp[i + 1][j], dp[i][j + 1])
                    max_side = max(max_side, dp[i + 1][j + 1])

        return max_side ** 2

    def bubble_sort(arr):
        if not arr or len(arr) == 0:
            return

        n = len(arr)

        for i in range(n):
            is_sorted = True

            for j in range(n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]

                    is_sorted = False

            if is_sorted:
                break

        return arr

    def insertion_sort(arr):
        n = len(arr)

        for i in range(1, n):
            item = arr[i]
            j = i - 1

            while j >= 0 and arr[j] > item:
                arr[j + 1] = arr[j]
                j -= 1

            arr[j + 1] = item

        return arr
