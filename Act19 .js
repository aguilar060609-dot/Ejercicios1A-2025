const prompt = require("prompt-sync")();
function Rango(){
    let valor = 0;
    while (valor < 1 || valor >5) {
        valor  = parseInt(prompt("Ingrese un valor entre el 1 y 5: "));
        console.log (`El numero es valido ${vaalor} `);
    }
}

Rango();