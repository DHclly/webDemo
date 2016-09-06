;
(function($) {
	$.extend({
		time: {
			/**
			 * 获取时间戳
			 * @param {String} date - 传入的日期
			 */
			"getTimeStamp": function(date) {
				var start = new Date(1970, 1, 1, 0, 0, 0, 0),
					returnVal = null;
				if(date) {
					if(new Date(date).toString() === "Invalid Date") {
						returnVal = "传入的日期格式不对，应为 yyyy MM dd hh mm ss";
					} else {
						returnVal = new Date(date) - start;
					}

				} else {
					returnVal = new Date() - start;
				}
				return returnVal;
			},

			/**
			 * @param {Number} timeStamp
			 */
			"parseToTime": function(timeStamp) {
				var returnVal = null;
				if(timeStamp) {
					if(new Date(timeStamp).toString() === "Invalid Date") {
						returnVal = "传入的数据不对，应为正整数";
					} else {
						returnVal = new Date(timeStamp).toLocaleString();
					}

				} else {
					returnVal = new Date().toLocaleString();
				}
				return returnVal;
			},
			"getDate": function() {
				return new Date().toLocaleDateString();
			},
			"getTime": function() {
				return new Date().toLocaleTimeString();
			},
			"getWeek": function() {
				var week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", ],
					day = new Date().getDay();
				return week[day];
			},
			"getYear": function() {
				return new Date().getFullYear();
			}
		}
	});
})(jQuery);