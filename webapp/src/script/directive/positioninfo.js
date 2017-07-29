'use strict';
angular.module('app').directive('appPositionInfo',['$http',function ($http) {
    return {
        restrict: 'A',
        /*替换*/
        replace: true,
        /*模板位置*/
        templateUrl: 'view/template/positionInfo.html',
        scope: {
            isActive: '=',
            isLogin: '=',
            pos: '='
        },
        link: function ($scope) {
            $scope.$watch('pos',function (newVal) {
                if (newVal){
                    $scope.imagePath = $scope.pos.select?'image/star-active.png':'image/star.png';
                }
            });
            $scope.favorite = function () {
                $http.post('data/favorite.json',
                {
                    id: $scope.pos.id,
                    select: !$scope.pos.select
                }).success(function () {
                    $scope.pos.select = !$scope.pos.select;
                    $scope.imagePath = $scope.pos.select?'image/star-active.png':'image/star.png';
                })
            }
        }
    }
}]);