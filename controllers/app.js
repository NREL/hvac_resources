var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'ui.router.stateHelper', 'ngMeta']);

routerApp.config(function (stateHelperProvider, $urlRouterProvider, ngMetaProvider) {

    $urlRouterProvider.when('', '/').otherwise('/');

    stateHelperProvider
        .state({
            name: 'home',
            url: '/',
            templateUrl: 'views/home.html',
            data: {
              meta: {
                'title': 'HVAC Resource Map Home',
                'description': 'This site provides access to a broad array of quality HVAC information on operations and maintenance best practices and energy and water efficiency measures. The resources cover the central plant, distribution systems, zone systems, and laboratory HVAC.'
              }
            }
        })
        .state({
            name: 'contact',
            url: '/contact',
            templateUrl: 'views/contact.html',
            data: {
              meta: {
                'title': 'Contact Up',
                'description': 'Form to contact us with questions/comments.'
              }
            }
        })
        .state({
            name: 'contributors',
            url: '/contributors',
            templateUrl: 'views/contributors.html',
            data: {
              meta: {
                'title': 'List of Contributors',
                'description': 'The people and institutions that contribute to maintaining and updating this site.'
              }
            }
        })
        .state({
            name: 'central_plant',
            url: '/central_plant',
            templateUrl: 'views/central_plant.html',
            data: {
              meta: {
                'title': 'HVAC Central Plant',
                'description': 'Central plants are the heart of the HVAC systems in large buildings or complexes of buildings. This section provides information on boilers, chillers, cooling towers, energy storage, pumps, water treatment systems, valves, pipes, sensors, and controls.'
              }
            }
        })
        .state({
            name: 'boiler',
            url: '/boiler',
            templateUrl: 'views/boiler.html',
            children: [{
                name: 'design',
                url: '/design',
                templateUrl: 'views/boiler_design.html',
                data: {
                  meta: {
                    'title': 'Boiler: Energy Efficiency Measures',
                    'description': 'Best practices for boiler efficiency and resources.'
                  }
                },
      }, {
                name: 'types',
                url: '/types',
                templateUrl: 'views/boiler_types.html'
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/boiler_codes.html',
                data: {
                  meta: {
                    'title': 'Boiler: Performance Ratings',
                    'description': 'Information on how boiler efficiency is measured.'
                  }
                },
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/boiler_tools.html',
                data: {
                  meta: {
                    'title': 'Boiler: Design Calculators and Tools',
                    'description': 'Tools for improving boiler performance. '
                  }
                },
                
      }, {
                name: 'procure',
                url: '/procure',
                templateUrl: 'views/boiler_procure.html',
                data: {
                  meta: {
                    'title': 'Boiler: Procurement and Performance',
                    'description': 'Help owners understand the key aspects of boiler energy efficiency and enable them to include appropriate language in the RFP to facilitate procurement of boilers with the desired features and efficiency levels.'
                  }
                },
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/boiler_operation.html',
                data: {
                  meta: {
                    'title': 'Boiler: Operation and Training',
                    'description': 'Resources to make sure your boiler is operating as designed.'
                  }
                },
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/boiler_cases.html',
                data: {
                  meta: {
                    'title': 'Boiler: Case Studies',
                    'description': 'Boiler cases studies show water and energy savings.'
                  }
                },
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/boiler_basics.html',
                data: {
                  meta: {
                    'title': 'Boiler: General Information',
                    'description': 'Information about boilers including types, performance, energy efficiency, calculators and tools, procurement, and case studies.'
                  }
                }
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
                templateUrl: 'views/chiller_design.html',
                data: {
                  meta: {
                    'title': 'Chiller: Energy Efficiency Measures',
                    'description': 'Chiller best practices, energy efficiency measures, and resources to help with chilled water plant design.'
                  }
                },
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/chiller_basics.html',
                data: {
                  meta: {
                    'title': 'Chiller: General Description and Uses',
                    'description': 'Chiller types, applications, drawbacks and typical capacities. Links to helpful resources.'
                  }
                },
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/chiller_codes.html',
                data: {
                  meta: {
                    'title': 'Chiller: Performance Ratings ',
                    'description': 'Information about performance measures and standards for chillers.'
                  }
                },
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/chiller_tools.html',
                data: {
                  meta: {
                    'title': 'Chiller: Design Calculators and Tools',
                    'description': 'Links to chiller performance calculator.'
                  }
                },
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
                templateUrl: 'views/tower_basics.html',
        
                data: {
                  meta: {
                    'title': 'Cooling Tower: General Description and Uses',
                    'description': 'Cooling tower basics, terms used, and links to resources.'
                  }
                },
      }, {
                name: 'design',
                url: '/design',
                templateUrl: 'views/tower_design.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Energy Efficiency Measures',
                    'description': 'Energy efficiency and water saving measures for cooling towers'
                  }
                },
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/tower_cases.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Case Studies',
                    'description': 'Examples of energy and water savings.'
                  }
                },
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/tower_codes.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Performance Ratings',
                    'description': 'Information on cooling tower test parameters.'
                  }
                },
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/tower_operation.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Operation and Training Resources',
                    'description': 'A list of cooling tower operational considerations and resources.'
                  }
                },
      }, {
                name: 'procure',
                url: '/procure',
                templateUrl: 'views/tower_procure.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Procurement and Performance Specifications',
                    'description': 'Resources for creating specifications for maintaining and operating cooling towers.'
                  }
                },
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/tower_tools.html',
                vdata: {
                  meta: {
                    'title': 'Cooling Tower: Design Calculators and Tools',
                    'description': 'Links to tools that can help with sizing and calculations for cooling tower design.'
                  }
                },
      }, {
                name: 'types',
                url: '/types',
                templateUrl: 'views/tower_types.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Types',
                    'description': 'Different types of cooling towers with the flow, advantages, disadvantages and diagrams of each.'
                  }
                }
      }]
        })
        .state({
            name: 'pump',
            url: '/pump',
            templateUrl: 'views/pump.html',
            children: [{
                name: 'design',
                url: '/eems',
                templateUrl: 'views/pump_design.html',
                data: {
                  meta: {
                    'title': 'Pump: Energy Efficiency Measures',
                    'description': 'List of key opportunities for improving pump efficiency. Efficient centrifugal pump selection, variable speed drives, life cycle cost analysis, and future capacity are discussed.'
                  }
                },
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/pump_basics.html',
                data: {
                  meta: {
                    'title': 'Pump: Basics',
                    'description': 'Pump information about end suction and inline pumps and links to resources to get more information.'
                  }
                },
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/pump_codes.html',
                data: {
                  meta: {
                    'title': 'Pump: Performance Ratings',
                    'description': 'What to monitor when testing pump performance. Definitions for common performance terms and measurements. Links to resources for more information.' 
                  }
                },
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/pump_operation.html',
                data: {
                  meta: {
                    'title': 'Pump: Operation and Training Resources',
                    'description': 'List of key opportunities for improving pump efficiency. Efficient centrifugal pump selection, variable speed drives, life cycle cost analysis, and future capacity are discussed.'
                  }
                },
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/pump_tools.html',
                data: {
                  meta: {
                    'title': 'Pump: Design Calculators and Tools',
                    'description': 'List of tools for pump optimization.'
                  }
                },
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/pump_cases.html',
                data: {
                  meta: {
                    'title': 'Pump: Case Studies',
                    'description': 'Case studies with demonstrated energy savings.'
                  }
                },
      }, {
                name: 'types',
                url: '/types',
                templateUrl: 'views/pump_types.html',
                
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
                templateUrl: 'views/steamtrap_basics.html',
                data: {
                  meta: {
                    'title': 'Steam Traps: Basics',
                    'description': 'Steam trap types with the operation driver, advantages, disadvantages, and application of each type compared in a table. Includes a list of resource links for more information.'
                  }
                },
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/steamtrap_codes.html'
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/steamtrap_operation.html',
                data: {
                  meta: {
                    'title': 'Steam Traps: Operation and Training',
                    'description': 'List of common steam trap failures that need to be tested. Links to helpful resources.'
                  }
                },
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/steamtrap_tools.html',
                data: {
                  meta: {
                    'title': 'Steam Traps: Design Calculators and Tools',
                    'description': 'List of tools to help with steam trap calculations.'
                  }
                },
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/steamtrap_cases.html',
                data: {
                  meta: {
                    'title': 'Steam Traps: Case Studies',
                    'description': 'List of case studies with demonstrated energy savings after fixing steam trap malfunction.'
                  }
                },
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
            templateUrl: 'views/distribution_system.html',
            data: {
              meta: {
                'title': 'Distribution System',
                'description': 'This HVAC distribution page links to information on all the all the equipment and controls to transfer thermal energy between the central plant and the building spaces. This includes the pumps, fans, pipes, ducts, valves, and air handling units.'
              }
            }
            
        })
        .state({
            name: 'ahu',
            url: '/ahu',
            templateUrl: 'views/ahu.html',
            children: [{
                name: 'design',
                url: '/design',
                templateUrl: 'views/ahu_design.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Energy Efficiency Measures',
                    'description': 'The key components of air handling unit (AHU) design are fans, coils, and filters. Energy effieciency measures for these components are discuss and resources provided.'
                  }
                }
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/ahu_basics.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: General Description and Uses',
                    'description': 'This page provides general information on AHU and links to other pages that cover types, performance ratings, energy efficiency measures, operation and training, procurement, and case studies.'
                  }
                }
      }, {
                name: 'types',
                url: '/types',
                templateUrl: 'views/ahu_types.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Types',
                    'description': 'List of types of AHUs including fan coil units, packaged air handling unit, modular air handling unit, and custom air handling unit.'
                  }
                }
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/ahu_cases.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Case Studies',
                    'description': 'Case study with energy savings results from AHU adjustments.'
                  }
                }
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/ahu_codes.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Performance Ratings',
                    'description': 'Information on air leakage measurement for air handling units (AHU).'
                  }
                }
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/ahu_operation.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Operation and Training Resources',
                    'description': 'A checklist for evaluating the efficiency of air handlers periodically and links to more detailed information.'
                  }
                }
      }, {
                name: 'procure',
                url: '/procure',
                templateUrl: 'views/ahu_procure.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Procurement and Performance Specifications',
                    'description': 'Guidance on air leakage requirements and MERV ratings.'
                  }
                }
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/ahu_tools.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Tools and Calculators',
                    'description': ''
                  }
                }
                
      }]
        })
        .state({
            name: 'pipe',
            url: '/pipe',
            templateUrl: 'views/pipe.html',
            children: [{
                name: 'design',
                url: '/design',
                templateUrl: 'views/pipe_design.html',
                data: {
                  meta: {
                    'title': 'Piping: Energy Efficiency Measures',
                    'description': 'Lack of accurate design data on pipes often leads to installation of oversized pumps and valves. This page provides resources to help with proper design.'
                  }
                }
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/pipe_basics.html',
                data: {
                  meta: {
                    'title': 'Piping: Basics',
                    'description': 'The piping network is one of the important and expensive components in a centralized district cold/hot water or steam distribution system. This page provides general information and links to more detailed piping information.'
                  }
                }
                
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
                templateUrl: 'views/pipe_codes.html',
                data: {
                  meta: {
                    'title': 'Piping: Performance Ratings',
                    'description': 'Identification of codes that apply to piping and links to resources.'
                  }
                }
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/pipe_operation.html'
      }, {
                name: 'procure',
                url: '/procure',
                templateUrl: 'views/pipe_procure.html',
                data: {
                  meta: {
                    'title': 'Piping: Procurement and Performance Specifications',
                    'description': 'Link to resource to help with procurement and performance specifications of piping in HVAC system.'
                  }
                }
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/pipe_tools.html',
                data: {
                  meta: {
                    'title': 'Piping: PDesign Calculators and Tools',
                    'description': 'List of tools and calculators to help in pipe sizing for HVAC systems.'
                  }
                }
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
                templateUrl: 'views/cool_thermal_basics.html',
                data: {
                  meta: {
                    'title': 'Cool Thermal Energy Storage: Basics',
                    'description': 'Basic information on thermal energy storage, a method of storing heating or cooling thermal energy by running equipment at off-peak hours. Resources are listed.'
                  }
                }
                
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
                templateUrl: 'views/hot_thermal_basics.html',
                data: {
                  meta: {
                    'title': 'Hot Thermal Energy Storage: Basics',
                    'description': 'Basic information on thermal energy storage, a method of storing heating or cooling thermal energy by running equipment at off-peak hours. Resources are listed.'
                  }
                }
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
                templateUrl: 'views/sensors_controls_operation.html',
                data: {
                  meta: {
                    'title': 'Sensors and Controls: Operation and Training Resources',
                    'description': 'List of curated resource links to learn more about HVAC sensors and controls.'
                  }
                }
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/sensors_controls_cases.html'
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/sensors_controls_basics.html',
                data: {
                  meta: {
                    'title': 'Sensors and Controls: Basics',
                    'description': 'Basic information on sensors and controls for HVAC systems. Resources are listed.'
                  }
                }
      }]
        })

        .state({
            name: 'valve',
            url: '/valve',
            templateUrl: 'views/valve.html',
            children: [{
                name: 'design',
                url: '/design',
                templateUrl: 'views/valve_design.html',
                data: {
                  meta: {
                    'title': 'Valve: Energy Efficiency Measures',
                    'description': 'Valve sizing and valve insulation are discussed as part of energy efficiency measures. Helpful links are provided.'
                  }
                }
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/valve_basics.html',
                data: {
                  meta: {
                    'title': 'Valve: Basics',
                    'description': 'Basic information on valves, throttling devices used to regulate the flow of liquids and gases. This page provides basic information and links to resources. It also links to pages with more information on valve types, performance ratings, energy efficiency measures, tools, operation, and case studies for valves in HVAC systems.'
                  }
                }
                
      }, {
                name: 'types',
                url: '/types',
                templateUrl: 'views/valve_types.html',
                data: {
                  meta: {
                    'title': 'Valve: Types',
                    'description': 'Table with types of HVAC valves and their application, advantages, disadvantages, and an illustration of the valve. Also includes curated links to more information.'
                  }
                }
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/valve_cases.html',
                data: {
                  meta: {
                    'title': 'Valve: Case Studies',
                    'description': 'Case studies showing how valves can affect HVAC efficiency.'
                  }
                }
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/valve_codes.html',
                data: {
                  meta: {
                    'title': 'Valve: Performance Ratings',
                    'description': 'Important valve leakage testing standards are listed and links to the standards are provided.'
                  }
                }
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/valve_operation.html',
                data: {
                  meta: {
                    'title': 'Valve: Operation and Training Resources',
                    'description': 'Discussion of methods to ensure valves are functioning properly and resource links.'
                  }
                }
      }, {
                name: 'procure',
                url: '/procure',
                templateUrl: 'views/valve_procure.html'
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/valve_tools.html',
                data: {
                  meta: {
                    'title': 'Valve: Design Calculators and Tools',
                    'description': 'Links to tools for calculating valve design in HVAC systems. '
                  }
                }
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
                templateUrl: 'views/duct_basics.html',
                data: {
                  meta: {
                    'title': 'Ducting: General Information',
                    'description': 'Types of ducts are listed in a table with application, advantages, and disadvantages of each. Curated resources are listed and linked to.'
                  }
                }
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
                templateUrl: 'views/vav_design.html',
                data: {
                  meta: {
                    'title': 'VAV Boxes: Basics',
                    'description': 'Information about variable air volume (VAV) box airflow control devices for HVAC at the zone level is provided. There are also links to curated resources.'
                  }
                }
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
                templateUrl: 'views/diffuser_design.html',
                data: {
                  meta: {
                    'title': 'Diffusers: General Information',
                    'description': 'HVAC diffusers are important to providing a comfortable environment for building occupants. Types of diffusers and some specs are covered in a table and curated resource links are provided.'
                  }
                }
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/diffuser_basics.html',
                
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
            templateUrl: 'views/space_loads.html',
            data: {
              meta: {
                'title': 'Space Loads',
                'description': 'General information about space loads and HVAC.'
              }
            }
            
        })
        .state({
            name: 'fan',
            url: '/fan',
            templateUrl: 'views/fan.html',
            children: [{
                name: 'design',
                url: '/design',
                templateUrl: 'views/fan_design.html',
                data: {
                  meta: {
                    'title': 'Fan: Energy Efficiency Measures',
                    'description': 'List of curated resource to help design and operate energy efficient fans in HVAC systems.'
                  }
                }
      }, {
                name: 'basics',
                url: '/basics',
                templateUrl: 'views/fan_basics.html',
                data: {
                  meta: {
                    'title': 'Fan: Basics',
                    'description': 'General information about fans in HVAC systems and links to resources. Also links to additional pages covering types, energy efficiency measures, tools, operations, procurement, case studies, and tune-up measures.'
                  }
                }
      }, {
                name: 'types',
                url: '/types',
                templateUrl: 'views/fan_types.html',
                data: {
                  meta: {
                    'title': 'Fan: Types',
                    'description': 'List of fan types and the advantages, disadvantages, application and illustration of each.'
                  }
                }
      }, {
                name: 'tools',
                url: '/tools',
                templateUrl: 'views/fan_tools.html',
                data: {
                  meta: {
                    'title': 'Fan: Design Calculators and Tools',
                    'description': 'List of fan calculators and tools to assess efficiency, savings potential, design, and analysis.'
                  }
                }
      }, {
                name: 'cases',
                url: '/cases',
                templateUrl: 'views/fan_cases.html',
                data: {
                  meta: {
                    'title': 'Fan: Case Studies',
                    'description': 'List of fan system case studies with energy savings results.'
                  }
                }
      }, {
                name: 'operation',
                url: '/operation',
                templateUrl: 'views/fan_operation.html',
                data: {
                  meta: {
                    'title': 'Fan: Operation and Training Resources',
                    'description': 'List of curated resources for maintaining and testing fan systems in HVAC.'
                  }
                }
      }, {
                name: 'procure',
                url: '/procure',
                templateUrl: 'views/fan_procure.html',
                data: {
                  meta: {
                    'title': 'Fan: Procurement and Performance Specifications',
                    'description': 'List of specifications and options that should be considered when choosing fans for HVAC system.'
                  }
                }
      }, {
                name: 'codes',
                url: '/codes',
                templateUrl: 'views/fan_codes.html'
      }, {
                name: 'tune',
                url: '/tune',
                templateUrl: 'views/fan_tune.html',
                data: {
                  meta: {
                    'title': 'Fan: Tune-up Measures',
                    'description': 'Detailed page with instructions on how to tune-up fans systems and keep them in proper working order. Page provides tables with routine maintenance recommendations, replacement and improvement opportunities, and ranks them as to effort, savings, and payback. Energy efficiency measures are listed, described, level of effort is shown, and recommended timing.'
                  }
                }
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
                templateUrl: 'views/boiler_basics.html',
                data: {
                  meta: {
                    'title': 'Boiler: General Information',
                    'description': 'This page provides information on boilers, that heat water to produce hot water or steam for heating. It links to information on performance ratings, energy efficiency, calculators and tools, operations, procurement, and case studies. '
                  }
                }
      }, {
                name: 'codes',
                nav: 'boiler',
                url: '/codes',
                templateUrl: 'views/boiler_codes.html',
                data: {
                  meta: {
                    'title': 'Boiler: Performance Ratings',
                    'description': 'Information on measuring boiler performance and links to resources.'
                  }
                }
                
      }, {
                name: 'design',
                nav: 'boiler',
                url: '/design',
                templateUrl: 'views/boiler_design.html',
                data: {
                  meta: {
                    'title': 'Boiler: Energy Efficiency Measures',
                    'description': 'Best practices for energy efficient boiler operation and design. Comparison table of modular boilers versus large boiler designs. Links to additional resources.'
                  }
                }
      }, {
                name: 'tools',
                nav: 'boiler',
                url: '/tools',
                templateUrl: 'views/boiler_tools.html',
                data: {
                  meta: {
                    'title': 'Boiler: Design Calculators and Tools',
                    'description': 'This page provides curated links to tools for calculating energy saving strategies for boilers. '
                  }
                }
      }, {
                name: 'operation',
                nav: 'boiler',
                url: '/operation',
                templateUrl: 'views/boiler_operation.html',
                data: {
                  meta: {
                    'title': 'Boiler: Operation and Training Resources',
                    'description': 'This page provides a list of actions for boiler evaluation and includes links to resources for more information. '
                  }
                }
      }, {
                name: 'procure',
                nav: 'boiler',
                url: '/procure',
                templateUrl: 'views/boiler_procure.html',
                data: {
                  meta: {
                    'title': 'Boiler: Procurement and Performance',
                    'description': 'The purpose of this page is to help owners understand the key aspects of boiler energy efficiency and enable them to include appropriate language in the RFP to facilitate procurement of boilers with the desired features and efficiency levels while staying within their budget. '
                  }
                }
      }, {
                name: 'cases',
                nav: 'boiler',
                url: '/cases',
                templateUrl: 'views/boiler_cases.html',
                data: {
                  meta: {
                    'title': 'Boiler: Case Studies',
                    'description': 'List of case studies where boiler efficiency is addressed.'
                  }
                }
                
      }, {
                name: 'chiller_basics',
                nav: 'chiller',
                url: '/chiller_basics',
                templateUrl: 'views/chiller_basics.html',
                data: {
                  meta: {
                    'title': 'Chiller: General Description and Uses',
                    'description': 'General information about chillers in an HVAC system. Types of chillers and resources are listed. Links to more information on performance ratings, energy efficiency, tools, operation, procurement, and case studies are included.'
                  }
                }
      }, {
                name: 'chiller_codes',
                nav: 'chiller',
                url: '/chiller_codes',
                templateUrl: 'views/chiller_codes.html',
                data: {
                  meta: {
                    'title': 'Chiller: Performance Ratings',
                    'description': 'Chiller performance certifications and standards are discussed.'
                  }
                }
                
      }, {
                name: 'chiller_design',
                nav: 'chiller',
                url: '/chiller_design',
                templateUrl: 'views/chiller_design.html',
                data: {
                  meta: {
                    'title': 'Chiller: Energy Efficiency Measures',
                    'description': 'Energy efficiency measures for chillers are listed and discussed. Links are provided to helpful information.'
                  }
                }
      }, {
                name: 'chiller_tools',
                nav: 'chiller',
                url: '/chiller_tools',
                templateUrl: 'views/chiller_tools.html',
                data: {
                  meta: {
                    'title': 'Chiller: Design Calculators and Tools',
                    'description': 'Chiller a list of curated tools and calculators to help with chiller performance.'
                  }
                }
      }, {
                name: 'chiller_operation',
                nav: 'chiller',
                url: '/chiller_operation',
                templateUrl: 'views/chiller_operation.html',
                data: {
                  meta: {
                    'title': 'Chiller: Operation and Training Resources',
                    'description': 'A list of things to look for in an annual inspection of the chiller. Performance indicators for chillers and resource links.'
                  }
                }
      }, {
                name: 'chiller_procure',
                nav: 'chiller',
                url: '/chiller_procure',
                templateUrl: 'views/chiller_procure.html',
                data: {
                  meta: {
                    'title': 'Chiller: Procurement and Performance Specifications',
                    'description': 'The development of chiller performance specifications is discussed. Curated links are provided to help with this process.'
                  }
                }
      }, {
                name: 'chiller_cases',
                nav: 'chiller',
                url: '/chiller_cases',
                templateUrl: 'views/chiller_cases.html',
                data: {
                  meta: {
                    'title': 'Chiller: Case Studies',
                    'description': 'List of case studies that feature energy and cost savings from chiller optimization or replacement.'
                  }
                }
      }, {
                name: 'tower_basics',
                nav: 'tower',
                url: '/tower_basics',
                templateUrl: 'views/tower_basics.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: General Descriptions and Uses',
                    'description': 'General information on cooling towers and definitions for commonly used terms are covered. Links to additional content on types, performance ratings, energy efficiency, calculators and tools, operation and training, procurement, and case studies.'
                  }
                }
      }, {
                name: 'tower_cases',
                nav: 'tower',
                url: '/tower_cases',
                templateUrl: 'views/tower_cases.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Types',
                    'description': 'Table of cooling tower types with flow, advantages, disadvantages, and illustrations of each type. A list of curated resources is also included.'
                  }
                }
      }, {
                name: 'tower_types',
                nav: 'tower',
                url: '/tower_types',
                templateUrl: 'views/tower_types.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Types',
                    'description': 'Table of cooling tower types with flow, advantages, disadvantages, and illustrations of each type. A list of curated resources is also included.'
                  }
                }
      }, {
                name: 'tower_operation',
                nav: 'tower',
                url: '/tower_operation',
                templateUrl: 'views/tower_operation.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Operation and Training Resources',
                    'description': 'Cooling tower operation considerations discussed and listed. Links to curated resources are provided.'
                  }
                }
      }, {
                name: 'tower_procure',
                nav: 'tower',
                url: '/tower_procure',
                templateUrl: 'views/tower_procure.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Procurement and Performance Specifications',
                    'description': 'Link to resources to provide guidance on cooling tower performance specifications.'
                  }
                }
      }, {
                name: 'tower_tools',
                nav: 'tower',
                url: '/tower_tools',
                templateUrl: 'views/tower_tools.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Design Calculators and Tools',
                    'description': 'List of links to tools and calculators for cooling towers.'
                  }
                }
      }, {
                name: 'tower_design',
                nav: 'tower',
                url: '/tower_design',
                templateUrl: 'views/tower_design.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Energy Efficiency Measures',
                    'description': 'Cooling tower energy efficiency measures covered and water efficiency measures as well, with links to curated resources for more information.'
                  }
                }
      }, {
                name: 'tower_codes',
                nav: 'tower',
                url: '/tower_codes',
                templateUrl: 'views/tower_codes.html',
                data: {
                  meta: {
                    'title': 'Cooling Tower: Performance Ratings',
                    'description': 'Cooling tower performance standards are discussed and helpful links are provided.'
                  }
                }
      }, {
                name: 'pump_basics',
                nav: 'pump',
                url: '/pump_basics',
                templateUrl: 'views/pump_basics.html',
                data: {
                  meta: {
                    'title': 'Pump: Basics',
                    'description': 'General information on pumps and pump types is provided with links to additional pump content on performance ratings, energy efficiency, tools, operation, procurement, and case studies. Also included are links to curated resources.'
                  }
                }
      }, {
                name: 'pump_codes',
                nav: 'pump',
                url: '/pump_codes',
                templateUrl: 'views/pump_codes.html',
                data: {
                  meta: {
                    'title': 'Pump: Performance Ratings',
                    'description': 'List of key pump components monitored during testing and definitions of commonly used performance terms. Links to curated resources.'
                  }
                }
      }, {
                name: 'pump_operation',
                nav: 'pump',
                url: '/pump_operation',
                templateUrl: 'views/pump_operation.html',
                data: {
                  meta: {
                    'title': 'Pump: Operation and Training Resources',
                    'description': 'Information on pump maintenance and links to training resources are provided.'
                  }
                }
      }, {
                name: 'pump_tools',
                nav: 'pump',
                url: '/pump_tools',
                templateUrl: 'views/pump_tools.html',
                data: {
                  meta: {
                    'title': 'Pump: Design Calculators and Tools',
                    'description': 'Links to curated tools for pump selection and design.'
                  }
                }
      }, {
                name: 'pump_cases',
                nav: 'pump',
                url: '/pump_cases',
                templateUrl: 'views/pump_cases.html',
                data: {
                  meta: {
                    'title': 'Pump: Case Studies',
                    'description': 'Links to case studies with energy and cost savings due to pump optimization.'
                  }
                }
      }, {
                name: 'pump_procure',
                nav: 'pump',
                url: '/pump_procure',
                templateUrl: 'views/pump_procure.html',
                data: {
                  meta: {
                    'title': 'Pump: Procurement and Performance Standards',
                    'description': 'Recommendations for pump procurement and performance standards.'
                  }
                }
      }, {
                name: 'pump_design',
                nav: 'pump',
                url: '/pump_eems',
                templateUrl: 'views/pump_design.html',
                data: {
                  meta: {
                    'title': 'Pump: Energy Efficiency Measures',
                    'description': 'List of key opportunities for energy savings on pump systems, efficient centrifugal pump selection discussion, and information on variable speed drives for pumps, life cycle cost analysis information for pumps, and future planning for pump capacity. Links to curated resources. '
                  }
                }
      }, {
                name: 'sensor_basics',
                nav: 'sensor',
                url: '/sensor_basics',
                templateUrl: 'views/sensors_controls_basics.html',
                data: {
                  meta: {
                    'title': 'Sensors and Controls: Basics',
                    'description': 'Introduction to sensors and controls with links to resouces for more information.'
                  }
                }
      }, {
                name: 'sensor_operation',
                nav: 'sensor',
                url: '/sensor_operation',
                templateUrl: 'views/sensors_controls_operation.html',
                data: {
                  meta: {
                    'title': 'Sensors and Controls: Operation and Training Resources',
                    'description': 'Links to helpful resources on operation of sensors and controls and training materials.'
                  }
                }
      }, {
                name: 'cool_basics',
                nav: 'cool',
                url: '/cool_basics',
                templateUrl: 'views/cool_thermal_basics.html',
                data: {
                  meta: {
                    'title': 'Cool Thermal Energy Storage: Basics',
                    'description': 'List of applications that are most suitable with cool storage systems and links to resources.'
                  }
                }
      }, {
                name: 'hot_basics',
                nav: 'hot',
                url: '/hot_basics',
                templateUrl: 'views/hot_thermal_basics.html',
                data: {
                  meta: {
                    'title': 'Hot Thermal Energy Storage: Basics',
                    'description': 'List of applications that are most suitable with hot storage systems and links to resources.'
                  }
                }
      }, {
                name: 'ahu_design_lab',
                nav: 'ahu',
                url: '/ahu_design_lab',
                templateUrl: 'views/ahu_design_lab.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Energy Efficiency Measures for Laboratories',
                    'description': 'Energy efficiency measures for AHU in laboratories. Links to resources and additional information.'
                  }
                }
      }, {
                name: 'ahu_basics',
                nav: 'ahu',
                url: '/ahu_basics',
                templateUrl: 'views/ahu_basics.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: General Description and Uses',
                    'description': 'Basic information on AHU and the components that make up the AHU. Links to resources and pages with additional information on types, performace ratings, energy efficiency measures, operation, procurement, and case studies.'
                  }
                }
      }, {
              name: 'low_pressure_basics',
              nav: 'low_pressure',
              url: '/low_pressure_basics',
              templateUrl: 'views/low_pressure_drop_basics.html',
              data: {
                meta: {
                  'title': 'Low Pressure Drop Design',
                  'description': 'Information for laboratory HVAC AHU design. Establishing a system pressure requirement, selecting equipment, proper layout and duct work, and links to resources are provided.'
                }
              }

      }, {
                name: 'ahu_types',
                nav: 'ahu',
                url: '/ahu_types',
                templateUrl: 'views/ahu_types.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Types',
                    'description': 'List of different types of air handling units (AHU).'
                  }
                }
      }, {
                name: 'ahu_cases',
                nav: 'ahu',
                url: '/ahu_cases',
                templateUrl: 'views/ahu_cases.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Case Studies',
                    'description': 'List of case studies with demonstrated energy savings.'
                  }
                }
      }, {
                name: 'ahu_codes',
                nav: 'ahu',
                url: '/ahu_codes',
                templateUrl: 'views/ahu_codes.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Performance Ratings',
                    'description': 'What to look for when measuring the performance of air handling units (AHU). Links to resources.'
                  }
                }
      }, {
                name: 'ahu_operation',
                nav: 'ahu',
                url: '/ahu_operation',
                templateUrl: 'views/ahu_operation.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Operation and Training Resources',
                    'description': 'List of measures to evaluate the AHU and links to additional information.'
                  }
                }
                
      }, {
                name: 'ahu_procure',
                nav: 'ahu',
                url: '/ahu_procure',
                templateUrl: 'views/ahu_procure.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Procurement and Performance Specifications',
                    'description': 'Air leakage and filters are discussed.'
                  }
                }
      }, {
                name: 'ahu_tools',
                nav: 'ahu',
                url: '/ahu_tools',
                templateUrl: 'views/ahu_tools.html'
  
      }, {
                name: 'ahu_alt_hvac',
                nav: 'ahu',
                url: '/ahu_alt_hvac',
                templateUrl: 'views/ahu_alt_hvac.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Alternative HVAC for Laboratories',
                    'description': 'Discussion of minimizing reheat in laboratory AHUs and links to resources.'
                  }
                }
      }, {
                name: 'ahu_operation_lab',
                nav: 'ahu',
                url: '/ahu_operation_lab',
                templateUrl: 'views/ahu_operation_lab.html',
                data: {
                  meta: {
                    'title': 'Air Handling Units: Lab Operation and Training Resources',
                    'description': 'List of measures to evaluate the AHU and links to additional information.'
                  }
                }
      }, {
                name: 'duct_basics_lab',
                nav: 'duct',
                url: '/duct_basics_lab',
                templateUrl: 'views/duct_basics_lab.html',
                data: {
                  meta: {
                    'title': 'Ducting: General Information',
                    'description': 'Table showing list of duct material types and duct types with their application, advantages, and disadvantages. Links to resources are provided.'
                  }
                }
      }, {
                name: 'steamtrap_basics',
                nav: 'steamtrap',
                url: '/steamtrap_basics',
                templateUrl: 'views/steamtrap_basics.html',
                data: {
                  meta: {
                    'title': 'Steam Traps: General Information',
                    'description': 'Steam trap information is provided on this page with types of traps, operation, advantages, disadvantages and application of each type. Links to more information are also provided.'
                  }
                }
      }, {
                name: 'steamtrap_tools',
                nav: 'steamtrap',
                url: '/steamtrap_tools',
                templateUrl: 'views/steamtrap_tools.html',
                data: {
                  meta: {
                    'title': 'Steam Traps: Design Calculators and Tools',
                    'description': 'Steam trap calculators and tools are listed and linked to on this page.'
                  }
                }
      }, {
                name: 'fan_design',
                nav: 'fan',
                url: '/fan_design',
                templateUrl: 'views/fan_design.html',
                data: {
                  meta: {
                    'title': 'Fan: Energy Efficiency Measures',
                    'description': 'A list of curated resources to learn more about fan system efficiency in HVAC systems.'
                  }
                }
      }, {
                name: 'fan_basics',
                nav: 'fan',
                url: '/fan_basics',
                templateUrl: 'views/fan_basics.html',
                data: {
                  meta: {
                    'title': 'Fan: General Information',
                    'description': 'Information on fans as part of the HVAC system. Links to pages with information on fan energy efficiency measures, calculators and tools, operation and training, procurement and performance, case studies, and tune-up measures.'
                  }
                }
      }, {
                name: 'fan_types',
                nav: 'fan',
                url: '/fan_types',
                templateUrl: 'views/fan_types.html',
      }, {
                name: 'fan_tools',
                nav: 'fan',
                url: '/fan_tools',
                templateUrl: 'views/fan_tools.html',
                data: {
                  meta: {
                    'title': 'Fan: Design Calculators and Tools',
                    'description': 'Links to tools and calculators to help with fan design in your HVAC system.'
                  }
                }
      }, {
                name: 'fan_cases',
                nav: 'fan',
                url: '/fan_cases',
                templateUrl: 'views/fan_cases.html',
                data: {
                  meta: {
                    'title': 'Fan: Case Studies',
                    'description': 'Links to case studies involving fan design in HVAC resulting in energy savings.'
                  }
                }
      }, {
                name: 'fan_operation',
                nav: 'fan',
                url: '/fan_operation',
                templateUrl: 'views/fan_operation.html',
                data: {
                  meta: {
                    'title': 'Fan: Operation and Training Resources',
                    'description': 'Information on maintaining extended fan performance is provided.'
                  }
                }
      }, {
                name: 'fan_procure',
                nav: 'fan',
                url: '/fan_procure',
                templateUrl: 'views/fan_procure.html',
                data: {
                  meta: {
                    'title': 'Fan: Procurement and Performance',
                    'description': 'Options to consider when designing fan systems are listed. Resources are listed for more information on fan specifications and design.'
                  }
                }
      }, {
                name: 'fan_codes',
                nav: 'fan',
                url: '/fan_codes',
                templateUrl: 'views/fan_codes.html'
      }, {
                name: 'fan_tuneup',
                nav: 'fan',
                url: '/fan_tuneup',
                templateUrl: 'views/fan_tune.html',
                data: {
                  meta: {
                    'title': 'Fan: Tune-Up Measures',
                    'description': 'Maintaining fan systems is described with routine operations and maintenance (O&M) measures and replacement and improvement (RI) measures. The measures are divided across the entire fan system and by major components of control/motor, drive train, fan, and airflow distribution with detailed sections for each component in this document. '
                  }
                }
      }, {
                name: 'lab_diffuser_basics',
                nav: 'diffuser',
                url: '/lab_diffuser_basics',
                templateUrl: 'views/diffuser_basics_lab.html',
                data: {
                  meta: {
                    'title': 'Diffuser: General Information for Laboratories',
                    'description': 'Discussion of diffuser selection, location, and types. Also includes links to helpful resources.'
                  }
                }
                
      }, {
                name: 'pipe_design',
                nav: 'pipe',
                url: '/pipe_design',
                templateUrl: 'views/pipe_design.html',
                data: {
                  meta: {
                    'title': 'Piping: Energy Efficiency Measures',
                    'description': 'Careful sizing of the piping system is therefore important to improve the overall efficiency of the water system. Resources are provided to help with pipe sizing.'
                  }
                }
      }, {
                name: 'pipe_basics',
                nav: 'pipe',
                url: '/pipe_basics',
                templateUrl: 'views/pipe_basics.html',
                data: {
                  meta: {
                    'title': 'Piping: General Information',
                    'description': 'Information on the piping network for HVAC systems. Primary-secondary pumping is discussed and links to other pages for more information on piping are provided.'
                  }
                }
      }, {
                name: 'pipe_tools',
                nav: 'pipe',
                url: '/pipe_tools',
                templateUrl: 'views/pipe_tools.html',
                data: {
                  meta: {
                    'title': 'Piping: Design Calculators and Tools',
                    'description': 'List of tools to help with the design of the piping network for HVAC systems.'
                  }
                }
      }, {
                name: 'pipe_operation',
                nav: 'pipe',
                url: '/pipe_operation',
                templateUrl: 'views/pipe_operation.html',
                data: {
                  meta: {
                    'title': 'Piping: Operation and Training Resources',
                    'description': 'Links to resource to help with operation and maintenance of HVAC piping systems.'
                  }
                }
      }, {
                name: 'pipe_procure',
                nav: 'pipe',
                url: '/pipe_procure',
                templateUrl: 'views/pipe_procure.html',
                data: {
                  meta: {
                    'title': 'Piping: Procurement and Performance Specifications',
                    'description': 'Links to resource to help with specifications for piping systems.'
                  }
                }
      }, {
                name: 'pipe_codes',
                nav: 'pipe',
                url: '/pipe_codes',
                templateUrl: 'views/pipe_codes.html',
                data: {
                  meta: {
                    'title': 'Piping: Performance Ratings',
                    'description': 'Information on piping codes and links to resources.'
                  }
                }
      }, {
                name: 'valve_basics',
                nav: 'valve',
                url: '/valve_basics',
                templateUrl: 'views/valve_basics.html',
                data: {
                  meta: {
                    'title': 'Valve: General Information',
                    'description': 'Information on valves in HVAC systems. Valves play a key role in overall plant energy consumption because of the pressure drop they introduce in the flow. Links to resources and additional information.'
                  }
                }
      }, {
                name: 'valve_cases',
                nav: 'valve',
                url: '/valve_cases',
                templateUrl: 'views/valve_cases.html',
                data: {
                  meta: {
                    'title': 'Valve: Case Studies',
                    'description': 'List of links to case studies where HVAC valves have an energy impact.'
                  }
                }
      }, {
                name: 'valve_types',
                nav: 'valve',
                url: '/valve_types',
                templateUrl: 'views/valve_types.html',
                data: {
                  meta: {
                    'title': 'Valve: Types',
                    'description': 'Table of valve types showing application, advantage, disadvantage, and an illustration of each type. Links to additional resources are provided. '
                  }
                }
      }, {
                name: 'valve_operation',
                nav: 'valve',
                url: '/valve_operation',
                templateUrl: 'views/valve_operation.html',
                data: {
                  meta: {
                    'title': 'Valve: Operation and Training Resources',
                    'description': 'Discussion of methods to ensure HVAC valves are functioning properly and links to resources.'
                  }
                }
      }, {
                name: 'valve_procure',
                nav: 'valve',
                url: '/valve_procure',
                templateUrl: 'views/valve_procure.html',

      }, {
                name: 'valve_tools',
                nav: 'valve',
                url: '/valve_tools',
                templateUrl: 'views/valve_tools.html',data: {
                  meta: {
                    'title': 'Valve: Design Calculators and Tools',
                    'description': 'Links to tools and calculators for valve design.'
                  }
                }
      }, {
                name: 'valve_design',
                nav: 'valve',
                url: '/valve_design',
                templateUrl: 'views/valve_design.html',
                data: {
                  meta: {
                    'title': 'Valve: Energy Efficiency Measures',
                    'description': 'HVAC valve sizing considerations listed and valve insulation discussed. Links provided for more information.'
                  }
                }
      }, {
                name: 'valve_codes',
                nav: 'valve',
                url: '/valve_codes',
                templateUrl: 'views/valve_codes.html',
                data: {
                  meta: {
                    'title': 'Valve: Performance Ratings',
                    'description': 'Links to Discussion of hvac valve testing standards and links to those standards.'
                  }
                }
      }, {
                name: 'demand_vent_basics',
                nav: 'demand_vent',
                url: '/demand_vent_basics',
                templateUrl: 'views/demand_vent_basics.html',
                data: {
                  meta: {
                    'title': 'Demand-Controlled Ventilation',
                    'description': 'Demand-controlled ventilation (DCV) uses real-time information provided by sensors to vary ventilation rates to directly meet space and occupant needLinks to tools and calculators for valve design. Information and links are provided.'
                  }
                }
      }, {
                name: 'lab_vav_basics',
                nav: 'lab_vav',
                url: '/lab_vav_basics',
                templateUrl: 'views/lab_vav_basics.html',
                data: {
                  meta: {
                    'title': 'VAV Boxes: General Information',
                    'description': 'Information on variable air volume (VAV) boxes as part of the HVAC system. VAV box is an airflow control device at the zone level. Key parameters to consider when selecting are listed and resources for more VAV information.'
                  }
                }
                
      }, {
                name: 'occupancy_sensor_basics',
                nav: 'occupancy_sensor',
                url: '/occupancy_sensor_basics',
                templateUrl: 'views/occupancy_sensor_basics.html',
                data: {
                  meta: {
                    'title': 'Occupancy Sensors: General Information',
                    'description': 'Information on using occupancy sensors in labs. Links to resources for more detailed information.'
                  }
                }
                
      }, {
                name: 'energy_recovery_basics',
                nav: 'energy_recovery',
                url: '/energy_recovery_basics',
                templateUrl: 'views/energy_recovery_basics.html',
                data: {
                  meta: {
                    'title': 'Energy Recovery: General Information',
                    'description': 'Information on energy recovery in lab HVAC systems including heat wheels, enthalpy wheels, heat pipes, and run-around loops.'
                  }
                }
      }, {
                name: 'exposure_control_basics',
                nav: 'exposure_control',
                url: '/exposure_control_basics',
                templateUrl: 'views/exposure_control_basics.html',
                data: {
                  meta: {
                    'title': 'Exposure Control Devices : General Information for Labs',
                    'description': 'Information on exposure control devices and links to resources to improve energy efficiency in these devices. '
                  }
                }
      }, {
                name: 'exposure_control_types',
                nav: 'exposure_control',
                url: '/exposure_control_types',
                templateUrl: 'views/exposure_control_types.html'
      }, {
                name: 'exposure_control_eems',
                nav: 'exposure_control',
                url: '/exposure_control_eems',
                templateUrl: 'views/exposure_control_eems.html',
                data: {
                  meta: {
                    'title': 'Exposure Control Devices: General Information for Labs',
                    'description': 'Information on exposure control devices and links to resources to improve energy efficiency in these devices. '
                  }
                }
      }, {
                name: 'exposure_control_tools',
                nav: 'exposure_control',
                url: '/exposure_control_tools',
                templateUrl: 'views/exposure_control_tools.html',
                data: {
                  meta: {
                    'title': 'Exposure Control Devices: Calculators and Tools',
                    'description': 'List of tools for guiding the assessment of research hazards and identify the correct exposure control devices.'
                  }
                }
      }, {
                name: 'exposure_control_operations',
                nav: 'exposure_control',
                url: '/exposure_control_operations',
                templateUrl: 'views/exposure_control_operations.html',
                data: {
                  meta: {
                    'title': 'Exposure Control Devices: Operation and Training Resources',
                    'description': 'List exposure control resources to assist with operation and training.'
                  }
                }
                
      }, {
                name: 'bldg_modeling_basics',
                nav: 'bldg_model',
                url: '/bldg_modeling_basics',
                templateUrl: 'views/bldg_modeling_basics.html',
                data: {
                  meta: {
                    'title': 'Building Energy Modeling for Labs',
                    'description': 'Discussion of energy modeling for labs and link to resources for more information.'
                  }
                }
      }, {
                name: 'lab_vent_basics',
                nav: 'lab_vent',
                url: '/lab_vent_basics',
                templateUrl: 'views/lab_vent_basics.html',
                data: {
                  meta: {
                    'title': 'Laboratory Ventilation Effectiveness',
                    'description': 'Air is the primary carrier of heat, moisture, and contaminants in and around laboratory buildings. The airflow rate and the resulting flow of contaminants can depend on several of the factors listed on this page. Resources are provided.'
                  }
                }
      }, {
                name: 'lab_vent_cfd',
                nav: 'lab_vent',
                url: '/lab_vent_cfd',
                templateUrl: 'views/lab_vent_cfd.html',
                data: {
                  meta: {
                    'title': 'Laboratory Ventilation Effectiveness: Computational Fluid Dynamics (CFD)',
                    'description': 'CFD analyis information including a case study analysis of a laboratory, spread index, steps for airflow management analysis, and links to resources.'
                  }
                }
      }, {
                name: 'lab_benchmark_basics',
                nav: 'lab_benchmark',
                url: '/lab_energy_benchmark',
                templateUrl: 'views/lab_energy_benchmarking.html',
                data: {
                  meta: {
                    'title': 'Energy Benchmarking for Labs',
                    'description': 'Information on energy benchmarking for labs and resources on how to use the Laboratory Benchmarking Tool.'
                  }
                }
      }, { 
                name: 'exhaust_stack_basics',
                nav: 'exhaust_stack',
                url: '/exhaust_stack_basics',
                templateUrl: 'views/exhaust_stack_basics.html',
                data: {
                  meta: {
                    'title': 'Optimized Exhaust Stack Design',
                    'description': 'Information on exhaust stack design with several strategies discussed. Links provided for more information.'
                  }
                }
      }, {
                name: 'lab_vavsystems_basics',
                nav: 'lab_vavsystems',
                url: '/lab_vavsystems_basics',
                templateUrl: 'views/lab_vavsystems_basics.html',
                data: {
                  meta: {
                    'title': 'Variable Air Volume Systems',
                    'description': 'Information and resources on the benefits of variable air volume systems.'
                  }
                }

      }]
        });

}); // closes $routerApp.config()


