ko.validation.rules.pattern.message = '无效';
ko.validation.locale('zh-CN');
ko.validation.init({
	registerExtenders: true,
	messagesOnModified: true,
	insertMessages: true,
	parseInputAttributes: true,
	messageTemplate: null
}, true);

var captcha = function(val) {
	return val == 11;
};

var mustEqual = function(val, other) {
	return val == other;
};

var viewModel = {
	firstName: ko.observable().extend({
		minLength: 3,
		maxLength: 5
	}),
	lastName: ko.observable().extend({
		required: true
	}),
	emailAddress: ko.observable().extend({
		// custom message
		required: {
			message: '请输入你的电子邮件地址。'
		}
	}),
	age: ko.observable().extend({
		min: 1,
		max: 100
	}),
	'location': ko.observable(),
	subscriptionOptions: ['技术', '音乐'],
	subscription: ko.observable().extend({
		required: true
	}),
	'password': ko.observable(),
	captcha: ko.observable().extend({
		// custom validator
		validation: {
			validator: captcha,
			message: '请检查验证码是否正确.'
		}
	}),
	'submit': function() {
		debugger;
		if(viewModel.errors().length === 0) {
			alert('谢谢你。');
		} else {
			alert('请检查你的提交。');
			viewModel.errors.showAllMessages();
		}
	},
	'reset': function() {
		debugger;
		Object.keys(viewModel).forEach(function(name) {
			if(ko.isWritableObservable(viewModel[name])) {
				viewModel[name](null);
			}
		});
		if(ko.validation.utils.isValidatable(viewModel.location)) {
			viewModel.location.rules.removeAll();
		}
		viewModel.errors.showAllMessages(false);
	}
};

viewModel.confirmPassword = ko.observable().extend({
	validation: {
		validator: mustEqual,
		message: '两次输入密码不一致。',
		params: viewModel.password
	}
});

viewModel.errors = ko.validation.group(viewModel);

viewModel.requireLocation = function() {
	viewModel.location.extend({
		required: true
	});
};

ko.applyBindings(viewModel);