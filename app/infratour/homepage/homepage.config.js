(function() {
    'use strict';

    angular
        .module('app.infratour.homepage')
        .config(config);

    /* @ngInject */
    function config($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/infratour/homepage');

        $stateProvider
        .state('triangular.admin-default.homepage', {
            url: '/homepage',
            templateUrl: 'app/infratour/homepage/homepage.tmpl.html',
            controller: 'HomePageController',
            controllerAs: 'vm',
            data: {
                layout: {
                    toolbarSize: 'default',
                    toolbarShrink: true,
                    toolbarClass: '',
                    sideMenuSize: 'hidden',
                    footer: true,
                    contentClass: 'full-image-background mb-bg-fb-16 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                }
            }
        });

        triMenuProvider.addMenu({
            name: 'MENU.HOMEPAGE.HOMEPAGE',
            state: 'triangular.admin-default.homepage',
            type: 'link',
            icon: 'fa fa-github',
            priority: 2.2
        });
    }
})();