(function() {
    'use strict';

    angular
        .module('sphereLab')
        .controller('CreatePostController', CreatePostController);

    /** @ngInject */
    function CreatePostController($scope, $rootScope, $timeout, $state, toastr, RestService, moment, LocalStorage) {
        $timeout(function () {
        }, 200);

        document.getElementById('file').addEventListener('change', function (event) {
            var file = event.target.files[0];
            if (file) {
                RestService.uploadFile(file)
                    .then(function (res) {
                        console.log(res);
                        $scope.postUrl = res.data.data.file;
                    }, function (err) {
                        console.log(err);
                    }, function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                    });
            }
        });

        $scope.createPost = function () {
            RestService.createPost($scope.message, $scope.postUrl)
                .success(function (res) {
                    console.log(res);
                    if (res.success) {
                        $state.go('app.my');
                    } else {
                        toastr.error(res.message, 'Error');
                    }
                })
                .error(function (err) {
                    toastr.error(err.data.message || err.message, 'Error');
                });
        };
    }
})();