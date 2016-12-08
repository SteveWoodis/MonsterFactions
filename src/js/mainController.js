var app = angular.module('monsterApp');
app.controller('mainController', function($scope, $log, $location) {
   $scope.items = [
      'Vampire',
      'Werewolf',
      'Zombie'
   ];
   $scope.selectedItem;
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

   $scope.dropboxitemselected = function(items){

      $scope.selectedItem = items;
      alert($scope.selectedItem);
      $location.path('/items/');
   }
   $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});


  
