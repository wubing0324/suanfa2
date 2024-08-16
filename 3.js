// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// var str = [100,4,200,1,3,2, 5]
// var str = [0,3,7,2,5,8,4,6,0,1]
var str = [1,2,0,1]

function getres (nums) {
    nums.sort((a, b) => a - b)
    nums = [...new Set(nums)]
    let left = 0
    let right = 1
    let maxLen = 0
    while(right < nums.length) {
        if (nums[right] - nums[right - 1] !== 1) {
            left = right
        }
        right++
        maxLen = Math.max(maxLen, right - left)
    }
    console.log(maxLen)
}
getres(str)