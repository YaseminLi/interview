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