// 数组去重

// 常用方式
function arrUnique(arr){
    const res = []
    arr.forEach(item => {
        if(res.indexOf(item) < 0){
            res.push(item)
        }
    })
    return res
}
const res = arrUnique([30, 10, 20, 30, 40, 10, 20])
console.log('res=>', res)

// 使用 Set (无序，不能重复)
function arrSetUnique(arr){
    try {
        const newSet = new Set(arr)
        return [...newSet]
    } catch (e) {
        console.log('arrSetUnique e=>', e)
        return []
    }
    
}
const res1 = arrSetUnique([30, 10, 20, 30, 40, 10, 20])
console.log('res=>', res1)