var app = angular.module('monsterApp');
app.controller('conRegController', function($scope, $location, envService){
    $scope.User = {};
   
   
    $scope.registerMe = function(){
        var User = $scope.User;   
        envService.createUser(User);
            $location.path('/aboutMe');
        
    }
})