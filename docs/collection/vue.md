1. vue常用的修饰符
- v-on:click.stop阻止事件冒泡
- v-on:submit.prevent提交事件不再重载页面 
- v-on:click.once点击事件只会触发一次
- v-on:click.self 只当在 event.target 是当前元素自身时触发处理函数

修饰符可以串联

2. vue常用的指令
- v-model数据绑定
- v-show与v-if控制显示与隐藏  show会渲染并保存在DOM中，但if会销毁组件
- v-html解析html标签
- v-on绑定事件

3. vue的生命周期及常做什么事情
从开始创建、初始化数据、编译模版、挂载Dom -> 渲染、更新 -> 渲染、卸载等一系列过程
- beforeCreate:组件实例被创建之初，组件的属性生效之前，data和method还读不到
- created:组件实例已经完全创建，属性也绑定，但真实dom还没有生成，$el还不可用，ajax数据请求
- beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用
- mounted:el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子，可以操作DOM
- beforeUpdate:组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
- update:组件数据更新之后
- activited:keep-alive专属，组件被激活时调用
- deadctivated:keep-alive专属，组件被销毁时调用
- beforeDestory:组件销毁前调用
- destoryed:组件销毁后调用

4. 计算属性、watch和方法的区别
缓存性、使用场景

5. vue组件间如何通信
扩展:[vue中8种组件通信方式](https://juejin.im/post/5d267dcdf265da1b957081a3#heading-15)
- props/$emit+v-on: 通过props将数据自上而下传递，而通过$emit和v-on来向上传递信息。
- EventBus: 通过EventBus进行信息的发布与订阅
- vuex: 是全局数据管理库，可以通过vuex管理全局的数据流
- $attrs/$listeners: Vue2.4中加入的$attrs/$listeners可以进行跨级的组件通信
- provide/inject：以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效，这成为了跨组件通信的基础