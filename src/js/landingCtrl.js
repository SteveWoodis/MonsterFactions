var app = angular.module('monsterApp');
app.controller('landingCtrl', function($scope, $location){
    console.log('Made it to landingCtrl');
    $scope.pointLeader = [
    {name: 'Steve Woodis',
     points: '70'},
    {name: 'Joe Barnes',
     points: '67'}, 
    {name: 'Jesse',
     points: '63'}
    ]

    $scope.dropboxitemselected = dropboxItemSelected;
    function dropboxItemSelected(items){

        $location.path('/' + items + '-landing');
    }
})