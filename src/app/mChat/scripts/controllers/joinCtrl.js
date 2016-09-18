(function() {
  'use strict';
  /*
  The JoinCtrl is responsible for collecting the username and calling the PubNub.init() method
  when the "Join" button is clicked.
  */

  angular.module('monsterApp').controller('JoinCtrl', function($rootScope, $scope, $location, PubNub) {
    $scope.data = {
      username: 'Anonymous ' + Math.floor(Math.random() * 1000)
    };
    $scope.join = function() {
      var _ref, _ref1, _ref2;
      $rootScope.data || ($rootScope.data = {});
      $rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
      $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
      $rootScope.data["super"] = (_ref2 = $scope.data) != null ? _ref2["super"] : void 0;
      $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;
      $rootScope.secretKey = $scope.data["super"] ? 'sec-c-ZDk1ZjMxMGUtOWQwMy00ZWQ5LThjZmMtMDBjOGUxZDZiMjFh' : null;
      $rootScope.authKey = $scope.data["super"] ? 'ChooseABetterSecret' : null;
      PubNub.init({
        subscribe_key: 'sub-c-43bc55aa-de4f-11e4-bb6f-0619f8945a4f',
        publish_key: 'pub-c-b3f76d0b-2a61-490d-acd4-dae96f7acfe3',
        secret_key: $rootScope.secretKey,
        auth_key: $rootScope.authKey,
        uuid: $rootScope.data.uuid,
        ssl: true
      });
      if ($scope.data["super"]) {
        /* Grant access to the SuperHeroes room for supers only!*/

        PubNub.ngGrant({
          channel: 'SuperHeroes',
          auth_key: $rootScope.authKey,
          read: true,
          write: true,
          callback: function() {
            return console.log('SuperHeroes! all set', arguments);
          }
        });
        PubNub.ngGrant({
          channel: "SuperHeroes-pnpres",
          auth_key: $rootScope.authKey,
          read: true,
          write: false,
          callback: function() {
            return console.log('SuperHeroes! presence all set', arguments);
          }
        });
        PubNub.ngGrant({
          channel: '__controlchannel',
          read: true,
          write: true,
          callback: function() {
            return console.log('control channel all set', arguments);
          }
        });
        PubNub.ngGrant({
          channel: '__controlchannel-pnpres',
          read: true,
          write: false,
          callback: function() {
            return console.log('control channel presence all set', arguments);
          }
        });
      }
      return $location.path('/chat');
    };
    return $(".prettyprint");
  });

  /*
  The ChatCtrl is responsible for creating, displaying, subscribing to, and
  chatting in channels
  */
