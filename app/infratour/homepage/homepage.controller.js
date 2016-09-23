(function() {
    'use strict';

    angular
        .module('app.infratour.homepage')
        .controller('HomePageController', HomePageController);

    /* @ngInject */
    function HomePageController($http, $mdToast, triLoaderService) {
        var oxygennaAPIUrl = 'http://api.oxygenna.com';
        var vm = this;
        vm.data = {
            id: '11711437',
            purchaseCode: '',
            homepageUser: ''
        };
        vm.register = register;
        vm.userSearch = userSearch;

        clearForm();

        ////////////////

        function register() {
            triLoaderService.setLoaderActive(true);

            $http.put(oxygennaAPIUrl + '/register-homepage-access', vm.data).
            then(function() {
                // everything went ok
                triLoaderService.setLoaderActive(false);
                popAToast('Success!  Check your homepage email for your invite.');
            }, registerError);

            function registerError(response) {
                // something went wrong
                triLoaderService.setLoaderActive(false);
                if(angular.isDefined(response.data.error)) {
                    popAToast(response.data.error);
                }
            }
        }

        function userSearch (query) {
            return $http.get('https://api.homepage.com/search/users?q=' + query + '+type:user+in:login').
            then(function(response) {
                // get the items
                return response.data.items;
            });
        }

        function clearForm() {
            vm.data.purchaseCode = '';
            vm.data.homepageUser = '';
        }

        function popAToast(message) {
            var toast = $mdToast.simple({
                hideDelay: false
            })
            .content(message)
            .action('OK')
            .highlightAction(false)
            .position('bottom right');

            return $mdToast.show(toast);
        }

    }
})();