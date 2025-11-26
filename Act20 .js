const prompt = require ("prompt-sync")();
function Numeros(){
    let numero 
    let suma = 0; 
    while (numero !=0) {
        numero = parseInt (prompt("Ingrese un numero diferente de cero: "));
        suma = suma + numero;
    }
}
Numeros();