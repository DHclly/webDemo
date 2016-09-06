;(function($) {
	$.extend({

		/**
		 * 实现像后端一样，通过request对象获取get请求传递的参数
		 */
		"getRequest": function() {
			var search = location.search; //获取url中"?"符后的字串
			var request = new Object();
			if(search.indexOf("?") != -1) {
				var str = search.substr(1);
				var strArr = str.split("&");
				for(var i = 0, len = strArr.length; i < len; i++) {
					var arr = strArr[i].split("=");
					request[arr[0]] = decodeURIComponent(arr[1]);
				}
			}
			return request;
		}
	});
})(jQuery);