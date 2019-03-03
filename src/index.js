 // require('./index.css')
 // require('./b.less')

var str = "zhaochucichuzuiduodezifu";
var arr = [];//定义一个新数组
//循环遍历字符串
for (var i = 0, i<str.length; i++) {
	var index = -1;
	var j = 0;
	//找每一个字符
	do {
		index = str.indexOf(str[i], index + 1);

		if (index != -1) {
			j++;
		}
	}while (index != -1);

	arr[j] = str[i]; //把字符串str中的字符赋给数组arr索引为j的数据，当多次循环后，会出现重复赋值的现象，
	　　　　　　　　　　　　　　　　　　　　//后赋值的会把之前的赋值覆盖掉，但不影响我们找出字符出现最多的那个
}
console.log(arr);
console.log("最多的字符是" + arr[0]);
console.log("次数是" + (arr.length - 1));
