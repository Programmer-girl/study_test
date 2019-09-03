# HTML
## 1. DTD Doctype 
DTD全称 Document Type Definition,即文档类型定义.
如果在漏写了DTD声明，在Firefox中仍然会以标准模式来解析网页，但在IE中（包括IE6, IE7,IE8）就会触发怪异模式。

* html4文档定义类型显示如下:  *
```html
//用于XHTML 4.0 的严格型
<!DOCTYPE HTMLPUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

//用于XHTML 4.0 的过渡型
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

//用于XHTML 1.0 的严格型
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

//用于XHTML 1.0 的过渡型
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
* html5文档定义类型显示如下:  *
```html
<!DOCTYPE html>
```
### html5不使用DTD引用的原因？
HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
### Doctype作用？
告知浏览器的解析器用什么文档标准解析这个文档。
标准分为：标准模式、JS运作模式、兼容模式等

## 2.link和@import
### 页面导入样式时，使用link和@import有什么区别？

- link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
- 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
- import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
- link支持使用js控制DOM去改变样式，而@import不支持;
## 3.HTML5离线存储
定义：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

如何使用：
1. 页面头部像下面一样加入一个manifest的属性；
2. 在cache.manifest文件的编写离线存储的资源；
```js
  CACHE MANIFEST
  #v0.11
  CACHE:
  js/app.js
  css/style.css
  NETWORK:
  resourse/logo.png
  FALLBACK:
  // offline.html
```
3. 在离线状态时，操作window.applicationCache进行需求实现。
