function muti(num){
    return new Promise(resolve =>{
        setTimeout(()=>{
            return resolve(num * num)
        }, 1000)
    })
}

const nums = [1, 2, 3]

nums.forEach(async (i)=>{
    const res =  await muti(i)
    console.log('res=>', res)
})

!(async ()=>{
    for (const i of nums) {
        const res = await muti(i)
        console.log(res)
    }
})()
