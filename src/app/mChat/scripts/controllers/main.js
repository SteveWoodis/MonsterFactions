(function() {
  'use strict';
  /*
  The JoinCtrl is responsible for collecting the username and calling the PubNub.init() method
  when the "Join" button is clicked.
  */

  angular.module('PubNubAngularApp').controller('JoinCtrl', function($rootScope, $scope, $location, PubNub) {
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


  angular.module('PubNubAngularApp').controller('ChatCtrl', function($rootScope, $scope, $location, PubNub) {
    var _ref;
    if (!PubNub.initialized()) {
      $location.path('/join');
    }
    /* Use a "control channel" to collect channel creation messages*/

    $scope.controlChannel = '__controlchannel';
    $scope.channels = [];
    /* Publish a chat message*/
   
    $scope.publish = function() {
      console.log('publish', $scope);
      if (!$scope.selectedChannel) {
        return;
      }
      Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
      }
      Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
      }
      // var newDate = new Date();
      // var datetime = newDate.today() + " " + " @ " + " " + newDate.timeNow();
      // $scope.datetime = datetime;

      PubNub.ngPublish({

        channel: $scope.selectedChannel,
        message: {
          text: $scope.newMessage,
          user: $scope.data.username,
          time: timeString()
        }

      }
      );
     
      return $scope.newMessage = '';
    };

    function timeString() {
      var newDate = new Date();
      return newDate.today() + " " + " @ " + " " + newDate.timeNow();
    }
    /* Create a new channel*/

    $scope.createChannel = function() {
      var channel;
      console.log('createChannel', $scope);
      if (!($scope.data["super"] && $scope.newChannel)) {
        return;
      }
      channel = $scope.newChannel;
      $scope.newChannel = '';
      PubNub.ngGrant({
        channel: channel,
        read: true,
        write: true,
        callback: function() {
          return console.log("" + channel + " all set", arguments);
        }
      });
      PubNub.ngGrant({
        channel: "" + channel + "-pnpres",
        read: true,
        write: false,
        callback: function() {
          return console.log("" + channel + " presence all set", arguments);
        }
      });
      PubNub.ngPublish({
        channel: $scope.controlChannel,
        message: channel
      });
      return setTimeout(function() {
        $scope.subscribe(channel);
        return $scope.showCreate = false;
      }, 100);
    };
    /* Select a channel to display chat history & presence*/

    $scope.subscribe = function(channel) {
      var _ref;
      console.log('subscribe', channel);
      if (channel === $scope.selectedChannel) {
        return;
      }
      if ($scope.selectedChannel) {
        PubNub.ngUnsubscribe({
          channel: $scope.selectedChannel
        });
      }
      $scope.selectedChannel = channel;
      $scope.messages = ['Welcome to ' + channel];
      PubNub.ngSubscribe({
        channel: $scope.selectedChannel,
        auth_key: $scope.authKey,
        state: {
          "city": ((_ref = $rootScope.data) != null ? _ref.city : void 0) || 'unknown'
        },
        error: function() {
          return console.log(arguments);
        }
      });
      $rootScope.$on(PubNub.ngPrsEv($scope.selectedChannel), function(ngEvent, payload) {
        return $scope.$apply(function() {
          var newData, userData;
          userData = PubNub.ngPresenceData($scope.selectedChannel);
          newData = {};
          $scope.users = PubNub.map(PubNub.ngListPresence($scope.selectedChannel), function(x) {
            var newX;
            newX = x;
            if (x.replace) {
              newX = x.replace(/\w+__/, "");
            }
            if (x.uuid) {
              newX = x.uuid.replace(/\w+__/, "");
            }
            newData[newX] = userData[x] || {};
            return newX;
          });
          return $scope.userData = newData;
        });
      });
      PubNub.ngHereNow({
        channel: $scope.selectedChannel
      });
      $rootScope.$on(PubNub.ngMsgEv($scope.selectedChannel), function(ngEvent, payload) {
        var msg;
        msg = payload.message.user ? "[" + payload.message.user + "] " + payload.message.text : "[unknown] " + payload.message;
        msg = payload.message.time ? payload.message.time + " " + msg : msg;
        
        return $scope.$apply(function() {
          return $scope.messages.unshift(msg);
        });
      });
      return PubNub.ngHistory({
        channel: $scope.selectedChannel,
        auth_key: $scope.authKey,
        count: 500
      });
    };
    /* When controller initializes, subscribe to retrieve channels from "control channel"*/

    PubNub.ngSubscribe({
      channel: $scope.controlChannel
    });
    /* Register for channel creation message events*/

    $rootScope.$on(PubNub.ngMsgEv($scope.controlChannel), function(ngEvent, payload) {
      return $scope.$apply(function() {
        if ($scope.channels.indexOf(payload.message) < 0) {
          return $scope.channels.push(payload.message);
        }
      });
    });
    /* Get a reasonable historical backlog of messages to populate the channels list*/

    PubNub.ngHistory({
      channel: $scope.controlChannel,
      count: 500
    });
    /* and finally, create and/or enter the 'WaitingRoom' channel*/

    if ((_ref = $scope.data) != null ? _ref["super"] : void 0) {
      $scope.newChannel = 'WaitingRoom';
      return $scope.createChannel();
    } else {
      return $scope.subscribe('WaitingRoom');
    }
  });

}).call(this);
