export class Mobile{
    private name:string;
    private model:number
    private trademark:string
    private sdSize:number
    private color:string
    private is5G:boolean
    private cameraNumber:number
    private price:number
    constructor(name:string, model:number,trademark:string, sdSize:number, color:string,
         is5G:boolean,cameraNumber:number,price:number){
            this.name=name
            this.model=model
            this.trademark=trademark
            this.sdSize=sdSize
            this.color=color
            this.is5G=is5G
            this.cameraNumber=cameraNumber
            this.price=price
    }
    public GetName():string{
        return this.name
    }
    public GetModel():number{
        return this.model
    }
    public GetTrademark():string{
        return this.trademark
    }
    public GetsdSize():number{
        return this.sdSize
    }
    public GetColor():string{
        return this.color
    }
    public Getis5G():boolean{
        return this.is5G
    }
    public GetCameraNumber():number{
        return this.cameraNumber
    }
    public GetPrice():number{
        return this.price
    }
    public setName(newName:string){
        this.name=newName
    }
    public setModel(newModel:number){
        this.model=newModel
    }
    public setTrademark(newTrademark:string){
        this.trademark=newTrademark
    }
    public setsdSize(newsdSize:number){
        this.sdSize=newsdSize
    }
    public setColor(newColor:string){
        this.color=newColor
    }
    public setis5G(newis5G:boolean){
        this.is5G=newis5G
    }
    public setCameraNumber(newCameraNumber:number){
        this.cameraNumber=newCameraNumber
    }
    public setPrice(newPrice:number){
        this.price=newPrice
    }
    public toStrong():string{
        return "The characteristics of the mobile " + this.name +" are:" + "\n" +
        "Name: " +this.name + "\n" +
        "Model: " +this.model + "\n" +
        "Trademark: " +this.trademark + "\n" +
        "SD Size (GB): " + this.sdSize + "\n" +
        "Color: " +this.sdSize + "\n" +
        "Is 5g?: " +this.is5G + "\n" +
        "Number of Cameras: " +this.cameraNumber 
    }
}


