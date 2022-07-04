// 闭包隐藏数据 只提供API
function createCache(){
    const data = {} // 闭包中的数据 被隐藏 不被外界访问
    return {
        set: function(key, value){
            data[key] = value
        },
        get: function(key){
            return data[key]
        },
    }
}

let c = createCache()
c.set('a', 100)
c.get('a')