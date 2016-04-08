app.controller('MainController', function (CurrentCategory, $scope, $state, $stateParams) {

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = CurrentCategory;

    $scope.goToCategoryState = function (category) {
        $state.go('main.category', { categoryName: category });
    };

});