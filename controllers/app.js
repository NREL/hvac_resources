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
      name: 'contact',
      url: '/contact',
      templateUrl: 'views/contact.html'
    })
    .state({
      name: 'contributors',
      url: '/contributors',
      templateUrl: 'views/contributors.html'
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
        name: 'types',
        url: '/types',
        templateUrl: 'views/boiler_types.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/boiler_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/boiler_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/boiler_procure.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/boiler_operation.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/boiler_cases.html'
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
        url: '/eems',
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
        url: '/eems',
        templateUrl: 'views/pump_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/pump_basics.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/pump_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/pump_operation.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/pump_tools.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/pump_cases.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/pump_types.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/pump_procure.html'
      }]
    })
    .state({
      name: 'steamtrap',
      url: '/steamtrap',
      templateUrl: 'views/steamtrap.html',
      children: [{
        name: 'design',
        url: '/eems',
        templateUrl: 'views/steamtrap_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/steamtrap_basics.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/steamtrap_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/steamtrap_operation.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/steamtrap_tools.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/steamtrap_cases.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/steamtrap_types.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/steamtrap_procure.html'
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
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/ahu_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/ahu_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/ahu_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/ahu_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/ahu_tools.html'
      }]
    })
    .state({
      name: 'pipe',
      url: '/pipe',
      templateUrl: 'views/pipe.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/pipe_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/pipe_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/pipe_types.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/pipe_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/pipe_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/pipe_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/pipe_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/pipe_tools.html'
      }]
    })
    .state({
      name: 'coolthermal',
      url: '/cool_thermal',
      templateUrl: 'views/cool_thermal.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/cool_thermal_design.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/cool_thermal_types.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/cool_thermal_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/cool_thermal_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/cool_thermal_procure.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/cool_thermal_operation.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/cool_thermal_cases.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/cool_thermal_basics.html'
      }]

    })
    .state({
      name: 'hotthermal',
      url: '/hot_thermal',
      templateUrl: 'views/hot_thermal.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/hot_thermal_design.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/hot_thermal_types.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/hot_thermal_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/hot_thermal_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/hot_thermal_procure.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/hot_thermal_operation.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/hot_thermal_cases.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/hot_thermal_basics.html'
      }]

    })
    .state({
      name: 'expansion',
      url: '/expansion_tank',
      templateUrl: 'views/expansion.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/expansion_design.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/expansion_types.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/expansion_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/expansion_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/expansion_procure.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/expansion_operation.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/expansion_cases.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/expansion_basics.html'
      }]

    })
    .state({
      name: 'exchanger',
      url: '/exchanger',
      templateUrl: 'views/exchanger.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/exchanger_design.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/exchanger_types.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/exchanger_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/exchanger_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/exchanger_procure.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/exchanger_operation.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/exchanger_cases.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/exchanger_basics.html'
      }]
    })
    .state({
      name: 'sensors_controls',
      url: '/sensors_controls',
      templateUrl: 'views/sensors_controls.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/sensors_controls_design.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/sensors_controls_types.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/sensors_controls_codes.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/sensors_controls_tools.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/sensors_controls_procure.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/sensors_controls_operation.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/sensors_controls_cases.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/sensors_controls_basics.html'
      }]
    })

    .state({
      name: 'valve',
      url: '/valve',
      templateUrl: 'views/valve.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/valve_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/valve_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/valve_types.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/valve_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/valve_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/valve_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/valve_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/valve_tools.html'
      }]
    })
    .state({
      name: 'duct',
      url: '/duct',
      templateUrl: 'views/duct.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/duct_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/duct_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/duct_types.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/duct_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/duct_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/duct_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/duct_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/duct_tools.html'
      }]
    })
    .state({
      name: 'vav',
      url: '/vav',
      templateUrl: 'views/vav.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/vav_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/vav_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/vav_types.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/vav_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/vav_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/vav_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/vav_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/vav_tools.html'
      }]
    })
    .state({
      name: 'terminal',
      url: '/terminal',
      templateUrl: 'views/terminal.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/terminal_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/terminal_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/terminal_types.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/terminal_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/terminal_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/terminal_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/terminal_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/terminal_tools.html'
      }]
    })
    .state({
      name: 'diffuser',
      url: '/diffuser',
      templateUrl: 'views/diffuser.html',
      children: [{
        name: 'design',
        url: '/design',
        templateUrl: 'views/diffuser_design.html'
      }, {
        name: 'basics',
        url: '/basics',
        templateUrl: 'views/diffuser_basics.html'
      }, {
        name: 'types',
        url: '/types',
        templateUrl: 'views/diffuser_types.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/diffuser_cases.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/diffuser_codes.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/diffuser_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/diffuser_procure.html'
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/diffuser_tools.html'
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
      }, {
        name: 'tools',
        url: '/tools',
        templateUrl: 'views/fan_tools.html'
      }, {
        name: 'cases',
        url: '/cases',
        templateUrl: 'views/fan_cases.html'
      }, {
        name: 'operation',
        url: '/operation',
        templateUrl: 'views/fan_operation.html'
      }, {
        name: 'procure',
        url: '/procure',
        templateUrl: 'views/fan_procure.html'
      }, {
        name: 'codes',
        url: '/codes',
        templateUrl: 'views/fan_codes.html'
      }, {
        name: 'tune',
        url: '/tune',
        templateUrl: 'views/fan_tune.html'
      }]
    })
    .state({
      name: 'laboratories',
      url: '/laboratories',
      templateUrl: 'views/laboratories.html',
      children: [{
        name: 'boiler_basics',
        nav: 'boiler',
        url: '/boiler_basics',
        templateUrl: 'views/boiler_basics.html'
      }, {
        name: 'codes',
        nav: 'boiler',
        url: '/codes',
        templateUrl: 'views/boiler_codes.html'
      }, {
        name: 'design',
        nav: 'boiler',
        url: '/design',
        templateUrl: 'views/boiler_design.html'
      }, {
        name: 'tools',
        nav: 'boiler',
        url: '/tools',
        templateUrl: 'views/boiler_tools.html'
      }, {
        name: 'operation',
        nav: 'boiler',
        url: '/operation',
        templateUrl: 'views/boiler_operation.html'
      }, {
        name: 'procure',
        nav: 'boiler',
        url: '/procure',
        templateUrl: 'views/boiler_procure.html'
      }, {
        name: 'cases',
        nav: 'boiler',
        url: '/cases',
        templateUrl: 'views/boiler_cases.html'
      }, {
        name: 'chiller_basics',
        nav: 'chiller',
        url: '/chiller_basics',
        templateUrl: 'views/chiller_basics.html'
      }, {
        name: 'chiller_codes',
        nav: 'chiller',
        url: '/chiller_codes',
        templateUrl: 'views/chiller_codes.html'
      }, {
        name: 'chiller_design',
        nav: 'chiller',
        url: '/chiller_design',
        templateUrl: 'views/chiller_design.html'
      }, {
        name: 'chiller_tools',
        nav: 'chiller',
        url: '/chiller_tools',
        templateUrl: 'views/chiller_tools.html'
      }, {
        name: 'chiller_operation',
        nav: 'chiller',
        url: '/chiller_operation',
        templateUrl: 'views/chiller_operation.html'
      }, {
        name: 'chiller_procure',
        nav: 'chiller',
        url: '/chiller_procure',
        templateUrl: 'views/chiller_procure.html'
      }, {
        name: 'chiller_cases',
        nav: 'chiller',
        url: '/chiller_cases',
        templateUrl: 'views/chiller_cases.html'
      }, {
        name: 'tower_basics',
        nav: 'tower',
        url: '/tower_basics',
        templateUrl: 'views/tower_basics.html'
      }, {
        name: 'tower_cases',
        nav: 'tower',
        url: '/tower_cases',
        templateUrl: 'views/tower_cases.html'
      }, {
        name: 'tower_types',
        nav: 'tower',
        url: '/tower_types',
        templateUrl: 'views/tower_types.html'
      }, {
        name: 'tower_operation',
        nav: 'tower',
        url: '/tower_operation',
        templateUrl: 'views/tower_operation.html'
      }, {
        name: 'tower_procure',
        nav: 'tower',
        url: '/tower_procure',
        templateUrl: 'views/tower_procure.html'
      }, {
        name: 'tower_tools',
        nav: 'tower',
        url: '/tower_tools',
        templateUrl: 'views/tower_tools.html'
      }, {
        name: 'tower_design',
        nav: 'tower',
        url: '/tower_design',
        templateUrl: 'views/tower_design.html'
      }, {
        name: 'tower_codes',
        nav: 'tower',
        url: '/tower_codes',
        templateUrl: 'views/tower_codes.html'
      }, {
        name: 'pump_basics',
        nav: 'pump',
        url: '/pump_basics',
        templateUrl: 'views/pump_basics.html'
      }, {
        name: 'pump_codes',
        nav: 'pump',
        url: '/pump_codes',
        templateUrl: 'views/pump_codes.html'
      }, {
        name: 'pump_operation',
        nav: 'pump',
        url: '/pump_operation',
        templateUrl: 'views/pump_operation.html'
      }, {
        name: 'pump_tools',
        nav: 'pump',
        url: '/pump_tools',
        templateUrl: 'views/pump_tools.html'
      }, {
        name: 'pump_cases',
        nav: 'pump',
        url: '/pump_cases',
        templateUrl: 'views/pump_cases.html'
      }, {
        name: 'pump_procure',
        nav: 'pump',
        url: '/pump_procure',
        templateUrl: 'views/pump_procure.html'
      }, {
        name: 'pump_design',
        nav: 'pump',
        url: '/pump_eems',
        templateUrl: 'views/pump_design.html'
      }, {
        name: 'sensor_basics',
        nav: 'sensor',
        url: '/sensor_basics',
        templateUrl: 'views/sensors_controls_basics.html'
      }, {
        name: 'sensor_operation',
        nav: 'sensor',
        url: '/sensor_operation',
        templateUrl: 'views/sensors_controls_operation.html'
      }, {
        name: 'cool_basics',
        nav: 'cool',
        url: '/cool_basics',
        templateUrl: 'views/cool_thermal_basics.html'
      }, {
        name: 'hot_basics',
        nav: 'hot',
        url: '/hot_basics',
        templateUrl: 'views/hot_thermal_basics.html'
      }, {
        name: 'ahu_design_lab',
        nav: 'ahu',
        url: '/ahu_design_lab',
        templateUrl: 'views/ahu_design_lab.html'
      }, {
        name: 'ahu_basics',
        nav: 'ahu',
        url: '/ahu_basics',
        templateUrl: 'views/ahu_basics.html'
      }, {
        name: 'ahu_types',
        nav: 'ahu',
        url: '/ahu_types',
        templateUrl: 'views/ahu_types.html'
      }, {
        name: 'ahu_cases',
        nav: 'ahu',
        url: '/ahu_cases',
        templateUrl: 'views/ahu_cases.html'
      }, {
        name: 'ahu_codes',
        nav: 'ahu',
        url: '/ahu_codes',
        templateUrl: 'views/ahu_codes.html'
      }, {
        name: 'ahu_operation',
        nav: 'ahu',
        url: '/ahu_operation',
        templateUrl: 'views/ahu_operation.html'
      }, {
        name: 'ahu_procure',
        nav: 'ahu',
        url: '/ahu_procure',
        templateUrl: 'views/ahu_procure.html'
      }, {
        name: 'ahu_tools',
        nav: 'ahu',
        url: '/ahu_tools',
        templateUrl: 'views/ahu_tools.html'
      }, {
        name: 'ahu_alt_hvac',
        nav: 'ahu',
        url: '/ahu_alt_hvac',
        templateUrl: 'views/ahu_alt_hvac.html'
      }, {
        name: 'ahu_operation_lab',
        nav: 'ahu',
        url: '/ahu_operaton_lab',
        templateUrl: 'views/ahu_operation_lab.html'
      }, {
        name: 'duct_basics_lab',
        nav: 'duct',
        url: '/duct_basics_lab',
        templateUrl: 'views/duct_basics_lab.html'
      }, {
        name: 'steamtrap_basics',
        nav: 'steamtrap',
        url: '/steamtrap_basics',
        templateUrl: 'views/steamtrap_basics.html'
      }, {
        name: 'steamtrap_tools',
        nav: 'steamtrap',
        url: '/steamtrap_tools',
        templateUrl: 'views/steamtrap_tools.html'
      }, {
        name: 'fan_design',
        nav: 'fan',
        url: '/fan_design',
        templateUrl: 'views/fan_design.html'
      }, {
        name: 'fan_basics',
        nav: 'fan',
        url: '/fan_basics',
        templateUrl: 'views/fan_basics.html'
      }, {
        name: 'fan_types',
        nav: 'fan',
        url: '/fan_types',
        templateUrl: 'views/fan_types.html'
      }, {
        name: 'fan_tools',
        nav: 'fan',
        url: '/fan_tools',
        templateUrl: 'views/fan_tools.html'
      }, {
        name: 'fan_cases',
        nav: 'fan',
        url: '/fan_cases',
        templateUrl: 'views/fan_cases.html'
      }, {
        name: 'fan_operation',
        nav: 'fan',
        url: '/fan_operation',
        templateUrl: 'views/fan_operation.html'
      }, {
        name: 'fan_procure',
        nav: 'fan',
        url: '/fan_procure',
        templateUrl: 'views/fan_procure.html'
      }, {
        name: 'fan_codes',
        nav: 'fan',
        url: '/fan_codes',
        templateUrl: 'views/fan_codes.html'
      }, {
        name: 'fan_tuneup',
        nav: 'fan',
        url: '/fan_tuneup',
        templateUrl: 'views/fan_tune.html'
      }, {
        name: 'lab_diffuser_basics',
        nav: 'diffuser',
        url: '/lab_diffuser_basics',
        templateUrl: 'views/diffuser_basics_lab.html'
      }, {
        name: 'pipe_design',
        nav: 'pipe',
        url: '/pipe_design',
        templateUrl: 'views/pipe_design.html'
      }, {
        name: 'pipe_basics',
        nav: 'pipe',
        url: '/pipe_basics',
        templateUrl: 'views/pipe_basics.html'
      }, {
        name: 'pipe_tools',
        nav: 'pipe',
        url: '/pipe_tools',
        templateUrl: 'views/pipe_tools.html'
      }, {
        name: 'pipe_operation',
        nav: 'pipe',
        url: '/pipe_operation',
        templateUrl: 'views/pipe_operation.html'
      }, {
        name: 'pipe_procure',
        nav: 'pipe',
        url: '/pipe_procure',
        templateUrl: 'views/pipe_procure.html'
      }, {
        name: 'pipe_codes',
        nav: 'pipe',
        url: '/pipe_codes',
        templateUrl: 'views/pipe_codes.html'
      }, {
        name: 'valve_basics',
        nav: 'valve',
        url: '/valve_basics',
        templateUrl: 'views/valve_basics.html'
      }, {
        name: 'valve_cases',
        nav: 'valve',
        url: '/valve_cases',
        templateUrl: 'views/valve_cases.html'
      }, {
        name: 'valve_types',
        nav: 'valve',
        url: '/valve_types',
        templateUrl: 'views/valve_types.html'
      }, {
        name: 'valve_operation',
        nav: 'valve',
        url: '/valve_operation',
        templateUrl: 'views/valve_operation.html'
      }, {
        name: 'valve_procure',
        nav: 'valve',
        url: '/valve_procure',
        templateUrl: 'views/valve_procure.html'
      }, {
        name: 'valve_tools',
        nav: 'valve',
        url: '/valve_tools',
        templateUrl: 'views/valve_tools.html'
      }, {
        name: 'valve_design',
        nav: 'valve',
        url: '/valve_design',
        templateUrl: 'views/valve_design.html'
      }, {
        name: 'valve_codes',
        nav: 'valve',
        url: '/valve_codes',
        templateUrl: 'views/valve_codes.html'
      }, {
        name: 'demand_vent_basics',
        nav: 'demand_vent',
        url: '/demand_vent_basics',
        templateUrl: 'views/demand_vent_basics.html'
      }, {
        name: 'lab_vav_basics',
        nav: 'lab_vav',
        url: '/lab_vav_basics',
        templateUrl: 'views/lab_vav_basics.html'
      }, {
        name: 'occupancy_sensor_basics',
        nav: 'occupancy_sensor',
        url: '/occupancy_sensor_basics',
        templateUrl: 'views/occupancy_sensor_basics.html'
      }, {
        name: 'energy_recovery_basics',
        nav: 'energy_recovery',
        url: '/energy_recovery_basics',
        templateUrl: 'views/energy_recovery_basics.html'
      }, {
        name: 'exposure_control_basics',
        nav: 'exposure_control',
        url: '/exposure_control_basics',
        templateUrl: 'views/exposure_control_basics.html'
      }, {
        name: 'exposure_control_types',
        nav: 'exposure_control',
        url: '/exposure_control_types',
        templateUrl: 'views/exposure_control_types.html'
      }, {
        name: 'exposure_control_eems',
        nav: 'exposure_control',
        url: '/exposure_control_eems',
        templateUrl: 'views/exposure_control_eems.html'
      }, {
        name: 'exposure_control_tools',
        nav: 'exposure_control',
        url: '/exposure_control_tools',
        templateUrl: 'views/exposure_control_tools.html'
      }, {
        name: 'exposure_control_operations',
        nav: 'exposure_control',
        url: '/exposure_control_operations',
        templateUrl: 'views/exposure_control_operations.html'
      }, {
        name: 'bldg_modeling_basics',
        nav: 'lab_vent',
        url: '/bldg_modeling_basics',
        templateUrl: 'views/bldg_modeling_basics.html'
      }, {
        name: 'lab_vent_basics',
        nav: 'lab_vent',
        url: '/lab_vent_basics',
        templateUrl: 'views/lab_vent_basics.html'
      }, {
        name: 'lab_vent_cfd',
        nav: 'lab_vent',
        url: '/lab_vent_cfd',
        templateUrl: 'views/lab_vent_cfd.html'
      }, {
        name: 'exhaust_stack_basics',
        nav: 'exhaust_stack',
        url: '/exhaust_stack_basics',
        templateUrl: 'views/exhaust_stack_basics.html'
      }, {
        name: 'lab_vavsystems_basics',
        nav: 'lab_vavsystems',
        url: '/lab_vavsystems_basics',
        templateUrl: 'views/lab_vavsystems_basics.html'

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
    // $log.debug('$stateChangeStart');
  });
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    // $log.debug('$stateChangeSuccess');
  });
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    $log.error('Unhandled state change error:', error);
    //$state.go('home');
  });
  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    $log.error('State not found:', unfoundState.to);
  });
}]);

