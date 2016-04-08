var flashCards = angular.module('FlashCards', []);

flashCards.controller('MainController', function($scope, $http) {
    $http.get('/cards').then(function(res) {
        console.log(res);
        $scope.flashCards = res.data;
    })

});


flashCards.controller('FlashCardController', function($scope, $http) {

    $scope.answered = false;
    $scope.answeredCorrectly = null;

    $scope.flashCard = {
        question: 'What is Angular?',
        answers: [{
            text: 'A front-end framework for great power!',
            correct: true
        }, {
            text: 'Something lame, who cares, whatever.',
            correct: false
        }, {
            text: 'Some kind of fish, right?',
            correct: false
        }]
    };

    $scope.answerQuestion = function(answer) {

        if ($scope.answered) {
            return;
        }

        $scope.answered = true;
        $scope.answeredCorrectly = answer.correct;

    };

});