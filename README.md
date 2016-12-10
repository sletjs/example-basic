# Getting Start

这里是sletjs默认api返回的示例

## 安装slet模块

```
$ npm i -S slet
```

## 从app.js开始

```
'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: true
});

app.router('/', require('./basicctrl') )  

app.start(3000)
```

## 编写basicctrl.js

```
'use strict';

const BasicController = require('slet').BasicController

module.exports = class MyBasicController extends BasicController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
  }
  
  get() {
    return {
      msg: 'this is a get'
    }
  } 

  post() {
    return {
      msg: 'this is a post'
    }
  } 

}

```

## 启动server

最后，执行app.js，启动server

```
$ node app.js
```

## 查验结果

测试请求，可以使用curl命令

```
curl http://127.0.0.1:3000/
curl -d "" http://127.0.0.1:3000
```