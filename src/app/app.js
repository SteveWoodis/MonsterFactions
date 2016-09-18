import angular from 'angular';
import 'angular-route';
import 'jquery';
import 'bootstrap';
import 'ui-bootstrap';
import 'pubnub';
import 'pubnub-angular';
import 'angular-animate';
import 'angular-sanitize';

import components from './components';

import './js/mainController.js';
import './js/ModalPopupWindow.js';
import './js/landingCtrl.js';
import './js/controller.js';
import './js/store.js';
import './js/product.js';
import './js/shoppingCart.js';
import './js/aboutUsCtrl.js';
import './js/contactCtrl.js';
import './js/mGalleryCtrl.js';
import './js/product.js';
import './js/store.js';
import './js/shoppingCart.js';
import './js/controller.js';
import './js/ModalController.js';
import './login/loginController.js';
import './login/RegController.js';
import './js/werewolf-landingCtrl.js';
import './js/vampire-landingCtrl.js';
import './js/zombie-landingCtrl.js';
import './js/suggestion-landingCtrl.js';
import './js/gameCtrl.js';
import './js/profileCtrl.js';

import routes from './app.routes.config.js';

angular.module('monsterApp',
  [
    'ngRoute',
    'pubnub.angular.service',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    components
  ])
  .config(routes);
    