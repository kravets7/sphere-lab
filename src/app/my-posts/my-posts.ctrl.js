(function() {
    'use strict';

    angular
        .module('sphereLab')
        .controller('MyPostsController', MyPostsController);

    /** @ngInject */
    function MyPostsController($scope, $rootScope, $timeout, $state, toastr, RestService, moment, LocalStorage) {
        $timeout(function () {
            var id = LocalStorage.getItem('id');
            $scope.posts = $rootScope.User.posts || [];
            if (id) {
                RestService.getUser(id)
                    .success(function (res) {
                        console.log(res);
                        if (res.success) {
                            $scope.posts = res.data.posts;
                            if (!$scope.posts.length) {
                                toastr.info('Sorry, you have not posts yet', 'Information');
                            }
                        } else {
                            toastr.error(res.message, 'Error');
                        }
                    })
                    .error(function (err) {
                        console.log(err);
                        toastr.error(res.data.message || res.message, 'Error');
                    });
            } else {
                $state.go('auth');
            }
        }, 200);

        $scope.getTime = function (time) {
            return moment(new Date(+time)).format('LLLL');
        };
    }
})();