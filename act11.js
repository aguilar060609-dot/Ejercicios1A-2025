const prompt = require("prompt-sycn")();
function validarNumero(){
let num ;
num = parseInt(prompt("Ingrese cualquier numero: "));
if ( num > 0 ){
    console.log("Numero Positivo")
}else if ( num < -0 ){
    console.log("Numero Negativo")
}else ( num === 0 ) 
    console.log("Cero")
}

validarNumero();