var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'ui.router.stateHelper']);

routerApp.config(function (stateHelperProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  stateHelperProvider
    .state({
      name: 'home',
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state({
      name: 'central_plant',
      url: '/central_plant',
      templateUrl: 'views/central_plant.html'
    })
    .state({
      name: 'boiler',
      url: '/boiler',
      templateUrl: 'views/boiler.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/boiler_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/boiler_basics.html'
      }]
    })
    .state({
      name: 'chiller',
      url: '/chiller',
      templateUrl: 'views/chiller.html',
      children: [{
        name: 'types',
        url: '/types',
        templateUrl: 'views/chiller_types.html'
      }, {
        name: 'design',
        url: '/chiller_design',
        templateUrl: 'views/chiller_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/chiller_basics.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/chiller_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/chiller_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/chiller_procure.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/chiller_cases.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/chiller_operation.html'
      }]
    })
    .state({
      name: 'tower',
      url: '/tower',
      templateUrl: 'views/tower.html',
      children: [{
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/tower_basics.html'
          }, {
		name: 'design',
        url: '/design',
        templateUrl: 'views/tower_design.html'
        }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/tower_cases.html'
        }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/tower_codes.html'
        }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/tower_operation.html'
        }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/tower_procure.html'
        }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/tower_tools.html'
            }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/tower_types.html'
      }]
    })
    .state({
      name: 'pump',
      url: '/pump',
      templateUrl: 'views/pump.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/pump_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/pump_basics.html'
      }]
    })
    .state({
      name: 'distribution_system',
      url: '/distribution_system',
      templateUrl: 'views/distribution_system.html'
    })
    .state({
      name: 'ahu',
      url: '/ahu',
      templateUrl: 'views/ahu.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/ahu_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/ahu_basics.html'
      }]
    })
    .state({
      name: 'space_loads',
      url: '/space_loads',
      templateUrl: 'views/space_loads.html'
    })

}); // closes $routerApp.config()


$(function () {
  var $body = $('body');
  $body.on('mouseenter', '#diagram a', function (evt) {
    var id = $(evt.target).attr('id');
    console.debug('Hovering over ' + id);
  });
  $body.on('mouseleave', '#diagram a', function (evt) {
    var id = $(evt.target).attr('id');
    console.debug('Left ' + id);
  });
});

//not sure what this is for
/*
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
 */

//Hider
/*
 function MyCtrl($scope) {
 $scope.visible = fase;

 $scope.toggle = function() {
 $scope.visible = !$scope.hidden;
 };
 }
 */

/*
 $scope.hoverIn = function() {
 this.hoverEdit = true;
 };

 $scope.hoverOut = function() {
 this.hoverEdit = false;
 };*/
/* animation */



