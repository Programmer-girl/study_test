# typeof和instanceof
### typeof
要检测一个变量是不是基本数据类型，typeof操作符是最佳的工具。具体一点，typeof操作符是确定一个变量是字符串、数值、布尔值，还是undefined的最佳工具。如果变量的值是一个对象或null，则无法用typeof判断，如下：
```js
// 基本数据类型
typeof 100              // number
typeof 'bottle'         // string
typeof true             // boolean
typeof undefined        // undefined

// 引用对象 typeof可以用来区分函数和其他对象
typeof function () {}   //function
typeof (() => {})       //function

typeof {}               // object
typeof null             // object
typeof [1, 2, 3]        // object
```
