##  CSS 属性是否区分大小写？
```css
    ul {
        MaRGin: 10px;
    }
```

不区分。 HTML，CSS都对大小写不敏感，但为了更好的可读性和团队协作一般都小写，而在XHTML 中元素名称和属性是必须小写的。
	
## 行内(inline)元素 设置margin-top和margin-bottom 是否起作用？
不一定，行内可替换元素margin-top和margin-bottom是有用的,，像input，img，其它是没有效果的
	
## 对内联元素(inline)设置padding-top和padding-bottom是否会增加它的高度？
元素本身包括padding的高度会增加，但不一定会撑开父元素。

对于行内非替换元素，父元素高度通过line-height设置，padding不会撑开父元素。

对于替换元素，会撑开父元素。
	
##  设置p的font-size:10rem，当用户重置或拖曳浏览器窗口时，文本大小是否会也随着变化？
不会。rem是以html根元素中font-size的大小为基准的相对度量单位，文本的大小不会随着窗口的大小改变而改变。
	
## 伪类选择器:checked将作用与input类型为radio或者checkbox,不会作用于option。
不对。
伪类选择器checked的定义:

```The :checked CSS pseudo-class selector represents any radio (<input type="radio">), checkbox (<input type="checkbox">) or option (<option>in a <select>) ```
	
## translate()方法能移动一个元素在z轴上的位置？
不能。translate()方法只能改变x轴，y轴上的位移。:translate3D()可以
	
## 在HTML文本中，伪类:root总是指向html元素？
不是。MDN中描述:root 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 ```<html> ```元素，除了优先级更高之外，与 html 选择器相同。
	
##  如下代码中文本“Sausage”的颜色是?
```html
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
        
    #awesome .favorite:not(#awesome) .highlight {
        color: red;
    }
    #awesome .highlight:nth-of-type(1):nth-last-of-type(1) {
        color: blue;
    }
``` 

blue。:not不算伪类0
	
## #example位置如何变化：
```js
<p id="example">Hello</p>
#example {margin-bottom: -5px;margin-left: -5px;}
```
向上向左移动5px。
	
## mypic.jpg 会被浏览器加载吗？
```js
<div id="test1">
    <span id="test2"></span>
</div>
#test2 {
    background-image: url('mypic.jpg');
    display: none;
}
```
会被加载。
	
元素的样式设置成display: none，背景和标签上的图片都会被加载，但不会渲染
```js
<div class="img-container" style="display:none"></div> //加载
<img src="2.png" style="display:none">  //加载
	.img-container {
	        background-image: url('1.png');
        }
```
## 当下列的HTML代码加载时会触发新的HTTP请求吗？
```html
<div style="display: none;">
    <img src="mypic.jpg" alt="My photo">
</div>
```
会
	
## 当下列的HTML代码加载时会触发新的HTTP请求吗？
``` <img src="mypic.jpg" style="visibility: hidden" alt="My picture">```

 会（只是隐藏）
	
## mypic.jpg 会被浏览器加载吗？
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
不会被加载。

父元素的样式设置成display: none，背景上图片不会被加载，标签上的图片会加载
	
## display:none 和visibilty:hidden的区别
display:none和visibility:hidden都是把网页上某个元素隐藏起来的功能，但两者有所区别， 

display属性设定为“none”的元素将不产生任何的框（Box），也就是说，元素对布局没有影响，浏览器将不显示该元素，包括其后代元素。更不会占位。

而如果设定“visibility : hidden”则会生成元素框，只是元素“不可视”，而其他非视觉的属性都将生效，例如widht、padding等，在页面中所占的空间没有变
	
## 描述下 “reset” CSS 文件的作用和使用它的好处。
- 作用以及好处：因为各个浏览器默认对CSS的渲染有差异，"reset" CSS 通过重新定义标签样式，对浏览器进行默认样式“清零”重置，样式保持一致。
- 不足:
	- css文件大小增加；
	- 许多样式本身就需要重置，多此一举；
	- 增加浏览器对CSS 的渲染。

