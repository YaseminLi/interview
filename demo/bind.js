//bind 
//创建并返回一个新的函数，新函数的this为传入的第一个参数，其余参数将作为新函数的参数

//如下面的使用例子
const modle = {
    x: 1,
    getX: function () {
        console.log(this.x)
    }
}
const bondle={
    x:2
}


Function.prototype.bindCopy=function () {
    
    //将参数解析为数组
    arguments=Array.prototype.slice.call(arguments)
    //获取this
    const newThis=arguments.shift()
    //当前函数
    const self=this
    return function () {
        return self.apply(newThis,arguments)
    }
}
modle.getX() //1

let bondleGet=modle.getX.bindCopy(bondle)

bondleGet() //2

//bind的实现


