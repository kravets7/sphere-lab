(function() {
    'use strict';

    angular
        .module('sphereLab')
        .controller('AuthController', AuthController);

    /** @ngInject */
    function AuthController($scope, $rootScope, $timeout, toastr, $state, RestService, LocalStorage) {
        $scope.login = function (event) {
            event.preventDefault();
            RestService.login($scope.email, $scope.password)
                .success(function (res) {
                    if (res.success) {
                        LocalStorage.setItem('token', res.data.token);
                        LocalStorage.setItem('id', res.data.user._id);
                        $rootScope.User = res.data.user;
                        $state.go('app.home');
                    } else {
                        toastr.error(res.message, 'Error');
                    }
                })
                .error(function (err) {
                    console.log(err);
                    toastr.error(err.data.message || err.message, 'Error');
                });
        }
    }
})();