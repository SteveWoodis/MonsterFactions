var app = angular.module('monsterApp', ['firebase', 'ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/landing', {
        templateUrl: '/landing.html',
        controller: 'landingCtrl'
    })
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/registration', {
        templateUrl: '/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/aboutUs', {
        templateUrl: 'AboutUs.html',
        controller: 'aboutUsCtrl'
    })
    .when('/contact', {
     templateUrl: '/contact.html',
        controller: 'contactCtrl',
        resolve: {
           getProjectsRef: function (gprojectService) {
            return gprojectService.getProjects();
            }
        }
    })
    .when('/monsterNation', {
     templateUrl: '/monsterNation.html',
        controller: 'monsterNationCtrl',
        resolve: {
            createProjectsRef: function (gprojectService) {
            return gprojectService.createProjects();
            }
        }
    })

//    .when('/item/:itemId', {
//    templateUrl: 'projects/submitbids.html',
//    controller: 'submitbidsCtrl',
//     resolve: {
//            editBidAmount: function (gprojectService, $route) {
//            return gprojectService.getProject($route.current.params.projectId);
//            },
//            submitBidRef: function (gprojectService, $route) {
//            return gprojectService.updateProject($route.current.params.projectId);
//            }
//        }
//    })
    .otherwise({
        redirectTo: '/landing'
    })
    });

