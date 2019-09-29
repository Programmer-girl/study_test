# 正则
## 方法
### search()
`search()` 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

```js
var str = 'abcdefg hijklmn opqrst';
var n = str.search(/hi/); // 6
```
### replace()
`replace()` 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

```js
var str = 'abcdefg hijklmn opqrst'; 
var txt = str.replace(/hijklmn/,"abcdefg"); // 'abcdefg abcdefg opqrst'
```

## 修饰符
|修饰符	| 描述 |
|--|--|
|i|执行对大小写不敏感的匹配。|
|g|执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。|
|m|执行多行匹配。|
<!-- 
| 元字符 | 说明 |
| -------- | ------ |
| .		| 匹配除了换行符外任意字符 |
| \s	| 匹配任意的空白符 |
| \d	| 匹配数字	|
| \w	| 匹配字母、数字、下划线、汉字	|
| \b	| 匹配单词边界	|
| ^	| 匹配字符串的开始	|
| $	| 匹配字符串的结束	| -->