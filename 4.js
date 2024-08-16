// 输出: [1,3,12,0,0]
// var nums = [0,1,0,3,12]
var nums = [1,0,1]
// [0,1,0,3,12]

// [1,3,0,0,12]
var moveZeroes = function(nums) {
    // let zero = 0

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == 0) {
    //         zero = i
    //     } else {
    //         let tmp = nums[zero]
    //         nums[zero] = nums[i]
    //         nums[i] = tmp
    //         zero = i
    //     }

    // }
    // console.log(nums)
    let left = 0

    for (let right = 1; right < nums.length; right++) {
        if (nums[left] == 0 && nums[right] !== 0) {
            nums[left] = nums[right]
            nums[right] = 0
            left++
        }
        if (nums[left] !== 0) {
            left++
        }
    }

    console.log(nums)
};
moveZeroes(nums)
