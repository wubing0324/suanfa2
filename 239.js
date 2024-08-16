var maxSlidingWindow = function(nums, k) {
    let results = []
    let queue = []
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (queue.length < k) {
            queue.push(nums[i])
            max = Math.max(max, nums[i])
            if (queue.length === k) {
                results.push(max)
            }
            continue
        }
        // results.push(Math.max(...queue))
        let remove = queue.shift()
        queue.push(nums[i])
        max = Math.max(max, nums[i])
        if (remove === max) {
            max = Math.max(...queue)
        }
        results.push(max)
    }
    console.log(results)
};

var nums = [1,3,-1,-3,5,3,6,7], k = 3
maxSlidingWindow(nums, k)