export class Mobile{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number
    private color:string
    private is5G:boolean
    private cameraNumber:number;
    private price:number;
    

    constructor( name:string, model:string, trademark:string, sdSize:number,is5G:boolean, cameraNumber:number,price:number){
        this.name=name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize=sdSize;
        this.color=color();
        this.is5G=false;
        this.cameraNumber=cameraNumber;
        this.price=price;
    
    function color():string {
       let colours:string[] = ["plata", "dorado", "negro", "blanco"]
       let colour:string = colours[Math.round(Math.random() * colours.length)]
       return colour;
   }
}
    toString1():void{
    let res:string ="The characteristics of the mobile "+this.name+ " are:"+"\n"
    for (let atribute in this){
        if(typeof this[atribute] == "string"|| typeof this[atribute] == "number"|| typeof this[atribute] == "boolean"){
            res = res + atribute+"-"+ this[atribute]+"\n";
    }
    }console.log(res)
}
    set5G(ans:boolean){
        this.is5G=ans;
    }
    setCamera(ans:number){
        this.cameraNumber=ans;
    }
    getPrice():number{
        let price=this.price;
        return price
    }
}