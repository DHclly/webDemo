define(['./b'],function (b) {
	debugger;
	var returnVal = "我在 a文件,依赖b文件，因此会先加载b文件|";
	console.log(returnVal);
	return returnVal+b;
})