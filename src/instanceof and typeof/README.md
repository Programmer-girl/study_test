# typeof 和 instanceof

## typeof

要检测一个变量是不是基本数据类型，`typeof`操作符是最佳的工具。具体一点，`typeof`操作符是确定一个变量是字符串、数值、布尔值，还是`undefined`的最佳工具。如果变量的值是一个对象或`null`，则无法用`typeof`判断，如下：

```js
// 基本数据类型
typeof 100;           // number
typeof 'bottle';      // string
typeof true;          // boolean
typeof undefined;     // undefined

// 引用对象 typeof可以用来区分函数和其他对象
typeof function() {}; //function
typeof (() => {});    //function

typeof {};            // object
typeof null;          // object
typeof [1, 2, 3];     // object
```

## instanceof

如果变量是给定引用类型的实例（根据原型链来识别），那么`instanceof`会返回`true`。根据规定，所有的引用类型的值都是Object的实例。因此，在检测一个引用类型值和Object构造函数时，instanceof操作符会返回true。
```js
[1, 2, 3]      instanceof Object    // true
(() => {})     instanceof Object    // true
(function(){}) instanceof Object    // true

```
当然，如果使用instanceof操作符检测基本类型的值，则该值返回false。
```js
'123'     instanceof Object   // false
123       instanceof Object   // false
undefined instanceof Object   // false
```
注意这里null不属于instanceof的实例
```js
null      instanceof Object    // false
```