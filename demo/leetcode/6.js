/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	var json = [];
	var down = 1;
	var count = 0;
	// down = 1向下，0向上
	for (var i = 0; i < s.length; i++) {
		json[count] = json[count] ? json[count] + s[i] : s[i];
		if (count == 0) {
			down = true;
		} else if (count == numRows-1) {
			down = false;
		}
		down ? count++ : count--;
	}
    return json.join('');
};
var s = 'LEETCODEISHIRING',
	numRows = 4;
convert(s, numRows);
