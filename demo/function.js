var a=1
var test=function(){
    console.log(a);
}
function test(){
    console.log(a);
    var a=2
}
test()//1