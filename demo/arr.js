//slice和splice
let arr = [1, 2, 3, 4]
let arrSlice = arr.slice(1, 2)
let arrSplice = arr.splice(1, 2, 'a', 'b')
// console.log(arrSlice,arr)

//map parseInt
//parseInt(string,n) 第一个参数看作是一个数的n进制表示，而返回的值则是十进制的
// let mapParseInt=[10,20,30].map(parseInt)
// console.log(mapParseInt) //[10,NaN,NaN]
// 拆解[10,20,30].map(parseInt)
// [10,20,30].map((number,index)=>{
//     return parseInt(number,index)
// })
// parseInt(10,0)===parseInt(10,10) //10
// parseInt(20,1) //NaN 只能是2-36之间的进制
// parseInt(30,2) //二进制中只有0，1

//数组flatern
//[1,2,[3,4,[5,6]],7]=>[1,2,3,4,5,6,7]
//方法一：遍历+递归
let arrFlatern = [1, 2, [3, 4, [5, 6]], 7]
let result = []
function flatern1(arr) {
    arr.forEach(item => {
        if (typeof item === 'object') {
            flatern1(item)
        } else {
            result.push(item)
        }
    });
    return result
}
console.log(flatern1(arrFlatern))

//方法二：用concat
//concat方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。
//所以concat只能拍平一层的数组
let arr1=[1,2]
let arr2=[1,[3,4]]
let arr3=arr1.concat(arr2) //[ 1, 2, 1, [ 3, 4 ] ]
let arr5=Array.prototype.concat.apply(arr1,arr2)//[ 1, 2, 1, 3, 4 ]
let arr4=arr1.concat(1,[3,4])//[ 1, 2, 1, 3, 4 ]

let arrFlatern2 = [1, 2, [3, 4, [5, 6]], 7]
function flatern2(arr) {
    //判断是否还有深层数组
    let isDeep=arr.some(item=>item instanceof Array)
    if(!isDeep){
        return arr
    }
    let res=Array.prototype.concat.apply([],arr)
    return flatern2(res)
}
console.log("数组拍平 concat---------")
console.log(flatern2(arrFlatern2))

console.log("数组去重------------")
//数组去重
//[1,2,3,1,2,4]=>[1,2,3,4]
let repeatArr = [1, 2, 3, 1, 2, 4]
//方法一：数组API,两层循环
function repeat(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr.findIndex(item => item === arr[i])
        if (index > -1 && index < i){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

console.log(repeat(repeatArr))


//方法二：set数据结构
//Set构造函数无序，不能重复
//[Set教程](http://es6.ruanyifeng.com/#docs/set-map)
let set=new Set(repeatArr)
console.log([...set])//[ 1, 2, 3, 4 ]
