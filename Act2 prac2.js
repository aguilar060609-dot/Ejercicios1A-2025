const prompt= require("prompt-sync")();
function HrsDormidas(){
let edad = parseFloat(prompt("Ingrese la edad la persona: "));
let dias_totales = edad * 365;
let horas_dormidas = dias_totales * 8;
console.log(`La persona ha drmido ${horas_dormidas} hrs en su vida: `);

}
HrsDormidas();