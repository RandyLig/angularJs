'use strict';
angular.module('app').controller('positionCtrl', ['$q','$http','$state', '$scope','cache', function($q, $http,  $state, $scope, cache){
    $scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin?'投个简历':'去登录';
    function getPosition() {
        /*延迟加载*/
        var def = $q.defer();
        $http.get('data/position.json?id='+$state.params.id).success(function (resp) {
            if (resp.posted) {
                $scope.message = '已投递';
            }
            $scope.position =resp;
            def.resolve(resp);
        }).error(function (err) {
            def.reject(err);
        });
        return def.promise;
    }
    /*根据ID显示相应公司*/
    function getCompany(id) {
        $http.get('data/company.json?id='+id).success(function (resp) {
            $scope.company = resp;
        })
    }
    /*拿到该position中公司的ID*/
    getPosition().then(function (obj){
        getCompany(obj.companyId);
    });

   /* $http.get('data/position.json', {params: {id: $state.params.id}}).success(function(resp) {
        $scope.position = resp;
    })*/
    $scope.go = function () {
        if ($scope.isLogin && $scope.message !== '已投递'){
            if ($scope.isLogin) {
                $http.post('/data/handle.json',{
                    id: $scope.position.id
                }).success(function (res) {
                    console.log(res);
                    $scope.message = '已投递';
                })
            }else {
                $state.go('login');
            }
        }
    }
}]);
