import shoppingCartService from './shoppingCart-service';
export default angular.module('monsterApp.components.shoppingCart', [])
    .factory('shoppingCartService', shoppingCartService)
    .name;