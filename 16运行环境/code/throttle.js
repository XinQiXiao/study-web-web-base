const div1  = document.getElementById('div1')

// let timer = null
// div1.addEventListener('drag', function(e){
//     if(timer){
//         return 
//     }
//     timer  = setTimeout(()=>{
//         console.log('x = ', e.offsetX, ' y = ', e.offsetY)
//         timer = null
//     }, 500) 
// })

// 节流 
console.log('333')
function throttle(fn, delay = 500){
    let timer  = null 
    return function(){
        if(timer){
            return 
        }
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

div1.addEventListener('drag', throttle(function(e){
    console.log('x = ', e.offsetX, ' y = ', e.offsetY)
}, 1000))