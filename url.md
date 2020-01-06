## 获取当前页面url参数
1. 传统方法location
2. URLSearchParams
```js		
		let url = "https://www.baidu.com/s?ie=UTF-8&wd=URLsearchparams"
		//传统方式
		let locationSearch = '?ie=UTF-8&wd=URLsearchparams'//通过location.search获取
		//获取搜索key的值
		function query(key) {
		    let search = locationSearch.substring(1)//'ie=UTF-8&wd=URLsearchparams'
		    let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i')//[^&]除&符号外的
		    let result = search.match(reg)//返回数组
		    return result[2]
		}
		query('wd')//'URLsearchparams'
		 
		//URLSearchParams
		let search=new URLSearchParams(locationSearch)
		let value=search.get('wd')
        console.log(value) ////'URLsearchparams'
```

## 将url参数解析为JS对象
	
- 方法一：字符串拆分
```js
	function toObject1(locationSearch) {
	    let search = locationSearch.substring(1)//'ie=UTF-8&wd=URLsearchparams'
	    let obj={}
	    let arr=search.split('&')
	    arr.forEach(item => {
	        let keyValue=item.split('=')
	        obj[keyValue[0]]=keyValue[1]
	    });
	    return obj
	}
    console.log(toObject1(locationSearch))//{ ie: 'UTF-8', wd: 'URLsearchparams' }
```
- 方法二：URLSearchParams
```js
	function toObject2(locationSearch) {
	    let obj={}
	    let search = new URLSearchParams(locationSearch)
	    search.forEach((val,key)=>{
	        obj[key]=val
	    })
	    return obj
	}
console.log(toObject2(locationSearch))//{ ie: 'UTF-8', wd: 'URLsearchparams' }
```