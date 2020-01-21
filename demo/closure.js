//函数作为参数
function n(fn) {
    let a=200
    fn()
}
let a=100
function m() {
    console.log(a)
}
n(m) //100

//函数作为返回值
function x() {
    let b=99
    return function () {
        console.log(b)
    }
}
let b=400
let y=x()
y()//99

//闭包的实际应用
function cache() {
    let list={}
    return {
        get:function (key) {
            return list[key]
        },
        set:function (key,value) {
            list[key]=value
        }
    }
}
let cacheList=cache()
cacheList.set('xiaoming',98)
let result=cacheList.get('xiaoming')
console.log(result);//98
