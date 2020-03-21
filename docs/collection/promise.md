## Promise的三种状态
状态一旦改变就不会再变
- pending
- fulfilled
- rejected
		
## 实现下面这个函数
```js
logMessage(3000).then(() => {
	    console.log('3秒后才打印');
})
```

```js	 
	function logMessage(time) {
	    return new Promise((resolve) => {
	        setTimeout(() => { resolve() },time)
	    })
	}
```	
	
## Promise链式调用
- 原理：then方法返回的是一个新的promise实例，不是原来的promise，因此可以链式调用
- then方法接收的参数是什么？
	- 上一个then返回A（A为promise）——参数为A状态发生变化后resolve的数据
	- 上一个then返回B（B为非promise）——参数为B
```js
	function promiseChain(number) {
	    return new Promise(resolve => {
	        resolve(number);
	    })
	}
	promiseChain(1).then(num => {
	    console.log(num);//1
	    return num + 1
	}).then(num => {
	    console.log(num);//2
	    return promiseChain(5)
	}).then(num => {
	    console.log(num);//5
	})
```	
