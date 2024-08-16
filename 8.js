// 给定一个字符串s，请你找出其中不含有重复字符的最长子串的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let left = 0
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            left = Math.max(left, map.get(s[i]) + 1)
        }
        map.set(s[i], i)
        max = Math.max(max, i - left + 1)
    }
    console.log(max)
    return max
};

lengthOfLongestSubstring("abcaefbb")

