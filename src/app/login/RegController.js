var app = angular.module('monsterApp');
app.controller('RegController', function($scope, $location, $http){
    $scope.User = {};
   
   
    $scope.registerMe = function(){
        var User = $scope.User;   
        envService.createUser(User);
            $location.path('/aboutMe');
        
    }

    var refreshReg = function(){
        $scope.User.firstName = "";
        $scope.User.lastName = "";
        $scope.streetAddress = "";
        $scope.city = "";
        $scope.state = "";
        $scope.postalCode = "";
        $scope.User.password = "";
        $scope.User.email = "";
        $scope.User.userName = "";
        $scope.User.faction = "";


        function addContact(){
            console.log($scope.contact);
            $http.post('/customers', $scope.contact).success(function(response){
                console.log(response);
                $location.path('/landing');
                refreshReg();
            });
        }//end of addContact

    };
})