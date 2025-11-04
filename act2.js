const prompt = require("prompt-sync")()
let edad = parseInt (prompt("Ingrese la edad: "));
let resultado = edad > 18 ? "Acesso Permitido" : edad < 17 ? "Acesso Denegado"
console.log(resultado);