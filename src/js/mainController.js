var app = angular.module('monsterApp');
app.controller('mainController', function($scope, $log, $location) {
   $scope.items = [
      'Vampire',
      'Werewolf',
      'Zombie',
      'Suggest a Faction!'
   ];
   $scope.selectedItem;
   $scope.dropboxitemselected = function (item) {

      $scope.selectedItem = item;
      $location.path('$scope.selectedItem');
      alert($scope.selectedItem);
   }

})
  
