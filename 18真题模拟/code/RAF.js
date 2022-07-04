// 3s 把宽度从 100px 变为 640px，即增加 540px
// 60帧/s, 3s 180帧，每次变化 3px

const $div1 = $('#div1')
let curWidth = 100
const maxWidth = 640

// setTimeOut
// function animateTimeOut(){
//     curWidth += 3
//     $div1.css('width', curWidth)
//     if(curWidth < maxWidth){
//         setTimeout(animateTimeOut, 16.7) // 自己控制时间
//     }
// }
// animateTimeOut()

// RAF
function animateRaf(){
    curWidth += 3
    $div1.css('width', curWidth)
    if(curWidth < maxWidth){
        window.requestAnimationFrame(animateRaf)
    }
}
animateRaf()