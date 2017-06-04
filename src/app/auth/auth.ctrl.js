(function() {
    'use strict';

    angular
        .module('sphereLab')
        .controller('AuthController', AuthController);

    /** @ngInject */
    function AuthController($scope, $timeout, toastr, $state) {
        $scope.login = function (event) {
            event.preventDefault();
            $state.go('home');
        }
    }
})();
