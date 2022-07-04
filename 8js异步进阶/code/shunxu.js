async function async1(){
    console.log('async1 start') // 2
    await async2()

    // await 后面的都作为回调内容 -- 微任务
    console.log('async1 end') // 6
}
async function async2(){
    console.log('async2') // 3
}
console.log('script start') // 1

setTimeout(function(){
    console.log('setTimeout') // 8
}, 0)

async1()

// 初始化 promise 时，传入的函数会立即被执行
new Promise(function(resolve){
    console.log('promise1') // 4
    resolve()
}).then(function(){
    console.log('promise2') // 7
})

console.log('script end') // 5

// 同步代码执行完毕 （event loop - call stack 被清空）
// 执行微任务
// 尝试出发 DOM 渲然
// 触发event loop， 执行宏任务