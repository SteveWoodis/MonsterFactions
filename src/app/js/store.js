import product from './product';
//----------------------------------------------------------------
// store (contains the products)
//
function store() {
  this.products = [
    new product('were-t', 'Werevolf', 'Run as fast as you can!', 19.99, 90, 0, 2, 0, 1, 2),
    new product('were-t', 'Werevolf', 'Run as fast as you can!', 19.99, 90, 0, 2, 0, 1, 2),
    new product('were-t', 'Werevolf', 'Run as fast as you can!', 19.99, 90, 0, 2, 0, 1, 2),
    new product('were-t', 'Werevolf', 'Run as fast as you can!', 19.99, 90, 0, 2, 0, 1, 2),
    new product('were-t', 'Werevolf', 'Run as fast as you can!', 19.99, 90, 0, 2, 0, 1, 2),
  ];
}

store.prototype.getProduct = function (sku) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].sku == sku)
      return this.products[i];
  }
  return null;
};
