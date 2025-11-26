const prompt = require("pormpt-sync")();
function evaluarContaminacion(indice) {
  if (indice <= 37) {
    console.log("El índice de contaminación es aceptable.");
  } else if (indice >= 38 && indice <= 55) {
    console.log("El índice de contaminación es desagradable.");
  } else if (indice > 55) {
    console.log("El índice de contaminación es peligroso.");
  } else {
    console.log("El índice de contaminación no es válido.");
  }
}
evaluarContaminacion();
