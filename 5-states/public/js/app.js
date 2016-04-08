var app = angular.module('FlashCards', ['ui.router']);

app.factory('CurrentCategory', function () {

    return {
        currentCategory: 'All'
    };

});

app.config(function ($locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/view/All');

});

app.config(function ($stateProvider) {

    $stateProvider
        .state('main', {
            url: '/view',
            templateUrl: 'templates/main.html',
            controller: 'MainController',
            abstract: true
        })
        .state('main.category', {
            url: '/:categoryName',
            templateUrl: 'templates/category.html',
            controller: 'CategoryController'
        });

    $stateProvider.state('add', {
        url: '/add',
        templateUrl: 'templates/add-form.html',
        controller: 'NewCardController'
    });
    //
    $stateProvider.state('stats', {
        url: '/stats',
        templateUrl: 'templates/stats.html',
        controller: 'StatsController'
    });

});