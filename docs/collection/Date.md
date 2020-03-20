1. 下面代码运行会有什么问题？
```js
   let a=new Date('2020')
	let b=Date.now() 
	let d=(b.getTime()-a.getTime())/1000/60/60/24
    console.log('过去了'+d+'天');
```
	
```error:b.getTime is not a function typeof b==='string',没有getTime()方法```