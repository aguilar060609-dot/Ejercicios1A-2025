const prompt = require("prompt-sync")();
function arreglos(){

    let frutas = [ ];
    let i = 0;
    let dimension ;

    dimension = parseInt(prompt("Ingrese la cantidad de datos: "));
    while ( i < dimension) {
        let frutitas = pormpt("Ingresa la fruta: ");
        frutas.push(frutitas);
        i++;
    }
    for(let fruta of frutas){
        console.log(fruta)
    }
}
arreglos();