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