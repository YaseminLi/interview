参考：[前端JS面试](https://coding.imooc.com/learn/list/115.html)    [前端面试题集锦](https://fe.padding.me/#/questions/1)

自己整理的[前端知识体系](https://www.processon.com/view/link/5e358818e4b05b335ff8d4eb)

## 变量类型
1. var const let 的区别
2. typeof可以返回哪些类型 
3. 列举强制类型转换和隐式类型转换
4. 手写深度比较 isEqual
5. ==和===的区别
6. 值类型和引用类型的区别
7. JavaScript的参数是按照什么方式传递的？
8. 什么是三元表达式？“三元” 表示什么意思？
9. 描述以下变量的区别：null，undefined 或 undeclared？
10. 什么是哈希表（散列表）？
11. 请指出 JavaScript 宿主对象和原生对象的区别？

## 字符串
1. 手写字符串的trim方法，考虑浏览器的兼容性
2. 获取随机数，要求是长度一致的字符串格式

## 数组
1. pop push unshift shift分别做什么
2. split（）和join（）区别
3. 数组哪些API是纯函数
4. slice和splice的区别
5. [10,20,30].map(parseInt)的返回结果
6. 手写数组flatern,考虑多层级
7. 数组去重
8. 如何准确判断一个变量是数组类型
9. 伪数组转化为标准数组
10. 去除数组中的重复元素
11. 一些常用方法：
12. 如何实现下列代码？[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
13. 实现数组的随机排序

## 函数
1. call和apply的区别
2. 函数声明和函数表达式的区别
3. 指出下列代码的区别：
  - function Person(){}
  - var person = Person();
  - var person = new Person();
4. 请举出一个匿名函数的典型用例？
5. JS 中有哪些内置函数
6. log(a)传入多个参数
7. 描述一种 JavaScript 中实现 memoization(避免重复运算)的策略。
8. 请解释 Function.prototype.bind 的作用？
9. 一些老的浏览器不支持bind方法

## 作用域和闭包
1. 闭包是什么，有什么特性？有什么负面影响？
2. this的不同应用场景，如何取值？
3. 手写bind函数
4. 实际开发汇总闭包的应用场景，举例说明
5. 如何理解作用域
6. 创建10个```<a>```标签，点击的时候弹出相应的序号
7. 解释下变量提升？
8. 以下的执行结果


## 数据请求
1. ajax请求中get和post的区别
2. 解释jsonp的原理，为何不是真正的ajax
3. 手写一个简易的ajax
4. 跨域的原理
5. 跨域的常用实现方式

## 存储
1. 描述cookie localStorage sessionStorage之间的区别

## 事件
1. 事件代理（委托）是什么？

## DOM操作和优化
1. 如何阻止事件冒泡和默认行为
2. DOM常用的API
3. 如何减少DOM操作
4. document load 和ready的区别
5. DOM是怎样的数据结构？
6. DOM节点的attr和property的区别

## BOM
1. 检测浏览器的类型
2. 拆解url各部分

## 其他
1. 如何获取多个数字中的最大值
2. 手写深克隆

## class
1. 如何用js实现继承
2. 如何准确判断一个变量是不是数组
3. 手写简易的jquery，考虑插件和扩展性
4. class的原型本质，怎么理解？

## 异常
1. 如何捕获JS程序中的异常

## JSON
1. 什么是JSON

## url
1. 获取当前页面url参数
2. 将url参数解析为JS对象

## 异步和同步
1. 同步和异步的区别是什么？
2. 手写用promise加载一张图片
3. 前端使用异步的场景有哪些？
4. 异步和单线程的关系

## 运行环境
1. 从输入url到渲染出页面的过程
2. css为什么要放在head中？
3. js为什么放在body最后
4. script标签中defer和async的区别？
5. window.onLoad和DOMContentLoad的区别
6. 请解释一下 JavaScript 的同源策略。
7. 在Paragraph 1加载后main2.css才会被加载编译吗？
8. main1.css一定会在alert('Hello world')前被加载和编译吗?
9. 在main2.css获取前main1一定必须被下载解析吗？
10. 什么是 "use strict"; ? 使用它的好处和坏处分别是什么？
11. html文件加载css,js文件的顺序，怎么异步加载？

## 动画
1. 实现动画的方式
2. 介绍一下RAF requestAnimationFrame

## 性能优化
1. 前端性能如何优化，一般从哪几个方面考虑

## css
1.  CSS 属性是否区分大小写？
2. 行内(inline)元素 设置margin-top和margin-bottom 是否起作用？
3. 对内联元素(inline)设置padding-top和padding-bottom是否会增加它的高度？
4.  设置p的font-size:10rem，当用户重置或拖曳浏览器窗口时，文本大小是否会也随着变化？
5. 伪类选择器:checked将作用与input类型为radio或者checkbox,不会作用于option。
6. translate()方法能移动一个元素在z轴上的位置？
7. 在HTML文本中，伪类:root总是指向html元素？
8.  如下代码中文本“Sausage”的颜色是?
9. #example位置如何变化：
  ```html
  <p id="example">Hello</p>
  #example {margin-bottom: -5px;margin-left: -5px;}
  ```
10. mypic.jpg 会被浏览器加载吗？
    ```html
    <div id="test1">
        <span id="test2"></span>
    </div>
    #test2 {
        background-image: url('mypic.jpg');
        display: none;
    }
    ```
11. 当下列的HTML代码加载时会触发新的HTTP请求吗？
    ```html
    <div style="display: none;">
        <img src="mypic.jpg" alt="My photo">
    </div>
    ```
12. 当下列的HTML代码加载时会触发新的HTTP请求吗？

```<img src="mypic.jpg" style="visibility: hidden" alt="My picture">```

13. mypic.jpg 会被浏览器加载吗？
  ```html
  <div id="test1">
      <span id="test2"></span>
  </div>
  #test1 {
      display: none;
  }
  #test2 {
      background-image: url('mypic.jpg');
      visibility: hidden;
  }
  ```
14. display:none 和visibilty:hidden的区别
15. 描述下 “reset” CSS 文件的作用和使用它的好处。
16. screen关键词是指设备物理屏幕的大小还是指浏览器的视窗？
17. 你对flex的理解？
18. em\px\rem区别？
19. 有哪些方式（CSS）可以隐藏页面元素？
20. CSS选择器的优先级是怎样的？
21. link和@import的区别？
22. 块级元素水平居中的方法？
23. CSS有几种定位方式？
24. 如何理解z-index？
25. 你对css sprites的理解，好处是什么？
26. 关于CSS的动画与过渡问题
27. 伪类和伪元素的区别是什么？
28. 为什么有时候人们用translate来改变位置而不是定位？。
29. only 选择器的作用是？

    @media only screen and (max-width: 1024px) {argin: 0;}
30. 谈谈对BFC的理解
