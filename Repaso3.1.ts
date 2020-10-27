import {Mobile} from "./Repaso2"

export class MobileLibrary{
    private name:string
    private location:string
    private mobiles:Mobile[]
    private totalPrice: number
    constructor(name:string,location:string,mobiles:Mobile[]){
        this.name=name
        this.location=location
        this.mobiles=mobiles
        this.totalPriceCalculation()
    }
    public GetName():string{
        return this.name
    }
    public GetLocation():string{
        return this.location
    }
    public Getmobiles():Mobile[]{
        return this.mobiles
    }
    public SetName(newName:string){
        this.name=newName
    }
    public SetLocation(newLocation:string){
        this.location=newLocation
    }
    public SetMobiles(newMobiles:Mobile[]){
        this.mobiles=newMobiles
    }
    private totalPriceCalculation():number{
        this.totalPrice=0
        for (let i=0;i<this.mobiles.length;i++){
            this.totalPrice+=this.mobiles[i].GetPrice()
        }
        return this.totalPrice
    }
    public printLibrary():string{
        let mensaje= "This is all my mobiles:" + "\n" 
        for(let i=0;i<this.mobiles.length;i++){
            mensaje+= this.mobiles[i].toStrong()
        }
        mensaje+="Price overall: " + this.totalPrice
        return mensaje
    }
}
