//通用的事件监听函数

//el被监听的节点
//type事件类型
//fn事件触发后要执行的函数

//简易版
function bindEvent(el,type,fn) {
    el.addEventListener(type,fn)
}

const el=document.getElementById('root')
bindEvent(el,'click',event=>{
    event.preventDefault()//阻止默认行为
    // event.stopPropagation()//阻止向上冒泡
    alert(event.target.innerText);
})

//完整版
//selector 父元素有多种子元素时，通过selector来过滤需要监听的元素
function bindEvent(el,type,selector,fn) {
    //selector可能没有传入
    if(fn==null){
        fn=selector
        selector=null
    }
    el.addEventListener('click',e=>{
        if(selector){
            const target=e.target
            //mactches 检验DOM节点是否匹配
            if(target.matches(selector)){
                fn(e)
            }
        }else{
            fn(e)
        }
    })
}
const el=document.getElementById('root')
bindEvent(el,'click','a',event=>{
    event.preventDefault()//阻止默认行为
    // event.stopPropagation()//阻止向上冒泡
    alert(event.target.innerText);
})
