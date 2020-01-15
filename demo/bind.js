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
    let self=this
    arguments=Array.prototype.slice.call(arguments)
    //arguments[0] :新函数的this
    //arguments[1]……:传入到新函数的参数
    const newThis=arguments[0]
    const args=arguments.slice(1)
    return function (newThis,args) {
        return self.apply(newThis,args)
    }
}
modle.getX() //1

let bondleGet=modle.getX.bindCopy(bondle)

// bondleGet() //2

//bind的实现


function f1() {
    let a1=1
    function f2() {
        let a2=10
        function f3() {
            let a3=100
            return a1+a2+a3 
        }
        return f3()
    }
   return f2()
}
console.log(f1())
