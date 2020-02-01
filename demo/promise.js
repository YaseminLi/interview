//手写用promise加载一张图片
console.log('promise.js 加载成功')

function loadImg(url) {
    return new Promise((resolve, reject) => {
        let root = document.getElementById('root')
        let img = document.createElement('img')
        root.appendChild(img)
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            let error = '图片加载失败'
            reject(error)
        }
        img.src = url
    })
}
//加载一张图片
const url = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3586488134,3044212651&fm=26&gp=0.jpg'
loadImg(url).then((img)=>{
    console.log(`图片加载成功，宽度为${img.width}`)
}).catch(error=>{
    console.error(error)
})

//加载多张图片，串联方式解决回调地狱
const url1 = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3586488134,3044212651&fm=26&gp=0.jpg'
const url2 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580575087647&di=14e0ac81e7a4ca59b490bde6b4a245f1&imgtype=0&src=http%3A%2F%2Farticle.fd.zol-img.com.cn%2Ft_s500x2000%2Fg3%2FM09%2F03%2F06%2FCg-4V1RRiSmITeYhAAF8foQfZLEAAQq6AKQTiQAAXyW939.jpg'
loadImg(url1).then((img) => {
    console.log(`图片1加载成功`)
    return img //返回对象
}).then(img => {
    console.log(`宽度为${img.width}`);
    return loadImg(url2) //返回promise实例
}).then(img2=>{
    console.log(`图片2加载成功，宽度为${img2.width}`)
}).catch(error => {
    console.error(error)
})
