var app = angular.module('PortalApp', []);


app.controller('MainCtrl', function (ChartList, $scope, $rootScope, $location, $q, $http) {
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