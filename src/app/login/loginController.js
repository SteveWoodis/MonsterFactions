angular.module('monsterApp').controller('loginCtrl', function ($scope, $http, $location) {

  $scope.user = {
    email: '',
    password:''
  };

  const refresh = function () {
    $scope.user.email = '';
    $scope.user.password = '';

  };

  refresh();

  $scope.login = login;
  $scope.Register = Register;

  function login(user) {
    $http.get('/customer/' + user.email).success(function (data) {
      if (user.email === data.email) {
        console.log('Success!');
      }
      else {
        throw Error('Sorry!');
      }
      refresh();
    });

  }

  function Register() {
    $location.path('/register');
  }

});
