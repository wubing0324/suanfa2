var intervals = [[1,3],[2,6],[8,10],[15,18]]

function getres (intervals) {
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    console.log(intervals)
    let cur = intervals[0]
    let results = []
    for (let i = 1; i < intervals.length; i++) {
        let [s, e] = intervals[i]
        if (cur[0] == s) {
            continue
        }
        if (cur[1] >= s) {
            cur[1] = Math.max(cur[1], e)
        } else {
            results.push(cur)
            cur = intervals[i]
        }
    }
    results.push(cur)
    console.log(results)
}
getres(intervals)