// var nums = [1,2,0]
// var nums = [3,4,-1,1]
var nums = [1]
var firstMissingPositive = function(nums) {
    let len = nums.length
    let max = -Infinity
    let min = Infinity
    const map = {}
    for (let i = 0; i < len; i++) {
        max = Math.max(nums[i], max)
        if (nums[i] >= 0) {
            min = Math.min(nums[i], min)
            map[nums[i]] = true
        }
    }
    // console.log(min, max, arr)

   if (min > 1) return 1

    for (let i = min; i <= max; i++) {
        if (!map[i]) {
            return i
        }
    }
    return min <= 1 ? Math.max(0, max) + 1 : min - 1
};
console.log(firstMissingPositive(nums))