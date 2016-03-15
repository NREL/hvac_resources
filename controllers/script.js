/* global angular */
(function() {
  
var app = angular.module('app', []);

app.controller('SidebarController', function($scope) {
    
    $scope.state = false;
    
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
});

app.directive('sidebarDirective', function() {
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
  
  
}())

angular.module('directoryApp',['ngAnimate','ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        
       $urlRouterProvider.otherwise('/');  
        $stateProvider
        .state('home', {
            url:'/',
            templateUrl:'views/home.html',
            controller:'directoryController as dirList'
        })
        .state('test', {
            url:'/test',
            templateUrl:'views/myfixed.html'
        })
                .state('test2', {
            url:'/test2',
            templateUrl:'views/indexa.html'
        });
    })