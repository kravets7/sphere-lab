(function () {
    'use strict';

    angular
        .module('sphereLab')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('auth', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'app/auth/auth.html',
                        controller: 'AuthController'
                    }
                }
            })
            .state('home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController'
                    },
                    'content': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();