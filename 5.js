
var height = [1,8,6,2,5,4,8,3,7]
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0
    while(left < right) {
        if (height[left] < height[right]) {
            max = Math.max(max, (right - left) * height[left])
            left++
        } else {
            max = Math.max(max, (right - left) * height[right])
            right--
        }
    }
    return max
};
maxArea(height)