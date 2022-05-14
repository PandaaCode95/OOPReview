import{Mobile} from "./Repaso2"

let noki = new Mobile("Nokia","3210","Nokia corp",8,false,1,20)
let i3G = new Mobile("iPhone","3","Apple",32,false,2,100)
let SG10 = new Mobile("Samsung","Galaxy","Samsung inc",128,true,4,400)

console.log(noki);
console.log(i3G);
console.log(SG10);
SG10.toString1();
noki.set5G(true)
noki.setCamera(4);
noki.toString1();

let arr = [noki,i3G,SG10];

for(let i =0; i<arr.length;i++){
    arr[i].toString1();
}
