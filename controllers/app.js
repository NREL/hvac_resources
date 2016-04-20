var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })

    // Space Loads NESTED VIEWS ========================================
    .state('space_loads', {
      url: '/space_loads',
      templateUrl: 'views/space_loads.html'
    })

    // Central Plant NESTED VIEWS ========================================
    .state('central_plant', {
      url: '/central_plant',
      templateUrl: 'views/central_plant.html'
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
    .state('chiller.types', {
      url: '/types',
      templateUrl: 'views/chiller_types.html'
    })

    // nested list with just some random string data
    .state('chiller.design', {
      url: '/chiller_design',
      templateUrl: 'views/chiller_design.html'
    })

    // nested list with just some random string data
    .state('chiller.basics', {
      url: '/basics',
      templateUrl: 'views/chiller_basics.html'
    })

    // nested list with just some random string data
    .state('chiller.codes', {
      url: '/chiller_codes',
      templateUrl: 'views/chiller_codes.html'
    })
    
      // nested list with just some random string data
    .state('chiller.tools', {
      url: '/chiller_tools',
      templateUrl: 'views/chiller_tools.html'
    })
  
        // nested list with just some random string data
    .state('chiller.procure', {
      url: '/chiller_procure',
      templateUrl: 'views/chiller_procure.html'
    })
  
          // nested list with just some random string data
    .state('chiller.cases', {
      url: '/chiller_cases',
      templateUrl: 'views/chiller_cases.html'
     }) 
  
          // nested list with just some random string data
    .state('chiller.operation', {
      url: '/chiller_operation',
      templateUrl: 'views/chiller_operation.html'
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


$(function() {
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



