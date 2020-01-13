## 如何用JS实现继承

class extends
```js
class People {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
   
    sayHello() {
      return '(' + this.name + ', ' + this.age + ')';
    }
  }
  class hairPeople extends People{
      constructor(x,y,hair){
          super(x,y)//调用父类的constructor(x,y)
          this.hair=hair
      }
      sayHair(){
        return '(' + this.name + ', ' + this.age + ', ' + this.hair+')';
      }
  }
 
  let xiaoming=new hairPeople('xiaoming',18,'long')
  console.log(xiaoming.sayHello())//(xiaoming, 18)
  console.log(xiaoming.sayHair())//(xiaoming, 18, long)
```

## 如何准确判断一个变量是不是数组

变量 instanceof Array 返回true(想象原型链图)

## 手写简易的jquery，考虑插件和扩展性
```js
class Jquery{
        constructor(selector){
            const result=document.querySelectorAll(selector)
            const length=result.length
            for(let i=0;i<length;i++){
                this[i]=result[i]
            }
            this.length=length
        }
        get(index){
            return this[index]
        }
        each(fn){
            for(let i=0;i<this.length;i++){
                const el=this[i]
                fn(el)
            }
        }
        on(type,fn){
           return this.each(el=>{
               el.addEventListener(type,fn,false)
           })
        }
    }
    const $p=new Jquery('p')
    $p.get(1)
```

- 插件:

```Jquery.prototype.dialog=function(){  }```

- 扩展性（造轮子）：
```js
class myJquery extends Jquery{
		constructor(selector){
			super(selector) //拥有Jquery原有的属性和方法
			……//添加扩展的属性
		}
}
```

## class的原型本质，怎么理解？

- 是ES5构造函数的语法糖，写成面对对象的方式，更便于理解
-  原型和原型链图
- 属性和方法的查找和执行