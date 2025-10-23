//libreria para usar los comandos de consola
const prompt = require ("prompt-sync")();

//funcion de inicio operacion 
function Calificacion() {
    let cal = parseInt(prompt("Ingrese la Calificacion: "));
    let respuesta = cal > 6 && cal <8? "Regular" : cal >= 8? "Exelente "
    console.log(`La calificacion es ${cal} y es ${respuesta}`);
}
}
Calificacion();
