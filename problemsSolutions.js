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
