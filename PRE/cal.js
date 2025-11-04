const prompt = require('prompt-sync')();
function calcularCostoViaje(alumnos) {
    let total;  
    let porAlumno,alumnos;
alumnos= parseInt  (prompt("Ingrese cantidad de Alumnos: "))
    if (alumnos >= 100) {
        porAlumno = 65;
        total = alumnos * porAlumno;
    } else if (alumnos >= 50) {
        porAlumno = 70;
        total = alumnos * porAlumno;
    } else if (alumnos >= 30) {
        porAlumno = 95;
        total = alumnos * porAlumno;
    } else {
    
        total = 4000;
        porAlumno = total / alumnos;
    }

    console.log(`Precio de viaje, ${Total}!`);
}
calcularCostoViaje()
