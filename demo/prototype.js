function People() {
    var name = '小明'
    this.changeName = function (newName) {
        name = newName
    }
    this.sayHello = function () {
        console.log(name)
    }
}
People.age=16
let xiaoming=new People()
console.log(xiaoming.name)//undefined，name不是实例属性
xiaoming.changeName('dahong')
xiaoming.sayHello()//'dahong