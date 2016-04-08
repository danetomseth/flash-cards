app.controller('CategoryController', function ($scope, FlashCardsFactory, $stateParams, CurrentCategory) {

    var categoryName = $stateParams.categoryName;

    CurrentCategory.currentCategory = categoryName;

    console.lo

    $scope.flashCards = [];

    var setFlashCards = function (cards) {
        $scope.flashCards = cards;
    };

    if (categoryName === 'All') {
        FlashCardsFactory.getFlashCards().then(setFlashCards);
    } else {
        FlashCardsFactory.getFlashCards(categoryName).then(setFlashCards)
    }

});