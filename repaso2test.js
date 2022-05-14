"use strict";
exports.__esModule = true;
var Repaso2_1 = require("./Repaso2");
var noki = new Repaso2_1.Mobile("Nokia", "3210", "Nokia corp", 8, false, 1, 20);
var i3G = new Repaso2_1.Mobile("iPhone", "3", "Apple", 32, false, 2, 100);
var SG10 = new Repaso2_1.Mobile("Samsung", "Galaxy", "Samsung inc", 128, true, 4, 400);
console.log(noki);
console.log(i3G);
console.log(SG10);
SG10.toString1();
noki.set5G(true);
noki.setCamera(4);
noki.toString1();
var arr = [noki, i3G, SG10];
for (var i = 0; i < arr.length; i++) {
    arr[i].toString1();
}
