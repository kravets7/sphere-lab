(function () {
    'use strict';

    angular
        .module('sphereLab')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        var parent =
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
            .state('app', {
                abstract: true,
                views   : {
                    'main@': {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'content@app': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController'
                    }
                },
                auth: true
            })
            .state('app.my', {
                url: '/my-posts',
                views: {
                    'content@app': {
                        templateUrl: 'app/my-posts/my-posts.html',
                        controller: 'MyPostsController'
                    }
                },
                auth: true
            })
            .state('app.create', {
                url: '/create',
                views: {
                    'content@app': {
                        templateUrl: 'app/createPost/createPost.html',
                        controller: 'CreatePostController'
                    }
                },
                auth: true
            });

        $urlRouterProvider.otherwise('/');
    }

})();