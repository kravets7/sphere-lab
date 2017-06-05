(function () {
    'use strict';

    angular
        .module('sphereLab')
        .service('RestService', RestService);

    /** @ngInject */
    function RestService($http, LocalStorage, Upload) {
        var endPoint = 'https://52.50.129.215:8091/api/v1';
        return {
            login: function (login, password) {
                return $http.post(endPoint + '/login/', {
                    "email": login,
                    "password": password,
                    "deviceUId": "sdgfddfghdfghjfdgh3454yh",
                    "deviceToken": ""
                })
            },
            createPost: function (message, url) {
                return $http.post(endPoint + '/post/59255e177672689c538bccac/', {
                    "message": message,
                    "url": url,
                    "postUsers": []
                }, {
                    headers: {'x-access-token': LocalStorage.getItem('token')}
                })
            },
            getUser: function (key) {
                return $http.get(endPoint + '/user/' + key, {
                    headers: {'x-access-token': LocalStorage.getItem('token')}
                })
            },
            feed: function (key) {
                return $http.get(endPoint + '/feed/', {
                    headers: {'x-access-token': LocalStorage.getItem('token')}
                })
            },
            uploadFile: function (file) {
                return Upload.upload({
                    url: 'http://52.50.129.215:8020/api/v1/en/uploadFiles/',
                    data: {file: file}
                });
            }
        }
    }
})();