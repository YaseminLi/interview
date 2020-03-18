//debounce
function debounce(delay, fn) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay)

    }
}

//throttle
function throttle(delay, fn) {
    let pre = 0
    return function () {
        let now = Date.now()
        if((now-pre)>delay){
            fn()
            pre=now
        }
    }
}