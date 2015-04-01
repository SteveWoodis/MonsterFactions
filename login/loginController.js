var app = angular.module('monsterApp');
app.controller('loginController',function($scope, envService, $location){
	  $scope.User = {};
      $scope.logMeIn = function(){
        var User = $scope.User;
		envService.authUserName(User).then(function(res){
         
        })
        $scope.reg_email = '';
        $scope.reg_password = '';
		
	}
    $scope.registerMe = function(){
      $location.path('/registration'); 
        
    }
     
    
})