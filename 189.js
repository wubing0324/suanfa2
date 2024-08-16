var rotate = function(nums, k) {
    if (k > nums.length) k = k % nums.length
    let right = nums.splice(nums.length - k)
    console.log(right.concat(nums))
    return right.concat(nums)
};

var nums = [1,2,3,4,5,6,7], k = 3

rotate(nums, k)