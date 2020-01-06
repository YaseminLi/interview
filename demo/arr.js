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
//方法一：遍历
let arrFlatern = [1, 2, [3, 4, [5, 6]], 7]
let result = []
function flatern(arr) {
    arr.forEach(item => {
        if (typeof item === 'object') {
            flatern(item)
        } else {
            result.push(item)
        }
    });
    return result
}
console.log(flatern(arrFlatern))
//方法二：
console.log(arrFlatern.toString().split(','))

//数组去重
//[1,2,3,1,2,4]=>[1,2,3,4]
let repeatArr = [1, 2, 3, 1, 2, 4]
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
