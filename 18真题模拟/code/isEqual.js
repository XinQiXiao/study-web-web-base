const obj1 = {
    a: 100,
    b: {
        x: 1,
        y: 2
    }
}

const obj2 = {
    a: 100,
    b: {
        x: 1,
        y: 2
    }
}

// 判断是否是对象
function isObject(obj){
    // console.log('obj=>', obj)
    return typeof obj === 'object' && obj !== null
}

// 对象全相等
function isEqual(obj1, obj2){
    // console.log('obj1=>', obj1)
    // console.log('obj2=>', obj2)
    if(!isObject(obj1) || !isObject(obj2)){
        // 值类型 （注意，参与isEqual的一般不是函数）
        return obj1 === obj2
    }
    if(obj1 === obj2){
        return true
    }
    // 两个都是对象或数组，而且不相等
    // 1. 先取出obj1 和obj2 的keys，比较个数
    const keysOne = Object.keys(obj1)
    const keysTwo = Object.keys(obj2)
    if(keysOne.length != keysTwo.length){
        return false
    }
    //  2.以obj1 为基准，和obj2一次递归比较
    for (const key in obj1) {
        // 比较当前 key的val --- 递归
        const res = isEqual(obj1[key], obj2[key])
        if(!res){
            return false
        }
    }
    //  3.全相等
    return true
}

