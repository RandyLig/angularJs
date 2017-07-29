'use strict';
angular.module('app').directive('appPositionClass',[function () {
    return {
        restrict: 'A',
        /*替换*/
        replace: true,
        scope: {
            com: '='
        },
        /*模板位置*/
        templateUrl: 'view/template/positionClass.html',
        link: function ($scope) {
            $scope.showPositionList = function (idx) {
                $scope.positionList = $scope.com.positionClass[idx].positionList;
                $scope.isActive = idx;
            };
            // 作用域
            $scope.$watch('com', function(newVal){
                if(newVal) $scope.showPositionList(0);
            });
        }

    };
}]);