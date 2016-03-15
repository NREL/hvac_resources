
angular.module('app',['ngAnimate','ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      console.log("Hello World");  
       $urlRouterProvider.otherwise('/');  
        $stateProvider
        .state('home', {
            url:'/',
            templateUrl:'views/home.html',
            controller:'directoryController as dirList'
        })
        .state('myfixed', {
            url:'/myfixed',
            templateUrl:'views/myfixed.html'
        })
                .state('about', {
            url:'/about',
            templateUrl:'views/about.html'
        });
    })

