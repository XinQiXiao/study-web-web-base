const input1 = document.getElementById('input1')

// let timer = null
// console.log('111')
// input1.addEventListener('keyup', function(){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(()=>{
//         // 模拟触发 change事件
//         console.log('input1=>', input1.value)
//         // 清空定时器
//         timer = null
//     }, 1000)
    
// })

console.log('222')
function debounce(fn, delay = 500){
    // timer 是在闭包中的
    let timer = null 
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

input1.addEventListener('keyup', debounce(function(){
    console.log('input1=>', input1.value)
}), 1000)