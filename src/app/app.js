import angular from 'angular';
import 'angular-route';
import 'jquery';
import 'bootstrap';
import 'ui-bootstrap';
import 'pubnub';
import 'pubnub-angular';
import 'angular-animate';
import 'angular-sanitize';

import 'app/js/mainController.js';
import 'app/js/ModalPopupWindow.js';
import 'app/js/envService.js';
import 'app/js/landingCtrl.js';
import 'app/js/controller.js';
import 'app/js/store.js';
import 'app/js/product.js';
import 'app/js/shoppingCart.js';
import 'app/js/aboutUsCtrl.js';
import 'app/js/contactCtrl.js';
import 'app/js/mGalleryCtrl.js';
import 'app/js/product.js';
import 'app/js/store.js';
import 'app/js/shoppingCart.js';
import 'app/js/controller.js';
import 'app/js/ModalController.js';
import 'app/login/loginController.js';
import 'app/login/RegController.js';
import 'app/js/werewolf-landingCtrl.js';
import 'app/js/vampire-landingCtrl.js';
import 'app/js/zombie-landingCtrl.js';
import 'app/js/suggestion-landingCtrl.js';
import 'app/js/gameCtrl.js';
import 'app/js/profileCtrl.js';

import routes from './app.routes.config.js';

angular.module('monsterApp', ['ngRoute', 'pubnub.angular.service', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .config(routes)
    .factory('DataService', function () {
      // create a data service that provides a store and a shopping cart that
      // will be shared by all views (instead of creating fresh ones for each view).

      // create store
      var myStore = new store();

      // create shopping cart
      var myCart = new shoppingCart('MonsterStore');

      // enable PayPal checkout
      // note: the second parameter identifies the merchant; in order to use the
      // shopping cart with PayPal, you have to create a merchant account with
      // PayPal. You can do that here:
      // https://www.paypal.com/webapps/mpp/merchant
      myCart.addCheckoutParameters('PayPal', 'monsterbus15@yahoo.com');


      // return data object with store and cart
      return {
        store: myStore,
        cart: myCart
      };

    });
