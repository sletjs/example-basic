# Getting Start

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

app.router('/', require('./viewctrl') )  

app.start(3000)
```

## 编写viewctrl.js

```
'use strict';

const BasicController = require('slet').BasicController

module.exports = class MyController extends BasicController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
  }
  
  get() { 
    var a = this.query.a
    // this.renderType='view'
    return {
      a: 'this is a',
      b: {
        c: 'ssddssdd a= ' + a
      }
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

在浏览器中打开 http://127.0.0.1:3000/?a=2
