var yesBoycott = angular.module('yesBoycott', [])
.component('yesBoycott',{
    templateUrl: 'templates/yes_boycott_template.html',
	controller: [ '$http',function ($http) {
		var self = this;

		this.reasons = "";
		this.source = ""

		// $http.get('Assets/boycott_yes.json').then(function(response) {
		// 	console.log(response)
		// 	console.log(self.company)
		// 	self.reasons = response.data[self.company].reasons;
		// 	self.source = response.data[self.company].source;
		// });

}]});

