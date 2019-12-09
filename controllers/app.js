var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'ui.router.stateHelper']);

routerApp.config(function (stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/').otherwise('/');

    stateHelperProvider
        .state('home', {
            url: "/",
            views: {
                "viewA": {
                    template: "index.viewA"
                },
                "viewB": {
                    template: "index.viewB"
                }
            }
        })
        .state('contact', {
            url: "/contact",
            views: {
                "viewA": {
                    templateUrl: 'views/hvac_diagram.html'
                },
                "viewB": {
                    templateUrl: 'contact.html'
                }
            }
        })
        .state('central_plant', {
            url: "/central_plant",
            views: {
                "viewA": {
                    templateUrl: 'views/labs_diagram.html'
                },
                "viewB": {
                    templateUrl: 'views/central_plant.html'
                }
            }
        })
});
