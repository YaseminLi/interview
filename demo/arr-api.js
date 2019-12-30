//slice和splice
let arr=[1,2,3,4]
let arrSlice=arr.slice(1,2)
let arrSplice=arr.splice(1,2,'a','b')
console.log(arrSlice,arr)

//map parseInt
//parseInt(string,n) 第一个参数看作是一个数的n进制表示，而返回的值则是十进制的
let mapParseInt=[10,20,30].map(parseInt)
console.log(mapParseInt) //[10,NaN,NaN]
//拆解[10,20,30].map(parseInt)
[10,20,30].map((number,index)=>{
    return parseInt(number,index)
})
parseInt(10,0)===parseInt(10,10) //10
parseInt(20,1) //NaN 只能是2-36之间的进制
parseInt(30,2) //二进制中只有0，1