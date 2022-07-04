function ajax(method, url, body){
    const p = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.onreadystatechange = function(){
            console.log('XMLHttpRequest readyState=>', xhr.readyState)
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    return resolve(JSON.parse(xhr.responseText))
                } else {
                    return reject(new Error('Error Network'))
                }
            }
        }
        if(method == 'GET'){
            xhr.send(null)
        } else {
            xhr.send(JSON.stringify(body))
        }
        
    })

    return p
}

const url = '/data/data.json'

ajax('GET', url, null).then((res)=>{
    console.log('ajax res=>', res)
}).catch(e=>{
    console.log('ajax e=>', e)
})