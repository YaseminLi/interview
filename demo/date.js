let a=new Date('2020')
let b=Date.now() //typeof b=string
let d=(b.getTime()-a.getTime())/1000/60/60/24
console.log('过去了'+d+'天');//error b.getTime is not a function