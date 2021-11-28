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
