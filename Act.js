
const prompt = require ("prompt-sync")();
function Calificacion() {
    let cal = parseInt(prompt("Ingrese la Calificacion: "));
    let respuesta = cal > 6 && cal <8? "Regular" : cal >= 8 ? "Exelente" 
console.log(`La Calificacion es${cal} y es ${respuesta}`);
}
Calificacion();
