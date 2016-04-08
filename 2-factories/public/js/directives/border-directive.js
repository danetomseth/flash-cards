app.directive('borderHov', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			element.on('mouseenter', function() {
				console.log("hellloooo!!!");
				element.css('background-color': 'red');
			})
		}
	}
})