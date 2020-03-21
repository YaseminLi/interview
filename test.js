logMessage(3000).then(() => {
    console.log('3秒后才打印');
})

function logMessage(time) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() },time)
    })
}