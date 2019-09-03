#### new做了哪些事情
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
        