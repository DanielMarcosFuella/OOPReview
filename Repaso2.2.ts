 import {Mobile} from "./Repaso2"

let movil1:Mobile = new Mobile("Nokia3210", 3210, "Nokia", 320, "Perla", false, 2, 600)
let movil2:Mobile = new Mobile("iPhone3G", 3, "iPhone", 500, "Oro", false, 3, 900)
let movil3:Mobile = new Mobile("Samsug Galaxy 10", 10, "Samgug", 640, "Blanco", true, 4, 1200)

// movil1.setis5G(true)
// movil1.setCameraNumber(4)
// console.log(movil1.toStrong())
// console.log(movil2.toStrong())
// console.log(movil3.toStrong())
let moviles:Mobile[]
moviles=[movil1,movil2,movil3]
for (let i=0;i<moviles.length;i++){
    console.log(moviles[i].toStrong())
}

