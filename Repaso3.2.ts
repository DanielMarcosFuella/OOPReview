import {Mobile} from "./Repaso2"
import {MobileLibrary} from "./Repaso3.1"

let movil1:Mobile = new Mobile("Nokia3210", 3210, "Nokia", 320, "Perla", false, 2, 600)
let movil2:Mobile = new Mobile("iPhone3G", 3, "iPhone", 500, "Oro", false, 3, 900)
let movil3:Mobile = new Mobile("Samsug Galaxy 10", 10, "Samgug", 640, "Blanco", true, 4, 1200)
let movil4:Mobile = new Mobile("Xiaomi230", 230, "Xiaomi", 820, "Plata", true, 3, 350)

let mismoviles=[movil1,movil2,movil3,movil4]

let libreria1:MobileLibrary = new MobileLibrary("MundoMobile", "Lobon", mismoviles)

console.log(libreria1.GetName())
console.log(libreria1.Getmobiles())
console.log(libreria1.GetLocation())