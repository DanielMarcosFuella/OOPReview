export class Punto{
    private x:number
    private y:number
    constructor(x:number,y:number){
        this.x=x
        this.y=y
    }
    public toString():string{
        return this.getX() + " " + this.getY()
    }
    
    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }
    public setX(newX:number){
        this.x=newX
    }
    public setY(newY:number){
        this.y=newY
    }
    public distanciaAlOrigen():number{
       let resultado:number=0
       resultado = Math.sqrt(((this.x-0)*(this.x-0))+((this.y-0)*(this.y-0)))
       return resultado
    }
    public calcularDistancia(otroPunto:Punto):number{
        let resultado:number=0
        resultado =Math.sqrt(((this.x-otroPunto.x)*(this.x-otroPunto.x))+((this.y-otroPunto.y)*(this.y-otroPunto.y)))
        return resultado
    }
    public calcularCuadrante():number{
        let resultado:number
        if (this.x == 0 || this.y==0){
            resultado=0
        }
        else if (this.x>0&&this.y>0){
            resultado=1
        }
        else if (this.x<0&&this.y>0){
            resultado=2
        }
        else if (this.x<0&&this.y<0){
            resultado=3
        }
        else if (this.x>0&&this.y<0){
            resultado=4
        }
        return resultado
    }
    public calcularMasCercano(puntos:Punto[]):Punto{
        let numInf:number = Number.MAX_VALUE
        let resultado:Punto
        for (let i=0; i<puntos.length;i++){
            if (this.calcularDistancia(puntos[i])<numInf){
                numInf = this.calcularDistancia(puntos[i])
                resultado=puntos[i]
            }
        }
        return resultado
    }
}