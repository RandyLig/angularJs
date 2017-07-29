'use strict';

angular.module('app').directive('appCompany',function () {
    return {
        restrict: 'A',
        /*替换*/
        replace: true,
        /*模板位置*/
        templateUrl: 'view/template/company.html',
        scope: {
            data: '=',
            com: '='
        }
    }
});