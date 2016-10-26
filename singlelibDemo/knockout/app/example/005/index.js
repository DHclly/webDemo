//ko.applyBindings();
var tickets = [{
	name: "重庆航空",
	price: 188
}, {
	name: "南极航空",
	price: 288
}, {
	name: "马来西亚航空",
	price: 1
}];
var ticketsViewModel = {
	tickets: tickets,
	chosenTicket: ko.observable(),
	resetTicket: function() {
		this.chosenTicket(null);
	}
};
ko.applyBindings(ticketsViewModel);