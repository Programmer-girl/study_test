# New

## new做了哪些事情
```
//创建Person构造函数，参数为name,age
function Person(name,age){
	this.name = name;
	this.age = age;
}
//实例化对象小明
xm = new Person('xiaoming',18);
//打印实例化出来的对象小明
console.log(xm);
```

用new关键字实例化对象时，首先创建了一个空对象xm，并且这个空对象包含两个属性name和age，分别对应构造函数中的两个属性，实例化出来的这个对象xm是继承自Person.prototype,那么现在我们就可以总结出new关键字在实例化对象时内部都干了什么

1. 创建一个空对象，并使该空对象继承Func.prototype；

2. 执行构造函数，并将this指向刚刚创建的新对象；

3. 返回新对象；



```
function Person(name,age){
	this.name = name;
	this.age = age;
}
 
function _new(){
	//1.拿到传入的参数中的第一个参数，即构造函数名Func
	var Func = [].shift.call(arguments);
	//2.创建一个空对象obj,并让其继承Func.prototype
	var obj = Object.create(Func.prototype);
	//3.执行构造函数，并将this指向创建的空对象obj
	Func.apply(obj,arguments)
	//4.返回创建的对象obj
	return obj
}
 
xm = _new(Person,'xiaoming',18);
 
console.log(xm);
```

## Object.create 和new区别
创建对象的方式，我以我碰到的两种创建方式，Object.create 和new来说明

```
var Base = function () {}
var o1 = new Base();
var o2 = Object.create(Base);
```
以下是Object.create的实现方式，可以看出来。Object.create是内部定义一个对象，并且让F.prototype对象 赋值为引进的对象/函数 o，并return出一个新的对象。

```
Object.create =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};
```
`var o1 = new Base()`的时候new做了什么，new做法是新建一个obj对象o1，并且让o1的__proto__指向了Base.prototype对象。并且使用call 进行强转作用环境，从而实现了实例的创建。
```
var o1 = new Object();
o1.[[Prototype]] = Base.prototype;
Base.call(o1);
```
来看看两个对象打印情况，看似是一样的。
!image[运行结果](https://img-blog.csdn.net/20170612191345084?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

