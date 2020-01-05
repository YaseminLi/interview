// let a=new Object()
// let b=Object.create(null)
let obj1={
    a:1,
    b:2
}
let obj2=new Object(obj1)
console.log(obj2===obj1) //true

let obj3=Object.create(obj1)
console.log(obj3===obj1) //false
console.log(obj3.__proto__===obj1) //true