routerApp.run(['$rootScope', '$log', '$state', 'ngMeta', function ($rootScope, $log, $state, ngMeta) {
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
        ngMeta.init();
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        // $log.debug('$stateChangeStart');
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.resetDiagram = false;
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

routerApp.controller('MainCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $scope.state = $state;
    $rootScope.resetDiagram = false;

    $scope.svg = function () {
        if ($state.current.name) {
            if (/^laboratories/.test($state.current.name)) {
                return 'img/labdiagram3.svg';
            } else {
                return 'img/hvacdiagram.svg';
            }
        }
    };

    $scope.reset = function () {
        $rootScope.resetDiagram = true;
    }

    $scope.diagramClass = function () {
        if ($rootScope.resetDiagram) {
            return;
        }

        if ($state.current.name) {

            var names = [
                'laboratories.ahu_alt_hvac',
                'laboratories.ahu_basics',
                'laboratories.ahu_codes',
                'laboratories.ahu_design_lab',
                'laboratories.ahu_operation_lab',
                'laboratories.boiler_basics',
                'laboratories.cases',
                'laboratories.chiller_basics',
                'laboratories.chiller_cases',
                'laboratories.chiller_codes',
                'laboratories.chiller_design',
                'laboratories.chiller_operation',
                'laboratories.chiller_procure',
                'laboratories.chiller_tools',
                'laboratories.codes',
                'laboratories.cool_basics',
                'laboratories.demand_vent_basics',
                'laboratories.design',
                'laboratories.energy_recovery_basics',
                'laboratories.exhaust_stack_basics',
                'laboratories.exposure_control_basics',
                'laboratories.exposure_control_basics',
                'laboratories.exposure_control_eems',
                'laboratories.exposure_control_operations',
                'laboratories.exposure_control_tools',
                'laboratories.exposure_control_types',
                'laboratories.lab_benchmark_basics',
                'laboratories.fan_basics',
                'laboratories.fan_cases',
                'laboratories.fan_design',
                'laboratories.fan_operation',
                'laboratories.fan_procure',
                'laboratories.fan_tools',
                'laboratories.fan_tuneup',
                'laboratories.hot_basics',
                'laboratories.lab_diffuser_basics',
                'laboratories.lab_vav_basics',
                'laboratories.lab_vavsystems_basics',
                'laboratories.occupancy_sensor_basics',
                'laboratories.operation',
                'laboratories.procure',
                'laboratories.pump_basics',
                'laboratories.pump_cases',
                'laboratories.pump_codes',
                'laboratories.pump_design',
                'laboratories.pump_operation',
                'laboratories.pump_procure',
                'laboratories.pump_tools',
                'laboratories.steamtrap_basics',
                'laboratories.steamtrap_tools',
                'laboratories.tools',
                'laboratories.tower_basics',
                'laboratories.tower_basics',
                'laboratories.tower_cases',
                'laboratories.tower_codes',
                'laboratories.tower_design',
                'laboratories.tower_operation',
                'laboratories.tower_procure',
                'laboratories.tower_tools',
                'laboratories.tower_types',
                'laboratories.valve_basics',
                'laboratories.valve_cases',
                'laboratories.valve_codes',
                'laboratories.valve_design',
                'laboratories.valve_operation',
                'laboratories.valve_tools',
                'laboratories.low_pressure_basics',
                'laboratories.valve_types'
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
