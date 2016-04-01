var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'views/partial-home.html'
    })

    // Boiler STATES AND NESTED VIEWS ========================================
    .state('boiler', {
      url: '/boiler',
      templateUrl: 'views/boiler.html'
    })

    .state('boiler.design', {
      url: '/design',
      templateUrl: 'views/boiler_design.html'
    })

    .state('boiler.basics', {
      url: '/basics',
      templateUrl: 'views/boiler_basics.html'
    })


    // Chiller STATES AND NESTED VIEWS ========================================
    .state('chiller', {
      url: '/chiller',
      templateUrl: 'views/chiller.html'
    })

    // nested list with custom controller
    .state('chiller.design', {
      url: '/design',
      templateUrl: 'views/chiller_design.html'
    })

    // nested list with just some random string data
    .state('chiller.basics', {
      url: '/basics',
      templateUrl: 'views/chiller_basics.html'
    })
  
      // Pump STATES AND NESTED VIEWS ========================================
    .state('pump', {
      url: '/pump',
      templateUrl: 'views/pump.html'
    })

    // nested list with custom controller
    .state('pump.design', {
      url: '/design',
      templateUrl: 'views/pump_design.html'
    })

    // nested list with just some random string data
    .state('pump.basics', {
      url: '/basics',
      templateUrl: 'views/pump_basics.html'
    })


}); // closes $routerApp.config()

routerApp.controller('leftnavController', function ($scope) {

  $scope.state = false;

  $scope.toggleState = function () {
    $scope.state = !$scope.state;
  };

});

routerApp.directive('sidebarDirective', function () {
  return {
    link: function (scope, element, attr) {
      scope.$watch(attr.sidebarDirective, function (newVal) {
        if (newVal) {
          element.addClass('show');
          return;
        }
        element.removeClass('show');
      });
    }
  };
});
