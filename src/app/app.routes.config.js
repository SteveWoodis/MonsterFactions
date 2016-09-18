export default function ($routeProvider) {
  $routeProvider
      .when('/landing', {
        templateUrl: 'pages/landing.html',
        controller: 'landingCtrl'
      })
      .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
      })
      .when('/profile', {
        templateUrl: 'pages/profile.html',
        controller: 'profileCtrl'
      })
      .when('/register', {
        templateUrl: 'login/Registration.html',
        controller: 'RegController'
      })
      .when('/Gallery', {
        templateUrl: 'pages/mGallery.html',
        controller: 'mGalleryCtrl'
      })
      .when('/Game', {
        templateUrl: 'pages/monster-game.html',
        controller: 'gameCtrl'
      })
      .when('/Contact', {
        templateUrl: 'pages/contactus.html',
        controller: 'contactCtrl'
      })
      .when('/join', {
        templateUrl: 'mChat/views/join.html',
        controller: 'JoinCtrl'
      })
      .when('/chat', {
        templateUrl: 'mChat/views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/store', {
        templateUrl: 'ShoppingCart/partials/store.htm',
        controller: storeController
      })
      .when('/products/:productSku', {
        templateUrl: 'ShoppingCart/partials/product.htm',
        controller: storeController
      })
      .when('/cart', {
        templateUrl: 'ShoppingCart/partials/shoppingCart.htm',
        controller: storeController
      })
      .when('/monsterNation', {
        templateUrl: 'monsternation.html',
        controller: 'monsterNationCtrl'
      })
      .when('/werewolf-landing', {
        templateUrl: 'pages/werewolf-landing.html',
        controller: 'werewolf-landingCtrl'
      })
      .when('/vampire-landing', {
        templateUrl: 'pages/vampire-landing.html',
        controller: 'vampire-landingCtrl'
      })
      .when('/zombie-landing', {
        templateUrl: 'pages/zombie-landing.html',
        controller: 'zombie-landingCtrl'
      })
      .when('/suggestion-landing', {
        templateUrl: 'pages/suggestion-landing.html',
        controller: 'suggestion-landingCtrl'
      })
      .otherwise({
        redirectTo: '/landing'
      });
}