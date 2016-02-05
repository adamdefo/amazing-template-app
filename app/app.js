var app = angular.module('FuckApp', []);


app.controller('MainCtrl', function ($scope, $rootScope, $location, $q, $http) {
    $scope.location = $location.path();

});

app.factory('ChatList', function() {
    return [
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' }
    ];
});