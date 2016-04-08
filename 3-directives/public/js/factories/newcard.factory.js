app.factory('NewCardFactory', function($http) {
	return {
		storeCard: function(cardData) {
			console.log('data factory', cardData);
			return $http.post('/newCard', cardData).then(function(res) {
				console.log('response:', res.data);
				return res.data
			})
		}
	}
})