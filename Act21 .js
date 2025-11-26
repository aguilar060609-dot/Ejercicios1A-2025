const prompt = require ("prompt-sync")();
function NumerosPares(){
    let 
    suma = 0; 
    while(numero % 2 === 0 ){
        numero = parseInt (prompt("Ingrese cualquier numero desde cero: "));
        suma = numero + suma 
    }
    console.log("La suma de los numeros pares es: ", suma );
}
NumerosPares();