routerApp.controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.state = $state;

  $scope.svg = function () {
    if ($state.current.name) {
      if (/^laboratories/.test($state.current.name)) {
        return 'img/labdiagram3.svg';
      } else {
        return 'img/hvacdiagram.svg';
      }
    }
  };

  $scope.diagramClass = function () {
    if ($state.current.name) {

      var names = [
        'laboratories.demand_vent_basics',
        'laboratories.energy_recovery_basics',
        'laboratories.exhaust_stack_basics',
        'laboratories.lab_vav_basics',
        'laboratories.lab_vavsystems_basics',
        'laboratories.occupancy_sensor_basics'
      ];
      for (var i = 0; i < names.length; ++i) {
        var name = names[i];
        if (name === $state.current.name) {
          return 'diagram-' + name.replace('.', '-');
        }
      }

      var prefixes = [
        'ahu',
        'boiler',
        'chiller',
        'coolthermal',
        'diffuser',
        'duct',
        'exchanger',
        'expansion',
        'fan',
        'hotthermal',
        'pipe',
        'pump',
        'steamtrap',
        'terminal',
        'tower',
        'valve'
      ];
      for (var i = 0; i < prefixes.length; ++i) {
        var prefix = prefixes[i];
        var re = new RegExp('^' + prefix + '(?:\\.[a-z]+)?$');
        if (re.test(($state.current.name))) {
          return 'diagram-' + prefix;
        }
      }
    }
  }
}]);
