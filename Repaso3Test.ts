import { MobileLib } from "./Repaso3";
import{Mobile} from "./Repaso2"
let noki = new Mobile("Nokia","3210","Nokia corp",8,false,1,20)
let i3G = new Mobile("iPhone","3","Apple",32,false,2,100)
let SG10 = new Mobile("Samsung","Galaxy","Samsung inc",128,true,4,400)
let SG11 = new Mobile("Samsung","Galaxy 11","Samsung inc",256,true,6,800)

let lib = new MobileLib("Esta Tiendo", "Mi calle",[noki,i3G,SG10,SG11]);


console.log(lib.totalPrice);
lib.printLib();