1. 如何阻止事件冒泡和默认行为

阻止冒泡：event.stopPropagation()

阻止默认：event.preventDefault()
	
2. DOM常用的API
- 获取DOM节点

    - 获取body let body=document.body

    - 指定id document.getElementById('div1')  得到单个节点

    - 指定class document.getElementsByClassName('class-div1')  得到节点的集合（数组形式）

    - 指定标签名 document.getElementsByTagName('p')   得到节点的集合（获取到的是一个类数组对象，需要用数组的slice方法call一下，它才可以用数组的原型方法。）

    - 指定选择器 document.querySelectorAll(一个或多个css选择器)
		
- 增加节点
		```js
        let p5=document.createElement('p')
		p5.innerHTML='new p'
		let div1=document.getElementById('div1')
		div1.appendChild(p5)
		
		<div id="div1" class="class-div1">
		        <p id="p1" data-name="p1-data-name">this is p1</p>
		        <p id="p2">this is p2</p>
		        <p>new p</p>
		</div>
		<div id="div2">
		        <p id="p3">this is p3</p>
		        <p id="p4">this is p4</p>
		</div>
        ```
		
- 移动节点(和增加节点的区别)
		```js
        let div2=document.getElementById('div2')
		div2.appendChild(p5)
		
		<div id="div1" class="class-div1">
		        <p id="p1" data-name="p1-data-name">this is p1</p>
		        <p id="p2">this is p2</p>   
		</div>
		<div id="div2">
		        <p id="p3">this is p3</p>
		        <p id="p4">this is p4</p>
		        <p>new p</p>
		</div>
        ```
		
- 获取父元素节点

p5.parentNode===p5.parentElement  
		
- 获取子元素节点

div2.children  数组，不包含换行产生的text

div2.childNodes   数组，包含换行产生的text
		
- 删除节点

删除子节点 div2.removeChild(p5)

删除本身节点 div2.remove()
	
	
3. 如何减少DOM操作
- 缓存DOM查询结果
- 对DOM的多次操作，合并后一次性插入。
		
4. document load 和ready的区别

load：页面中的资源全部加载完成，包括图片、视频等

ready(DOMContentLoaded)：DOM渲染完就行，此时的图片或者视频可能还没加载完
```js
	window.addEventListener('load',()=>{
	        console.log("资源已全部加载完，包括图片")
	    })
	window.addEventListener('DOMContentLoaded',()=>{
	        console.log('DOM已渲染完，图片还没加载')
	 })	
```	

5. DOM是怎样的数据结构？

树
		
6. DOM节点的attr和property的区别
- property只是一个js对象的属性的修改和获取，优先用这个，性能快
- attibute是对html标签属性的修改和获取

如data-name <p id="p1" data-name="p1-data-name">,是文档标签里的属性
	
