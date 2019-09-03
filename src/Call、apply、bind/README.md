# apply与call与bind
```js
//Array.protype.slice = function(){}
var ary = [12,23,34];
ary.slice;
//ary这个实例通过原型链的查找机制找到Array.prototype上的slice方法
ary.slice();
//让我们找到这个方法执行
//这里执行的是slice方法，不是把ary执行，是在执行slice的过程中将ary数组进行截取
```
```js
//Function.prototype.call = function(){};
var obj = {name:"rabbit"};
function fn(){
    console.log(this)
}
fn();
//这时fn里的this是window，我想让this是obj，所以我这样操作
obj.fn();//obj.fn is not function
//这里的意思是执行obj的fn方法，
//而var obj = {name:"rabbit",fn:fn}这样才可以执行。
//这时我们要用到call这个方法。
//fn.call(obj);
```
call方法的作用: 首先我们让原型上的call方法执行，在执行call方法的时候，我们让fn方法中的this变成第一个参数obj，然后再把这个fn函数执行
```js
重写call方法，深入探讨call执行原理
Function.prototype.myCall = function(context){
    //1.让fn中的关键字变成context的值->obj
    //myCall中的this就是当前我要操作和改变其this关键字的那个函数名，这里指fn
    //2.让fn方法在执行
    eval(this.toString().replace("this","context"));
    当前方法();
}
```
```js
fn.myCall(obj);
function fn1(){console.log('1');}
function fn2(){console.log('2');}
fn1.call(fn2);//->1
fn1.call.call(fn2);//->2
fn1.call.call.call...call(fn2);//执行的都是fn2
```
`fn1.call(fn2);`

首先fn1通过原型链找到call方法，并且让call方法执行,此时call这个方法中的this关键字变为fn2，然后让fn1执行。->1

`fn1.call.call(fn2);`

首先fn1通过原型链找到Function.prototype上的call方法，然后再让call方法通过原型在找到Function原型上的call（因为call本身的值也是一个函数，所以同样可以找到Function.prototype），在第二次找到call的时候让方法执行，方法中的this是fn1.call，首先让这个方法中的this变为fn2，然后执行fn1.call ->2
```js
var obj = {name:rabbit};
function fn(num1,num2){
    console.log(num1+num2);
    console.log(this);
}
fn(100,200);//300,this->window 
fn.call(100,200);//this->100 num1=200 num2=undefined   -->NAN
fn.call(obj,100,200);//this->obj num1=100 num2=200 
fn.call();//this->window
fn.call(null);//->this->window
fn.call(undefined);//->window
```
以上都是非严格模式，严格模式会报错
```js
"use strict"//告诉当前浏览器接下来的代码将按照严格模式进行编写
fn.call();//this->undefined
fn.call(null);//->this->null
fn.call(undefined);//->undefined
```
apply和call方法的作用是一摸一样的，都是用来改变方法的this关键字并且把方法执行，而且在严格模式和非严格模式下与第一个参数是null／underfined这种情况的规定也是一样的。
```js
fn.call(obj,100,200);
fn.apply(obj,[100,200]);
```
call在给fn传递参数的时候是一个个传递值的，而apply不是一个个传，而是要把fn传递的参数值统一的放在一个数组中进行操作，也相当于一个一个给fn的形参赋值

bind:这个方法在ie6-8下不兼容->和call／apply类似，都是用来改变this关键字的
```js
fn.call(obj,1,2);//改变this并且执行函数
fn.bind(obj,1,2);
//只是改变了fn中的this为obj，并且给fn传递了两个参数值1，2，
//*但此时并没有执行fn
var tempFn = fn.bind(obj,1,2);
//实际上执行bind有一个返回值，
//这个返回值tempFn就是我们把fn的this改变后的那个结果,不改变原函数
tempFn();//执行该函数
```
bind->体现了预处理思想，事先把fn的this改变为我们想要的结果，并且把对应的参数也准备好，以后要用到了，直接执行即可。

我们发现严格模式下的this相对于非严格模式下的this主要区别在于：对于JS代码中没有写执行主体的情况下,非严格模式下默认都是window执行的,所以this指向的是window;但是在严格的模式下,没有写就是没有执行主体,this指向的是undefined。
