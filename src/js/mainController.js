var app = angular.module('monsterApp');
app.controller('mainController', function($scope){
   $scope.Factions = ['Vampire', 'Werewolf', 'Zombie', 'Suggest'];

   $scope.dropboxitemselected = function () {
      alert("drop box item selected");
   }
   $scope.selectedItem;
   $scope.dropboxitemselected = function (item) {

      $scope.selectedItem = item;
      alert($scope.selectedItem);
   }
   
   
});

