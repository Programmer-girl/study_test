# ES6 modules

### 如何引入模块

index.js

```
import test from './test';
console.log(test);
```

test.js

```
console.log('test module');
```

### 模块如何对外提供接口

模块通过`export`关键字对外提供接口，像这样：

index.js

```
import test from './test';
console.log(test);
```

test.js

```
const num = 20;
export default {
	num
};
```

但是它不可以使用`export`暴露的对象

```
export const bar = () => {}
export const zcar = 12345;
```

如果想获取模块 test.js 暴露的所有接口，需要这样引入对象

```
import * as test from './test';
```

其中的 `*` 表示所有，这是比较常用的通配符，as 表示别名，`* as test`的意思是将 test.js 暴露的所有接口组成的对象，命名为 test。那么我们在 index.js 中 log 出 test，结果就如下。

![image](http://upload-images.jianshu.io/upload_images/599584-682a3aa05a20aad6.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240)

使用 ES6 解析结构的语法，像这样

```
import test, { bar, zcar } from './test';

console.log(test);
console.log('bar:', bar);
console.log('zcar:', zcar);
```

test，仍然表示为 export default 暴露的对象，而 { bar, zcar }则表示利用解析结构的语法，从整个返回对象中去取得对应的接口。输出结果也就很清晰了。

在我们使用 react 时，常常这样使用

```
import React, { Component } from 'react'
```

其实也暗示了 React 的封装方式，也暗示了我们应该如何去封装我们的模块。

这里我们能够直接引入 react 的原因，是因为我们将它安装到了文件夹 node_modules 中，该文件夹中安装的所有模块都可以这样直接引用。例如我们安装一个 jquery。

```
npm install jquery
```

然后在其他模块中就可以直接引入

```
import $ from 'jquery'
```
