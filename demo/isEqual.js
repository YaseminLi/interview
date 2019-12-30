//深度比较是否相等，值类型&&数组&&对象一般不考虑function
function isEqual(a, b) {
    //判断是否为数组或对象
    function isObject(n) {
        return typeof n === 'object' && typeof n !== null
    }
    //值类型
    if (!isObject(a) && !isObject(b)) {
        return a === b
    }

    //引用类型
    //1.数组长度或者对象属性个数是否相等
    let keysA = Object.keys(a) //返回键名组成的数组
    let keysB = Object.keys(b)
    if (keysA.length !== keysB.length) {
        return false
    }
    //2.以a为基准，比较每一项，递归
    for (let key in a) {
        if (!isEqual(a[key], b[key])) {
            return false
        }
    }
    //3.全相等
    return true
}
console.log(isEqual('1', 1))
console.log(isEqual(1, 1))
console.log(isEqual([1, 2], [1, 2, 3]))
console.log(isEqual({ a: 1, b: { c: 100 } }, { a: 1, b: { c: 100 } }))


