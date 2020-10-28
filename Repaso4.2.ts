import {Punto} from "./Repaso4.1"
import {Triangulo} from "./Repaso4.3"
// let coordenadas1:Punto = new Punto(3,4)
// let coordenadas2:Punto = new Punto(10,15)
// console.log(coordenadas1.getY(), coordenadas1.getX())
// console.log(coordenadas1.distanciaAlOrigen())
// console.log(coordenadas1.calcularDistancia(coordenadas2))

let punto = new Punto(-5,8);
let punto2 = new Punto(10,15);
let punto3 = new Punto(4,3);
let punto4 = new Punto(12,-4);
let punto5= new Punto(5,-4);


let arrPuntos = [punto,punto2,punto3,punto4]
console.log(punto5.calcularMasCercano(arrPuntos).toString())
let triangulo1:Triangulo = new Triangulo(punto,punto2,punto3)
console.log(triangulo1.calcularLongitudLados())