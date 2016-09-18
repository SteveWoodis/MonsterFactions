'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
export default function storeController($scope, $routeParams, shoppingCartService) {

  // get store and cart from service
  $scope.store = shoppingCartService.store;
  $scope.cart = shoppingCartService.cart;

  // use routing to pick the selected product
  if ($routeParams.productSku != null) {
    $scope.product = $scope.store.getProduct($routeParams.productSku);
  }
}
