'use strict';
angular.module('app').directive('appFooter',function () {
    return {
        restrict: 'A',
        /*替换*/
        replace: true,
        /*模板位置*/
        templateUrl: 'view/template/footer.html'
    }
});