var app = angular.module('monsterApp', ['firebase', 'ngRoute', "pubnub.angular.service"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/join', {
      templateUrl: 'views/join.html',
      controller: 'JoinCtrl'
    }).when('/chat', {
      templateUrl: 'views/chat.html',
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
    .when('/contact', {
     templateUrl: '/contact.html',
        controller: 'contactCtrl'
        // resolve: {
        //    getProjectsRef: function (gprojectService) {
        //     return gprojectService.getProjects();
        //     }
        // }
    }).
      when('/store', {
        templateUrl: 'ShoppingCart/partials/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'ShoppingCart/partials/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'SHoppingCart/partials/shoppingCart.htm',
        controller: storeController
      })
    .when('/monsterNation', {
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
    myCart.addCheckoutParameters("PayPal", "monster-Factions@gmail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "500640663394527",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});
