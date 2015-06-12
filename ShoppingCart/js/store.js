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
        new product("werewolf-tshirt0", "werewolf-tshirt 0", "MonsterFactions.com", 12, 90, 0, 2, 0, 1, 2),
        new product("werewolf-tshirt1", "werewolf-tshirt 0", "Have you hugged your monster today?", 16, 90, 0, 1, 1, 1, 2),
        new product("werewolf-tshirt2", "werewolf-tshirt 0", "These tshirts have a bite!.", 4, 120, 0, 2, 1, 2, 2),
        new product("werewolf-tshirt3", "werewolf-tshirt 0", "Werewolves rule! Cats drool.", 3, 50, 4, 4, 1, 2, 0),
        // new product("Zomb4", "Zombie 1", "OK, not that nutritious, but sooo good!", 10, 100, 0, 0, 0, 1, 2),
        // new product("Zomb5", "Zombie 1", "Pink or red, always healthy and delicious.", 11, 50, 4, 4, 1, 1, 1),
        // new product("Zomb6", "Zombie 1", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 1, 1),
        // new product("Zomb7", "Zombie 1", "Exotic, fragrant, tasty!", 8, 50, 4, 4, 0, 1, 2),
        // new product("Zomb8", "Zombie 1", "These come from New Zealand.", 14, 90, 1, 4, 0, 2, 2),
        // new product("Zomb9", "Zombie 1", "Unusual and highly addictive!", 18, 125, 1, 4, 0, 2, 2),
        // new product("Zomb10", "Zombie 1", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 1, 1),
        // new product("Zomb11", "Zombie 1", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 1, 2),
        // new product("Zomb22", "Zombie 1", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 2, 2),
        // new product("Zomb33", "Zombie 1", "Add some cream and enjoy.", 19, 70, 1, 2, 0, 1, 2),
        // new product("Zomb44", "Zombie 1", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 1, 2),
        // new product("Zomb55", "Zombie 1", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, 0, 2, 0, 2, 0),
        // new product("Zomb66", "Zombie 1", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 1),
        // new product("Zomb77", "Zombie 1", "Believe it or not, they are berries!", 6, 120, 4, 3, 0, 1, 3),
        // new product("Zomb88", "Zombie 1", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 1, 2),
        // new product("Zomb99", "Zombie 1", "Easier to peel than oranges!", 8, 50, 3, 4, 1, 1, 2)
        
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
