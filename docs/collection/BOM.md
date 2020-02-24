## 检测浏览器的类型
```js
	let ua=navigator.userAgent "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
	let isChrome=ua.indexOf('Chrome')
```

## 拆解url各部分

如：https://coding.imooc.com/lesson/115.html#mid=5390
- 完整URl```location.href```     "https://coding.imooc.com/lesson/115.html#mid=5390"
- 协议 ```location.protocol```  "https:"
- 服务器名称和端口号``location.host``  "coding.imooc.com"
- 目录或文件名``location.pathname`` "/lesson/115.html"
- 查询字符串，问好开头``location.search`` ""
- 后面的 ``location.hash`` "#mid=5390"
