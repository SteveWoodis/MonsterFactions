//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("zomb0", "Zombie Apocalypse", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2),
        new product("zomb1", "Zombie Evolution", "Guacamole anyone?", 16, 90, 0, 1, 1, 1, 2),
        new product("zomb2", "Zombie Chase", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, 2),
        new product("zomb3", "Zombie Outbreak", "Delicious and refreshing.", 3, 50, 4, 4, 1, 2, 0),
        new product("zomb4", "Zombie Attack", "OK, not that nutritious, but sooo good!", 10, 100, 0, 0, 0, 1, 2),
        new product("zomb5", "Zombie Tripping", "Pink or red, always healthy and delicious.", 11, 50, 4, 4, 1, 1, 1),
        new product("zomb6", "Zombie Control", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 1, 1),
        new product("zomb7", "Walking Dad", "Exotic, fragrant, tasty!", 8, 50, 4, 4, 0, 1, 2),
        new product("zomb8", "Bashing Zombie", "These come from New Zealand.", 14, 90, 1, 4, 0, 2, 2),
        new product("zomb9", "Z.A.R.T.", "Unusual and highly addictive!", 18, 125, 1, 4, 0, 2, 2),
        new product("zomb10", "Tripping", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 1, 1),
        new product("zomb11", "Zombie Cat", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 1, 2),
        new product("zomb22", "Fast Food", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 2, 2),
        new product("zomb33", "Zombie", "Add some cream and enjoy.", 19, 70, 1, 2, 0, 1, 2),
        new product("zomb44", "Zombie", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 1, 2),
        new product("zomb55", "Zombie", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, 0, 2, 0, 2, 0),
        new product("zomb66", "Zombie", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 1),
        new product("zomb77", "Zombie", "Believe it or not, they are berries!", 6, 120, 4, 3, 0, 1, 3),
        new product("zomb88", "Zombie", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 1, 2),
        new product("zomb99", "Zombie", "Easier to peel than oranges!", 8, 50, 3, 4, 1, 1, 2)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
