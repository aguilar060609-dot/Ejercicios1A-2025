const prompt = require ("prompt-sync")();
function ValidarDato() {
    let respuesta ;
    while(respuesta !== "n" && respuesta !== "N") {
        respuesta = prompt("¿Desea continuar? otra letra o n para terminar: ");
        console.log(respuesta);
    }
}
ValidarDato();