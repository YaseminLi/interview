//Object.assign(target,source)
//将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
let obj = {
    a: 0,
    b: 1,
    c: {
        m: 2,
        n: 3
    }
}
let obj1 = Object.assign({}, obj)//{ a: 0, b: 1, c: { m: 2, n: 3 } }复制了obj
obj.a = 1000
obj.c.m = 2000
console.log(obj1.a);//0
console.log(obj1.c.m);//2000 
//Object.assign只能拷贝第一层，第二层存储的还是引用类型的地址

let obj2 = {
    a: 0,
    b: 1,
    c: {
        m: 2,
        n: 3
    }
}
//简化版，只考虑数组和对象
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) {
        //obj是null或者不是对象、数组，直接返回
        return obj
    }

    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        result[key] = deepClone(obj[key])
    }
    return result
}
let obj3 = deepClone(obj2)
console.log(obj3) //{ a: 0, b: 1, c: { m: 2, n: 3 } }
obj2.a = 1000
obj2.c.m = 2000
console.log(obj3) //{ a: 0, b: 1, c: { m: 2, n: 3 } } obj2变化时没有变动
console.log(obj2) //{ a: 1000, b: 1, c: { m: 2000, n: 3 } }


//复杂版，包括数组、对象、正则表达式、date
function deepclone(oldObj) {
    //返回boolean，是否为期望的类型
    const isType = function (oldObj, type) {
  
      if (typeof oldObj !== 'object') {
        return false
      }
      let flag
      let typeString = Object.prototype.toString.call(oldObj)
      switch (type) {
        case 'Array':
          flag = typeString === '[object Array]';
          break;
        case 'Date':
          flag = typeString === '[object Date]';
          break;
        case 'RegExp':
          flag = typeString === '[object RegExp]';
          break;
        default:
          flag = false
      }
      return flag
    }
    //返回提取到的修饰符
    const getRegFlags = function (oldObj) {
      let flags = ''
      //如果有相应的修饰符，返回true
      if (oldObj.global) {
        flags += 'g'
      }
      if (oldObj.multiline) {
        flags += 'm'
      }
      if (oldObj.ignoreCase) {
        flags += 'i'
      }
      return flags
    }
    const _clone = function (obj) {
      //基础类型，直接返回传入的参数
      if (typeof obj !== 'object') {
        return obj
      }
      //以下是引用类型
      let newObj;//克隆来的新对象
      //为正则对象时
      if (isType(obj, 'RegExp')) {
        newObj = new RegExp(obj.source, getRegFlags(obj))
      } else if (isType(obj, 'Array')) {
        //为数组时
        newObj = []
      } else if (isType(obj, 'Date')) {
        //为Date时
        newObj = new Date(obj.getTime())
      } else {
        // 处理对象原型
        //获取原型对象
        proto = Object.getPrototypeOf(obj);
        // 利用Object.create切断原型链，方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
        newObj = Object.create(proto);
      }
      for (let key in obj) {
        newObj[key] = _clone(obj[key])
      }
      return newObj
    }
    return _clone(oldObj)
  }