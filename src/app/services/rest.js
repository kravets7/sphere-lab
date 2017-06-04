(function () {
    'use strict';

    angular
        .module('sphereLab')
        .service('RestService', RestService);

    /** @ngInject */
    function RestService($http, LocalStorage) {
        var endPoint = 'https://52.50.129.215:8091/api/v1';
        return {
            login: function (login, password) {
                return $http.post(endPoint + 'login/', {
                    "email": login,
                    "password": password,
                    "deviceUId": "sdgfddfghdfghjfdgh3454yh",
                    "deviceToken": ""
                })
            },
            createPost: function (key, data) {
                localStorage.setItem(key, JSON.stringify(data));
            },
            getUser: function (key) {
                localStorage.removeItem(key);
            },
            clearStorage: function () {
                localStorage.clear();
            }
        }
    }
})();