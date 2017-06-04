(function () {
    'use strict';

    angular
        .module('sphereLab')
        .run(runBlock);

    /** @ngInject */
    function runBlock(LocalStorage, RestService, $rootScope, $state) {
        var token = LocalStorage.getItem('token');

        if (token) {
            RestService.getUser()
                .success(function (r) {
                    $rootScope.User = r;
                })
                .error(function (e) {
                    console.log(e);
                });
        }

        $rootScope.$on('$stateChangeStart', function (event, stateData, toParams, fromState) {
            if (stateData.auth) {
                if ($rootScope.User) return true;
                else if (token) {
                    RestService.getUser()
                        .success(function (r) {
                            $rootScope.User = r;
                            $state.go(stateData.name);
                        })
                        .error(function (e) {
                            console.log(e);
                            event.preventDefault();
                            $state.go("auth");
                        });
                } else {
                    event.preventDefault();
                    $state.go("auth");
                }
            }
        });
    }
})();
