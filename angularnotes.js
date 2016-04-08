//Testing notes:






app.module ////


app.controller('Ctrl', function($scope, $state, SomeFactory) {
    $scope.mainArray = [];

    $scope.loadValues = function() {
        $scope.showValue = true;
        SomeFactory.getSomeModel().then(function(response) {
            $scope.mainArray = response;
            $state.go('stateName', {
                paramId: param._id
            })
        })
    }

    $scope.loadValues()
})



app.directive('directiveName', function(someFactory) {
    return {
        restrict: 'A', //A
        templateUrl: 'js/blah/blah.html',
        scope: {
            aItem: "=" // aItem="item" //item in items 
        },
        link: function(scope) {
            ///scope is scope in controller/factory
            scope.value = true
            scope.someFunc = function(arg) {
                if (scope.value) {
                    return
                }
            } else {
                someFactory.anotherFunc()....
            }
        }
    }
})

app.directive('borderOnHover', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.on('mouseenter', function() {
                element.addClass('border-on-hover');
            });

            element.on('mouseleave', function() {
                element.removeClass('border-on-hover');
            });
        }
    }
})
//<li border-on-hover></>
// .border-on-hover {
//   border: 5px solid red !important; }


app.factory('SomeFactory', function($http) {
    return {
        getSomeModel: function(input) {
            var params = {};
            if (input) {
                params.category = input
            }

            return $http.get('/someUrl', {
                params: params
            }).then(function(response) {
                return response.data
            })
        },

        fetchbyId: function(id) {
            return $http.get('/api/model' + id).then(function(res) {
                return res.data
            }).then(function(newData) {
                someFuncOnData() /////
                return newData
            })
        },

        fetchAll: function() {
            return $http.get('/api/model')
                .then(function(response) {
                    angular.copy(response.data, cachedData);
                    return cachedData;
                })
        }
    }
})


app.config(function($stateProvider) {
    $stateProvider.state('stateName', {
        url: '/blah/:someId',
        templateUrl: '/..../...',
        controller: 'stateCtrl',
        resolve: {
            valueArray: function(SomeFactory, $stateParams) {
                return SomeFacotry.fetchbyId($stateParams.someId)
            }
        }
    });
    $stateProvider.state('stateName.detail', {
        url: '/detail',
        templateUrl: '/blah/.....html'
    });

    //<anotherDirective-list someProp="stateName.detail"></anotherDirective-list>

})




$state


/////////////////////Backend//////////////////////
Model
    .create(req.body)
    .then(function(data) {
        res.status(201).json(data);
    })
    .then(null, next);



router.post('/:playlistId/songs', function(req, res, next) {
    req.playlist.songs.addToSet(req.body.song);
    req.playlist.save()
        .then(() => mongoose.model('Song').findById(req.body.song._id || req.body.song).populate('artists'))
        .then(song => res.status(201).json(song))
        .then(null, next);
});