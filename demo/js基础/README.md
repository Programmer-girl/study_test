# HTML

## 1. DTD Doctype

DTD 全称 Document Type Definition,即文档类型定义.
如果在漏写了 DTD 声明，在 Firefox 中仍然会以标准模式来解析网页，但在 IE 中（包括 IE6, IE7,IE8）就会触发怪异模式。

-   html4 文档定义类型显示如下: \*

```html
//用于XHTML 4.0 的严格型
<!DOCTYPE HTMLPUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

//用于XHTML 4.0 的过渡型
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

//用于XHTML 1.0 的严格型
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

//用于XHTML 1.0 的过渡型
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

-   html5 文档定义类型显示如下: \*

```html
<!DOCTYPE html>
```

### html5 不使用 DTD 引用的原因？

HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

而 HTML4.01 基于 SGML,所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。

### Doctype 作用？

告知浏览器的解析器用什么文档标准解析这个文档。
标准分为：标准模式、JS 运作模式、兼容模式等

## 2.link 和@import

### 页面导入样式时，使用 link 和@import 有什么区别？

-   link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；而@import 是 CSS 提供的，只能用于加载 CSS;
-   页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
-   import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;
-   link 支持使用 js 控制 DOM 去改变样式，而@import 不支持;

## 3.HTML5 离线存储

_定义_：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

_原理_：HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

如何使用：

1. 页面头部像下面一样加入一个 manifest 的属性；
2. 在`cache.manifest`文件的编写离线存储的资源；

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

3. 在离线状态时，操作`window.applicationCache`进行需求实现。
