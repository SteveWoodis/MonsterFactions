(function() {
  'use strict';
  angular.module('monsterApp').config(function($routeProvider) {
    return $routeProvider.when('/join', {
      templateUrl: 'views/join.html',
      controller: 'JoinCtrl'
    }).when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'ChatCtrl'
    }).otherwise({
      redirectTo: '/join'
    });
  });

}).call(this);
