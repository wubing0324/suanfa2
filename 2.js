var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//  [["bat"],["nat","tan"],["ate","eat","tea"]]

function getres (strs) {
    let map = {}
    strs.forEach(s => {
        let sort = s.split('').sort().join('')
        map[sort] ? map[sort].push(s) : map[sort] = [s]
    })
    return Object.values(map)
}
getres(strs)