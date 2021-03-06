function deepClone(obj = {}){
	if(typeof obj !== 'object' || obj == null){
        // obj是null, 或者不是对象和数组
        return obj 
    }

    // 初始化返回结果
    let result 
    if(obj instanceof Array){
        result = []
    } else {
        result = {}
    }

    for (const key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用！！！
            result[key] = deepClone(obj[key])
        }
    }

    return result
}