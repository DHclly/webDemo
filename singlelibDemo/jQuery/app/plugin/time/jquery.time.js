;(function($) {
	$.extend({
		/**
		 * 获取时间戳
		 */
		"getTimeStamp": function() {
			return new Date() - new Date(1970, 1, 1, 0, 0, 0, 0);
		},
		"parseToTime": function(timeStamp) {
			return new Date(timeStamp);
		}
	});
})(jQuery);