(function() {
    'use strict';

    angular
        .module('sphereLab')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $timeout, toastr, LocalStorage, $state) {
        $scope.logout = function () {
            LocalStorage.removeItem('token');
            LocalStorage.removeItem('id');
            $state.go('auth');
        }
    }
})();
