var twoSum = function(nums, target) {
    let len = nums.length,
        checked = [];

    for (let i = 0; i < len; i++) {
        let requiredNum = target - nums[i];

        if (checked[requiredNum]) {
            return [checked[requiredNum], i];
        } else {
            checked[nums[i]] = i;
        }
    }    
};