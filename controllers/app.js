var routerApp = angular.module('routerApp', ['ui.router','ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
$urlRouterProvider.otherwise('/home');
    
 $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html'
    })

    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'views/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'some text here'
    })
     .state('boiler', {
        url: '/boiler',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'views/partial-boiler.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@boiler': { 
                templateUrl: 'views/about_boiler.html'},

            // for column two, we'll define a separate controller 
            'columnTwo@boiler': { 
                templateUrl: 'views/boiler_basics.html'}
        }
        
    })
    .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'views/partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { 
                templateUrl: 'views/about.html'},

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'views/chiller_basics.html'}
        }
        
    });

}); // closes $routerApp.config()


// let's define the scotch controller that we call up in the about state
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
    
});


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