const prompt = require("prompt-sync")();
function edad() {
    let edad = parseInt (prompt("Ingrese la edad: "));
    
    if (edad >= 18) {
        console.log("Acceso permitido") 
    } else {
        console.log("Denegado")
    } 
}
edad();
