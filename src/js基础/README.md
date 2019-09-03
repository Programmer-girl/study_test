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
HTML4.01中的doctype需要对DTD进行引用，因为HTML4.01基于SGML（标准通用标记语言），HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照他们应该的方式运行）。

### Doctype作用？
告知浏览器的解析器用什么文档标准解析这个文档。
标准分为：1.标准模式、JS运作模式、兼容模式等
