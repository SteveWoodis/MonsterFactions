var app = angular.module('monsterApp', ['ngRoute', 'pubnub.angular.service', 'ui-bootstrap']);
//var app = angular.module('monsterApp', ['firebase', 'ngRoute', "pubnub.angular.service"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/join', {
      templateUrl: '/mChat/views/join.html',
      controller: 'JoinCtrl'
    }).when('/chat', {
      templateUrl: '/mChat/views/chat.html',
      controller: 'ChatCtrl'
    })
    .when('/landing', {
        templateUrl: '/landing.html',
        controller: 'landingCtrl'
    })
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/registration', {
        templateUrl: '/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/Gallery', {
        templateUrl: 'mGallery.html',
        controller: 'mGalleryCtrl'
    })
    .when('/Contact', {
     templateUrl: '/contactus.html',
        controller: 'contactCtrl'
        // resolve: {
        //    getProjectsRef: function (gprojectService) {
        //     return gprojectService.getProjects();
        //     }
        // }
    }).
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).
     
    when('/monsterNation', {
     templateUrl: '/monsterNation.html',
        controller: 'monsterNationCtrl'
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
