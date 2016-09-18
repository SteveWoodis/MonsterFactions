import ShoppingCart from '../../js/shoppingCart';
import store from '../../js/store';

export default function () {
  // create a data service that provides a store and a shopping cart that
  // will be shared by all views (instead of creating fresh ones for each view).

  // create store
  var myStore = new store();

  // create shopping cart
  var myCart = new ShoppingCart('MonsterStore');

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

}
