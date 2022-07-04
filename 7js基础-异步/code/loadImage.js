const imgUrl = 'https://th.bing.com/th/id/Rc100979ecf6831d73c4888bc51b51300?rik=sUOrZQhT%2f01PLw&riu=http%3a%2f%2fhenan.china.com.cn%2fpic%2f2021-05%2f15%2f47062444-d643-4be1-a4b6-6e4fd75baf06.jpg&ehk=cSDKLmgFsIz3kvxn%2bk5q8G2zWQH42gs8x3T0zAJA%2bF4%3d&risl=&pid=ImgRaw'

function loadImg(src){
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img')
        img.onload = ()=>{
            resolve(img)
        }
        img.onerror = ()=>{
            reject(new Error(`图片加载失败 ${src}`))
        }
        img.src = src
    })
}

loadImg(imgUrl).then(img =>{
    console.log(img.width)
    return img
}).catch(e=>{
    console.error(e)
})