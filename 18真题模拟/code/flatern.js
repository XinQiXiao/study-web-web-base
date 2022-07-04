function flat(arr){
    // 验证 arr 中，还有没有深层数组 [1, 2, [3, 4]]
    const isDeep = arr.some(item => item instanceof Array)

    if(!isDeep){
        return arr 
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res)
}

const res = flat([1, 2, [3, 4], 5, [[6, 7], 8]])
console.log('res=>', res)