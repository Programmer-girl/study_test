// // 1 . 给一个连字符串例如：get-element-by-id转化成驼峰形式。
// var str = "get-element-by-id";
// var reg = /-\w/g; // 匹配横杆以及之后的一个字符，全局匹配
// console.log(str.replace(reg,function($0){
//     return $0.slice(1).toUpperCase();
//     // 匹配到到是-e -b -i 形式截取后一个字符转成大写 
// }));

// // 2 . 匹配二进制数字
// var str = "10101111";
// var reg = /^[01]+$/g;
// console.log(reg.test(str));

// // 3 . 非零的十进制数字 (有至少一位数字, 但是不能以0开头)
// var str = "81";
// var reg = /^[1-9][0-9]?$/g;
// console.log(reg.test(str));

// // 4 . 匹配一年中的12个月
// var str = "12";
// var reg = /^(0?[1-9]|1[0-2])$/g;
// console.log(reg.test(str));

// // 5 . 匹配qq号最长为13位
// var str ="10009093283333";
// var reg = /^[1-9][0-9]{4,12}$/g;
// console.log(reg.test(str));

// // 6 . 匹配常见的固定电话号码
// var str = "000-12344562";
// //  \(? 匹配左括号一次或0次然后以0开头后面加两个数字，再匹配右括号或空格或减号一次或0次，随后匹配8个数字
// var reg = /\(?0\d{2}[) -]?\d{8}/g;
// console.log(str.match(reg));

// // 7 . 匹配ip地址
// var str = "255.221.221.12";
// // [01]?\d\d?表示匹配小于199的数，可以说两位数或一位数，2[0-4]\d表示从200到249，配合25[0-5]就表示小于255的数了。
// var reg = /(([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}([01]?\d\d?|2[0-4]\d|25[0-5])/g;
// console.log(str.match(reg));

// // 8 . 匹配用尖括号括起来的以a开头的字符串
// var str = "<a herf='www.baidu.com'>";
// var reg = /<a[^>]+>/g;
// console.log(str.match(reg));

// // 9 . 分割数字每三个以一个逗号划分
// var str = "12345678901";
// function numSplit(str){
//     var re = /(\d)(?=(\d{3})+$)/g;
//     //(\d{3})+$ 的意思是连续匹配 3 个数字，且最后一次匹配以 3 个数字结尾。
//     //要找到所有的单个字符，这些字符的后面跟随的字符的个数必须是3的倍数，并在符合条件的单个字符后面添加,
//     return str.replace(re,'$1,');
// }
// console.log(numSplit(str));


var str1 = 'abcdefg hijklmn opqrst';
var n1 = str1.search(/hi/);

console.log(n1);

var str2 = 'abcdefg hijklmn opqrst'; 
var txt2 = str2.replace(/hijklmn/,"abcdefg");
console.log(txt2);