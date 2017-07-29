'use strict';
angular.module('app').controller('favoriteCtrl', ['$http', '$scope', function($http, $scope){
    $http.get('/data/myFavorite.json').success(function (res) {
        $scope.list = res;
    });
}]);
