// var nums = [1,2,0]
// var nums = [3,4,-1,1]
var nums = [1]
var firstMissingPositive = function(nums) {
    let len = nums.length
    let max = -Infinity
    let min = Infinity
    let arr = []
    for (let i = 0; i < len; i++) {
        max = Math.max(nums[i], max)
        if (nums[i] >= 0) {
            min = Math.min(nums[i], min)
            arr.push(nums[i])
        }
    }
    // console.log(min, max, arr)

    const counts = new Array(max + 1).fill(0)

    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++
    }
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] == 0) return i
    }
    return min <= 1 ? Math.max(0, max) + 1 : min - 1
};
console.log(firstMissingPositive(nums))