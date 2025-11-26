const prompt = require("prompt-sync")();
function NumerosImpares() {
    let N = parseInt(prompt("Ingrese un numero: "));
    let contador = 0;
    for (let i = 1; i <= N; i++) {
        if (i % 2 !== 0) 
            console.log(i)
            contador++;
        }
        console.log(`Cantidad de números impares hasta ${N}: ${contador}`);
    }
    
    NumerosImpares();


