var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'ui.router.stateHelper']);

routerApp.config(function (stateHelperProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/').otherwise('/');

  stateHelperProvider
    .state({
      name: 'home',
      url: '/',
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
         }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/ahu_types.html'
      }]
    })
    .state({
      name: 'space_loads',
      url: '/space_loads',
      templateUrl: 'views/space_loads.html'
    })
    .state({
      name: 'fan',
      url: '/fan',
      templateUrl: 'views/fan.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/fan_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/fan_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/fan_types.html'
      }]
    });

}); // closes $routerApp.config()


routerApp.run(['$rootScope', '$log', '$state', function ($rootScope, $log, $state) {
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

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    //$log.debug('$stateChangeStart');
  });
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    //$log.debug('$stateChangeSuccess');
  });
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    $log.error('Unhandled state change error:', error);
    //$state.go('home');
  });
  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    $log.error('State not found:', unfoundState.to);
  });
}]);
