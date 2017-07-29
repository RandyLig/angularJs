'use strict';
angular.module('app').directive('appHead',['cache',function (cache) {
    return {
        restrict: 'A',
        /*替换*/
        replace: true,
        /*模板位置*/
        templateUrl: 'view/template/head.html',
        link : function ($scope) {
            $scope.name = cache.get('name');
        }
    }
}]);