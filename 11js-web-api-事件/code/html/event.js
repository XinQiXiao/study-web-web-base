// 通用的事件绑定
function bindEvent(elem, type, fn){
    try {
        console.log('bindEvent elem=>', elem)
        console.log('bindEvent type=>', type)
        console.log('bindEvent fn=>', fn)
        elem.addEventListener(type, fn)
    } catch (e) {
        console.log('bindEvent e=>', e)
    }
    
}

const div1 = document.getElementById('div1')
console.log('div1 =>', div1)
bindEvent(div1, 'click', e => {

    alert('clicked')
})