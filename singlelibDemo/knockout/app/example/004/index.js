// 本地化 validation
ko.validation.locale("zh-CN");
ko.validation.init({
	//如果为真，验证插件会在任何使用ko值绑定一个验证字段的
	//元素后面(如 input元素)插入一个span元素或指定的
	//messageTemplate 模板
	insertMessages: false,
	//指定当input元素中的内容无效时是否通过一个样式改
	//变当前input元素的样式
	decorateInputElement: true,
	//指定input标签验证错误时的CSS样式，decorateInputElement必须为true才有效
	errorElementClass: 'error',
});

var vm = {
	name: ko.observable("").extend({
		required: true
	}),
	submit: function() {
		if(this.errors().length) {
			this.errors.showAllMessages();
		} else {
			alert("ok");
		}
	},
	reset: function() {
		this.name("")
		this.errors.showAllMessages(false);
	}
}
vm.errors = ko.validation.group(vm);
ko.applyBindings(vm);