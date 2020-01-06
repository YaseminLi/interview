## 什么是JSON
1. 一种轻量级的数据格式，不支持undefined
2. 全局对象，stringfy,parse方法,可以传入第二个参数作为过滤器（传数组会过滤属性，传函数会操作键值对）
```js
	let xiaoming={
        name:"xiaoming",
        age:16,
        hair:"long"
	}
	let a=JSON.stringify(xiaoming)
	let b=JSON.stringify(xiaoming,["name","age"],)
	console.log(a);//{"name":"xiaoming","age":16,"hair":"long"}
    console.log(b);//{"name":"xiaoming","age":16}
```