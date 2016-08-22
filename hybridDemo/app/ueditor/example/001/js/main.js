require.config({
	baseUrl: "../../../../lib",
	paths: {
		'text': 'requirejs/text',
		'css': 'requirejs/css',
		//ueditor编辑器 1.4.3.3 PS：依赖关系：看shim
		'ueditor': 'ueditor-1.4.3.3/ueditor.all',
		'ueditorZhCn': 'ueditor-1.4.3.3/lang/zh-cn/zh-cn',
		'zeroclipboard': 'ueditor-1.4.3.3/third-party/zeroclipboard/ZeroClipboard.min'
	},
	shim: {
		'ueditor': {
			deps: [
				'ueditor-1.4.3.3/ueditor.config'
			],
			exports: 'UE'
		},
		'ueditorZhCn':{
			deps:['ueditor']
		}
	}
});

//程序入口
require(['ueditor', 'zeroclipboard', 'ueditorZhCn'], function(UE, zeroclipboard) {
	//让ue附带的该插件能被ue调用
	window.ZeroClipboard = zeroclipboard;
	var ue = UE.getEditor("htmlEditor");
	ue.ready(function () {
		this.focus(true);
	})
});