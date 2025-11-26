const  prompt = require ("prompt-sync")()
function calculadora(){
    let num , multiplicacion;
    console.log("Escriba un numero");
    num = parseInt(prompt("Ingrese un numero para realizar la multiplicacion: "));

    for (let i = 1; i <= 10; i++) {
        multiplicacion = num * i;
        console.log(`${num} x  ${i} = ${multiplicacion}`);
    }
}
calculadora();