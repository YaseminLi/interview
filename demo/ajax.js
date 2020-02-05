//get请求
const xhr = new XMLHttpRequest()
xhr.open('GET', './data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
}
xhr.send(null)

//post请求
const xhr = new XMLHttpRequest()
xhr.open('POST', './login', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
}
const postData = {
    username: 'xiaoming'
}
xhr.send(JSON.stringify(postData))

//用promise
function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                }else if(xhr.status===404){
                    const err=new Error('404 not found')
                    reject(err)
                }
            }
        }
        xhr.send(null)
    })
    return p
}

ajax(url)
.then(res=>{console.log(res);})
.catch(err=>{console.error(err);})