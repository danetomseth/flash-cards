app.controller('NewCardCtrl', function($scope, $http, NewCardFactory) {
	$scope.newCard = {};
	$scope.sendCard = function(cardData) {
		console.log('new card',$scope.newCard);
		NewCardFactory.storeCard($scope.newCard).then(function(response) {
			console.log('server response', response);
		})	
	}
})	