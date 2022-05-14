"use strict";
exports.__esModule = true;
exports.MobileLib = void 0;
var MobileLib = /** @class */ (function () {
    function MobileLib(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = calcPrice(mobiles);
        function calcPrice(mobiles) {
            var price = 0;
            for (var i = 0; i < mobiles.length; i++) {
                price += mobiles[i].getPrice();
            }
            return price;
        }
    }
    MobileLib.prototype.printLib = function () {
        console.log("This is all my mobiles: \n");
        for (var i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].toString1();
        }
        console.log("Price Overall " + this.totalPrice);
    };
    return MobileLib;
}());
exports.MobileLib = MobileLib;
