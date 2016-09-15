var app = angular.module('monsterApp');
app.controller('landingCtrl', function($scope){
    console.log('Made it to landingCtrl');
    $scope.pointLeader = [
    {name: 'Steve Woodis',
     points: '70'},
    {name: 'Joe Barnes',
     points: '67'}, 
    {name: 'Jesse',
     points: '63'}
    ]
    $scope.Factions = [
        {name: 'Werewolf'},
        {name: 'Vampire'},
        {name: 'Zombie'}
    ]
})