
app.directive('loader', function() {
	console.log("hello");
	return {
		restrict: 'E',
		templateUrl: "/js/directives/loader.html"
	};
})


app.directive('flashCard', function() {
	return {
		restrict: 'E',
		templateUrl: '/js/directives/flashcard.html',
		scope: {
			card: "="
		}
	}
})