
var arr = [4,5,1,8,2]
function getres (nums) {
    let length = nums.length
    const L = new Array(length);
    const R = new Array(length);
    const answer = new Array(length);
    L[0] = 1

    for (let i = 1; i < length; i++) {
        L[i] = nums[i - 1] * L[i -  1]
    }

    R[length - 1] = 1;

    
    for (let i = length - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i +  1]
    }
    
     // 对于索引 i，除 nums[i] 之外其余各元素的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积
     for (let i = 0; i < length; i++) {
        answer[i] = L[i] * R[i];
    }
    return answer

}
getres(arr)
