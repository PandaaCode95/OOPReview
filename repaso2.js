"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color();
        this.is5G = false;
        this.cameraNumber = cameraNumber;
        this.price = price;
        function color() {
            var colours = ["plata", "dorado", "negro", "blanco"];
            var colour = colours[Math.round(Math.random() * colours.length)];
            return colour;
        }
    }
    Mobile.prototype.toString1 = function () {
        var res = "The characteristics of the mobile " + this.name + " are:" + "\n";
        for (var atribute in this) {
            if (typeof this[atribute] == "string" || typeof this[atribute] == "number" || typeof this[atribute] == "boolean") {
                res = res + atribute + "-" + this[atribute] + "\n";
            }
        }
        console.log(res);
    };
    Mobile.prototype.set5G = function (ans) {
        this.is5G = ans;
    };
    Mobile.prototype.setCamera = function (ans) {
        this.cameraNumber = ans;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
