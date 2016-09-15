var app = angular.module('monsterApp',['ngRoute', 'pubnub.angular.service', 'ngAnimate','ngSanitize','ui.bootstrap']);
app.config(function($routeProvider){
    $routeProvider
    .when('/landing', {
        templateUrl: 'landing.html',
        controller: 'landingCtrl'
    })
    .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
    })
    .when('/profile', {
        templateUrl: 'profile.html',
        controller: 'profileCtrl'
        })
    .when('/register', {
        templateUrl: 'login/Registration.html',
        controller: 'RegController'
    })
    .when('/Gallery', {
        templateUrl: 'mGallery.html',
        controller: 'mGalleryCtrl'
    })
    .when('/Game', {
        templateUrl: 'monster-game.html',
        controller: 'gameCtrl'
    })
    .when('/Contact', {
        templateUrl: 'contactus.html',
        controller: 'contactCtrl'
    }).when('/join', {
        templateUrl: 'mChat/views/join.html',
        controller: 'JoinCtrl'
        }).when('/chat', {
        templateUrl: 'mChat/views/chat.html',
        controller: 'ChatCtrl'
    }).when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController
    }).when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: storeController
    }).when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
    }).when('/monsterNation', {
        templateUrl: 'monsternation.html',
        controller: 'monsterNationCtrl'
    }).when('/werewolf-landing',{
        templateUrl: 'mChat/werewolf-landing.html',
        controller: 'werewolf-landingCtrl'
    }).when('/vampire-landing', {
        templateUrl: 'mChat/vampire-landing.html',
        controller: 'vampire-landingCtrl'
    }).when('/zombie-landing', {
        templateUrl: 'mChat/zombie-landing.html',
        controller: 'zombie-landingCtrl'
    }).when('/suggestion-landing',{
        templateUrl: 'mChat/suggestion-landing.html',
        controller: 'suggestion-landingCtrl'
    })
    .otherwise({
        redirectTo: '/landing'
    })
    });
// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
app.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("MonsterStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "monsterbus15@yahoo.com");

   
    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
    
});
