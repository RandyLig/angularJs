'use strict';
angular.module('app').directive('appHeadBar',function () {
    return {
        restrict: 'A',
        /*替换*/
        replace: true,
        /*模板位置*/
        templateUrl: 'view/template/headBar.html',
        scope: {
            text: '@'
        },
        link: function ($scope) {
            $scope.back = function () {
                window.history.back();
            };
        }
    }
});