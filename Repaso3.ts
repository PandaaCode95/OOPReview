import { Mobile } from "./Repaso2";
export class MobileLib {
    private name:string
    private location:string
    public mobiles:Mobile[];
    public totalPrice:number;

    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name=name;
        this.location=location;
        this.mobiles=mobiles;
        this.totalPrice= calcPrice(mobiles);
    
    function calcPrice(mobiles):number{
            let price:number=0;
            for(let i = 0 ; i<mobiles.length; i++){
                price+=mobiles[i].getPrice();
            }return price;
        }
    }
    printLib():void{
        console.log("This is all my mobiles: \n")
        for(let i = 0 ; i<this.mobiles.length;i++){
            this.mobiles[i].toString1()
        }
        console.log("Price Overall " + this.totalPrice);
}
}
