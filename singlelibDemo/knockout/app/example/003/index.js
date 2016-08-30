// 本地化 validation
ko.validation.locale("zh-CN");
//默认值
ko.validation.init({

	//如果为真，验证插件会在任何使用ko值绑定一个验证字段的
	//元素后面(如 input元素)插入一个span元素或指定的
	//messageTemplate 模板
	insertMessages: true,
	//指定当input元素中的内容无效时是否通过一个样式改
	//变当前input元素的样式
	decorateInputElement: false,
	//指定input标签验证错误时的CSS样式，decorateInputElement必须为true才有效
	errorElementClass: 'validationElement',
	//指定验证错误信息的CSS样式
	errorMessageClass: 'validationMessage',
	//指定此样式会同时作用于显示验证信息的元素和input元素
	errorClass: null,
	//通过input元素的title属性来显示错误消息
	errorsAsTitle: true,
	// 当鼠标悬浮在input字段上时显示错误(decorateElement必须为true)
	errorsAsTitleOnModified: false,
	//指定你的viewModel是否使用h5的验证规则
	parseInputAttributes: false,
	//添加h5的验证属性到进行了ko绑定的表单元素
	writeInputAttributes: false,
	//指示是否只有当属性被修改或在任何时间都被触发时，
	//验证消息是否被触发
	messagesOnModified: true,
	//指示是否只有当属性被修改或在任何时间都被触发时，
	//css错误样式被触发
	decorateElementOnModified: true,
	//你想用于所有验证信息的模板id
	//<script id="xx" type="text/html"></script>
	messageTemplate: null,
	//允许验证消息为html代码
	allowHtmlMessages: false,
	//当使用 group 或 validatedObservable 功能时
	//deep 指定是否递归验证viewmodel，还是只验证第一层的属性
	//observable 指定返回的错误对象是一个 ko.computed 还是一个简单function对象
	//live 指定是否改变model内的监控数组会引起验证器返回
	grouping {
		deep: false,
		observable: true,
		live: false
	},
	//允许注册自定义验证规则通过ko.validation.rules定义
	registerExtenders: true,
	validate: {
		// throttle: 10
	}
}, true);