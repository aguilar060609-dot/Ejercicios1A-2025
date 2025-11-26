const prompt = require("prompt-sync")();
function Sumatoria(){
let num1 = parseInt(prompt("ingresa el primer numero: "));
let num2 = parseInt(prompt("ingresa el segundo numero: "));
let resultado
 
if( num1 > num2 ){
    resultado = num1 + num2;
    console.log(`El primero es mayor. La suma es: ${resultado}`);
}else if (num2 > num1 ){
    resultado = 0;
    for (let i = num1; i <= num2; i++) {
        resultado += i;
    }
    console.log(`El segundo es mayor.La sumatoria entre ellos es ${resultado}`);
}else{
    resultado = num1* num2;
    console.log(`Si los numeros sonn iguales. El producto es: ${resultado}`);
}
}
Sumatoria();