// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。


var s = "cbaebabacd", p = "abc"
var s = "aaaaaaaaaaaaa", p = "aaaaaaaaaaaaaaaaaa"
function getres (s, p) {
    // let len = p.length
    // let queue = []
    // let target = p.split('').sort((a, b) => a > b ? 1:-1).join('')
    // let results = []
    // for (let i = 0; i <= s.length; i++) {
    //     if (queue.length < len) {
    //         queue.push(s[i])
    //         continue
    //     }
    //     let tmp = [...queue]
    //     tmp.sort((a, b) => a > b ? 1:-1)
    //     if (target === tmp.join('')) {
    //         results.push(i - len)
    //     }
    //     queue.shift()
    //     queue.push(s[i])
    // }
    // console.log(results)
    if(s.length < p.length) return []

    let scount = new Array(26).fill(0)
    let pcount = new Array(26).fill(0)

    for (let i = 0; i < p.length; i++) {
        ++pcount[p[i].charCodeAt() - 97]
        ++scount[s[i].charCodeAt() - 97]
    }
    let ans = []

    if (pcount.toString() === scount.toString()) {
        ans.push(0)
    }
    for (let i = 0; i < s.length - p.length; i++) {
        --scount[s[i].charCodeAt() - 97]
        ++scount[s[i + p.length].charCodeAt() - 97]
        if (pcount.toString() === scount.toString()) {
            ans.push(i + 1)
        }
    }
    return ans
}
getres(s, p)


