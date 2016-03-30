var routerApp = angular.module('routerApp', ['ui.router','ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
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
        templateUrl: 'views/boiler_design.html',
    })

    .state('boiler.basics', {
        url: '/basics',
        templateUrl: 'views/boiler_basics.html',
    })
 
 
     // Chiller STATES AND NESTED VIEWS ========================================
    .state('chiller', {
        url: '/chiller',
        templateUrl: 'views/chiller.html'
    })

    // nested list with custom controller
    .state('chiller.list', {
        url: '/list',
        templateUrl: 'views/chiller_design.html',
    })

    // nested list with just some random string data
    .state('chiller.paragraph', {
        url: '/paragraph',
        templateUrl: 'views/chiller_basics.html',
    })


}); // closes $routerApp.config()


/*// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});*/


routerApp.controller('leftnavController', function($scope) {
    
    $scope.state = false;
    
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
});

routerApp.directive('sidebarDirective', function() {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show'); 
                    return;
                  }
                  element.removeClass('show');
            });
        }
    };
});