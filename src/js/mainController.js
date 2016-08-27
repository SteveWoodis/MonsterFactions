var app = angular.module('monsterApp',[]);
app.controller('mainController', function($scope, $log){
   $scope.items = [
      'Vampire',
      'Werewolf',
      'Zombie',
      'Suggest a Faction!'
   ];

   $scope.status = {
      isopen: false
   };

   $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
   };

   $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
   };

   $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
   
});

