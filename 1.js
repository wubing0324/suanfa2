var nums = [2,7,11,15], target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    let results = []
    for (let i = 0; i < nums.length; i++) {
        let j = map[target - nums[i]]
        if (i < j && j) {
            results.push([i, j])
        }
    }
    console.log(results)
};
twoSum(nums, target)