可以阅读以下文章增强了解：
- [CSS reset的重新审视 – 避免样式重置](https://www.zhangxinxu.com/wordpress/2010/04/css-reset%E7%9A%84%E9%87%8D%E6%96%B0%E5%AE%A1%E8%A7%86-%E9%81%BF%E5%85%8D%E6%A0%B7%E5%BC%8F%E9%87%8D%E7%BD%AE/)
- [常见标签的默认属性值及相互作用——关于CSS reset的思考](https://www.cnblogs.com/dolphinx/p/3509515.html)
	
## screen关键词是指设备物理屏幕的大小还是指浏览器的视窗？
```@media only screen and (max-width: 1024px) {margin: 0;}```
浏览器视
	
## 你对flex的理解？
web应用有不同设备尺寸和分辨率，这时需要响应式界面设计来满足复杂的布局需求，Flex弹性盒模型的优势在于开发人员只是声明布局应该具有的行为，而不需要给出具体的实现方式，浏览器负责完成实际布局，当布局涉及到不定宽度，分布对齐的场景时，就要优先考虑弹性盒布局
	
## em\px\rem区别？
- px：绝对单位，页面按精确像素展示。
- em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。
- rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持
	
## 有哪些方式（CSS）可以隐藏页面元素？
- opacity:0：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互
- visibility:hidden: 与上一个方法类似的效果，占据空间，但是不可以交互了
- overflow:hidden: 这个只隐藏元素溢出的部分，但是占据空间且不可交互
- display:none: 这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局
- z-index:-9999: 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了
- transform: scale(0,0): 平面变换，将元素缩放为0，但是依然占据空间，但不可交互
	
## CSS选择器的优先级是怎样的？
CSS选择器的优先级是：内联 > ID选择器 > 类选择器 > 标签选择器

到具体的计算层面，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：
- A 的值等于 1 的前提是存在内联样式, 否则 A = 0;
- B 的值等于 ID选择器 出现的次数;
- C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;
- D 的值等于 标签选择器 和 伪元素 出现的总次数 
	
## link和@import的区别？
都是外部引入css的方式
- link属于HTML标签，而@import是CSS提供的语法规则。
- 页面被加载时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载。
	
## 块级元素水平居中的方法？
- margin:0 auto方法
```html
.center{
      height: 200px;
      width:200px;
      margin:0 auto;
      border:1px solid red;
  }
<div class="center">水平居中</div>
```
- flex布局，目前主流方法
```html
.center{
      display:flex;
      justify-content:center;
  }
  <div class="center">
      <div class="flex-div">1</div>
      <div class="flex-div">2</div>
  </div>
```
- table方法
```html
.center{
      display:table;
      margin:0 auto;
      border:1px solid red;
  }
  <div class="center">水平居中</div>
```
拓展阅读: [16种方法实现水平居中垂直居中](https://louiszhai.github.io/2016/03/12/css-center/)
	
## CSS有几种定位方式？
static\relative\absolute\fixed\sticky
	
## 如何理解z-index？
CSS 中的z-index属性控制重叠元素的垂直叠加顺序，默认元素的z-index为0，我们可以修改z-index来控制元素的图层位置，而且z-index只能影响position属性值不是static的元素。
	
## 你对css sprites的理解，好处是什么？
- 是什么 ？

	雪碧图也叫CSS精灵， 是一CSS图像合成技术，开发人员往往将小图标合并在一起之后的图片称作雪碧图。
- 如何操作？

	使用工具（PS之类的）将多张图片打包成一张雪碧图，并为其生成合适的 CSS。 每张图片都有相应的 CSS 类，该类定义了background-image、background-position和background-size属性。 使用图片时，将相应的类添加到你的元素中。
- 好处：
	- 减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）
	- 提前加载资源
- 不足：
	- CSS Sprite维护成本较高，如果页面背景有少许改动，一般就要改这张合并的图片
	- 加载速度优势在http2开启后荡然无存，HTTP2多路复用，多张图片也可以重复利用一个连接通道搞定
## 关于CSS的动画与过渡问题
transition过渡是通过初始和结束两个状态之间的平滑过渡实现简单动画的；而animation则是通过关键帧@keyframes来实现更为复杂的动画效果。
- 拓展[深入理解CSS动画animation](https://www.cnblogs.com/xiaohuochai/p/5391663.html)    [深入理解CSS过渡transition](https://www.cnblogs.com/xiaohuochai/p/5347930.html)
## 伪类和伪元素的区别是什么？
- 伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类。
- 伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过::before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
## 为什么有时候人们用translate来改变位置而不是定位？
translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。而translate改变位置时，元素依然会占据其原始空间。
## only 选择器的作用是？
```@media only screen and (max-width: 1024px) {argin: 0;}```

only操作符表示仅在媒体查询匹配成功时应用指定样式。可以通过它让选中的样式在老式浏览器中不被应用

```media="only screen and (max-width:1000px)"{...}```

上面这行代码，在老式浏览器中被解析为media="only"，因为没有一个叫only的设备，所以实际上老式浏览器不会应用样式
## 谈谈对BFC的理解✨
BFC是指一个独立的渲染区域，只有Block-level Box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

它的作用是在一块独立的区域，让处于BFC内部的元素与外部的元素互相隔离。

BFC触发条件:
- 根元素，即HTML元素
- position: fixed/absolute
- float 不为none
- overflow不为visible
- display的值为inline-block、table-cell、table-caption

作用：
- 防止margin重叠
- 防止元素塌陷

## 关于盒模型
- 外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。
- 在标准盒模型下，width是指实际内容宽度；
- 在怪异盒模型下（IE）,width=内容宽度+边框宽+内边距宽；
- ```box-sizing``` 属性可以指定盒子类型 ```box-sizing：content-box```标准 ```box-sizing：border-box```怪异

## hover、active、focus这几种伪类被激活的元素
这三个执行的顺序是：hover-active-focus，但在写css样式时，active需要放在最后，不然会被覆盖