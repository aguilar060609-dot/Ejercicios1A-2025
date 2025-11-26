const prompt = require ("prompt-sync")();
function Aceptacion() {
    let edad = parseInt(prompt("Introduce la edad: "));
    let nota = parseInt(prompt("Introduce la nota: "))
    let sexo = prompt("Introduce el sexo (M/F): ");

    if (nota >= 5 && edad >= 18){
        if (sexo === 'M'){
            console.log("Posible");
        } else if (sexo === 'F'){
            console.log("Aceptada");
        } else {
            console.log("No Aceptada");
        }
    } else {
        console.log("No Aceptada")
    }
}

Aceptacion();