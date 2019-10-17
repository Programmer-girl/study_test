/**
 * 12. 整数转罗马数字
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	var _num = num;
	let sort = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	var result = '';
	for (item in sort) {
		var n = parseInt(_num / sort[item]);
		result = result + item.repeat(n);
		_num = _num - n * sort[item];
	}
	return result;
};
