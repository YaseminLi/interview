let a = '  abcd e  '
// console.log(a.trim())//abcd e

//for循环遍历
function trim(string) {
    let start = 0
    let end =string.length
    for (let i = 0; i < string.length; i++) {
        if (string[i]===' ') {
            start++
        }else{
            break
        }
    }
    for(let i=string.length-1;i>=0;i--){
        if (string[i]===' ') {
            end--
        }else{
            break
        }
    }
    return string.slice(start,end)
}
console.log(trim(a))

//正则表达式
String.prototype.trim=function (string) {
    return this.replace(/^\s+/,'').replace(/\s+$/,'')
}
console.log(a.trim())//abcd e