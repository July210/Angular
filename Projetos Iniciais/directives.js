parking.directive("alert", function(){
	return {
		restrict: 'E',
	scope:{
		topic: '=topic',
		description: '=description',
		close: '&'
	},
	templateUrl: "alert.html",
	replace: true
	};
});