from functools import lru_cache
from random import randint


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

    def bubble_sort(self, arr):
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

    def insertion_sort(self, arr):
        n = len(arr)

        for i in range(1, n):
            item = arr[i]
            j = i - 1

            while j >= 0 and arr[j] > item:
                arr[j + 1] = arr[j]
                j -= 1

            arr[j + 1] = item

        return arr

    def merge(self, arrA, arrB):
        if len(arrA) == 0:
            return arrB

        if len(arrB) == 0:
            return arrA

        result = []
        indexA = indexB = 0

        while len(result) < len(arrA) + len(arrB):
            if arrA[indexA] <= arrB[indexB]:
                result.append(arrA[indexA])
                indexA += 1

            else:
                result.append(arrB[indexB])
                indexB += 1

            if indexA == len(arrA):
                result += arrB[indexB:]
                break

            if indexB == len(arrB):
                result += arrA[indexA:]
                break

        return result

    def mergesort(self, arr):
        if len(arr) < 2:
            return arr

        mid = len(arr) // 2

        return merge(self.mergesort(arr[:mid]), self.mergesort(arr[mid:]))

    def quicksort(self, arr):
        if len(arr) < 2:
            return arr

        pivot = arr[randint(0, len(arr) - 1)]

        low, same, high = [], [], []

        for item in arr:
            if item < arr[pivot]:
                low.append(item)
            elif item > arr[pivot]:
                high.append(item)
            else:
                same.append(item)

        return self.quicksort(low) + same + self.quicksort(high)

    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        count = 0

        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == "1":
                    self.dfs(grid, row, col)

                    count += 1

        return count

    def dfs(self, grid, row, col):
        grid[row][col] = 0

        for dr, dc in (0, 1), (1, 0), (-1, 0), (0, -1):
            i = row + dr
            j = col + dc

            if 0 <= i < len(grid) and 0 <= j < len(grid[0]) and grid[i][j] == "1":
                self.dfs(grid, i, j)

    def reverse(self, x: int) -> int:
        rev = int(str(abs(rev))[::-1])

        return (-rev ix x < 0 else rev) if rev.bit_length() < 32 else 0

    def isValid(self, s: str) -> bool:     
        pars_map = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
        
        s_result = []
        
        for ch in s:
            if ch in pars_map:
                s_result.append(ch)
            elif len(s_result) == 0 or pars_map[s_result.pop()] != ch:
                return False
            
        return len(s_result) == 0        

    def maxProfit(self, prices: List[int]) -> int:
        max_profit, min_price = 0, float('inf')
        
        for price in prices:
            min_price = min(min_price, price)
            profit = price - min_price
            max_profit = max(max_profit, profit)
            
        return max_profit        

    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if len(intervals) == 1: 
            return 1
        
        starts = sorted(intervals, key= lambda i: i[0])
        ends = sorted(intervals, key= lambda i: i[1])
        end_i = 0
        count = 0
        
        
        for i in range(len(starts)):
            if starts[i][0] >= ends[end_i][1]:
                end_i += 1
            else:
                count += 1
                
        return count

    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0] * n
        dp[0] = nums[0]

        for i in range(1, n):
            dp[i] = max(dp[i - 1] + nums[i], nums[i])

        return max(dp)

    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not len(strs): return ""
        
        if len(strs) == 1:
            return strs[0]
        
        index = 0
        
        for i, chars in enumerate(zip(*strs)):
            if len(set(chars)) == 1: index += 1
            else: break
                
                
        return strs[0][:index]
        
    def longestPalindrome(self, s: str) -> str:
        p = ""
        
        for i in range(len(s)):
            p1 = self.get_palindrome(s, i, i)
            p2 = self.get_palindrome(s, i, i + 1)
            
            p = max([p, p1, p2], key=lambda x: len(x))
            
        return p
            
    def get_palindrome(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
            
        return s[l + 1:r]                


    def generateParenthesis(self, n: int) -> List[str]:
        def parens(left, right, cur, res):
            if left == 0 and right == 0:
                res.append(cur)
                return
            
            
            if left > 0:
                parens(left - 1, right, cur + "(", res)
                
            if right > left:
                parens(left, right - 1, cur + ")", res)
                
            return res    
        
        res = parens(n, n, "", [])
        
        return res        

    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]


    def partition(self, arr, l, r):
        pivot = arr[r]
        i = l

        for j in range(l, r):
            if arr[j] <= pivot:
                arr[j], arr[i] = arr[i], arr[j]
                i += 1

        arr[i], arr[r] = arr[r], arr[i]
        return i

    def kthSmallest(arr, l, r, k):
        if (k > 0 and k <= r - l + 1):
            index = self.partition(arr, l, r)

            if (index - l == k - 1):
                return arr[index]


            if (index - l > k - 1):
                return kthsmallest(arr, l, index - 1, k)

            return kthsmallest(arr, index + 1, r, k - index + l - 1)


    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defdict(list)
        
        for s in strs:
            ans[tuple(sorted(s))].append(s)
            
        
        return ans.values()

    def firstUniqChar(self, s: str) -> int:
        if len(s) == 1: return 0
        
        count = defaultdict(list)
        
        for i, ch in enumerate(s):
            count[ch].append(i)   
            
        for val in count.values():
            if len(val) == 1: return val[0]
            
        return -1

    def isPalindrome(self, s: str) -> bool:
        prep_s = re.sub(r'[\W_]+', "", s).lower()
        
        n = len(prep_s)
        mid = n // 2
        
        if n % 2 == 0:   
            return prep_s[:mid] == prep_s[mid:][::-1]
        else:
            return prep_s[:mid] == prep_s[mid + 1:][::-1]                


    def searchRange(self, nums: List[int], target: int) -> List[int]:
        result = [-1, -1]
        
        self.findStartingIndex(nums, 0, len(nums) - 1, target, result)
        self.findEndingIndex(nums, 0, len(nums) - 1, target, result)
        
        return result
        
    def findStartingIndex(self, nums, left, right, target, result):        
        if right >= left:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                result[0] = mid
                
                self.findStartingIndex(nums, left, mid - 1, target, result)
            
            elif nums[mid] > target:
                self.findStartingIndex(nums, left, mid - 1, target, result)
            else:
                self.findStartingIndex(nums, mid + 1, right, target, result)
                
                
    def findEndingIndex(self, nums, left, right, target, result):
        print(result)
        if right >= left:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                result[1] = mid
                
                self.findEndingIndex(nums, mid + 1, right, target, result)
            
            elif nums[mid] > target:
                self.findEndingIndex(nums, left, mid - 1, target, result)
            else:
                self.findEndingIndex(nums, mid + 1, right, target, result)            


    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        todo = {i: set() for i in range(numCourses)}
        graph = defaultdict(set)
        
        for i, j in prerequisites:
            todo[i].add(j)
            graph[j].add(i)
            
        q = deque([])
        
        for k, v in todo.items():
            if len(v) == 0:
                q.append(k)
                
        while q:
            n = q.popleft()
            
            for i in graph[n]:
                todo[i].remove(n)
                
                if len(todo[i]) == 0:
                    q.append(i)
            
            todo.pop(n)
        return not todo

    def mergeArray(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        p1 = m - 1
        p2 = n - 1
        p = m + n - 1
        
        for i in range(p, -1, -1):
            if p2 < 0: break
                
            if p1 >= 0 and nums1[p1] > nums2[p2]:
                nums1[i] = nums1[p1]
                p1 -= 1
            else:
                nums1[i] = nums2[p2]
                p2 -= 1        