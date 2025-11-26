const prompt = require ("prompt-sync");
function CalCosto(){
    let Costo_x_alumno;
    let CosTotal;
    let alumnos = parseInt(prompt("Ingrese cantidad de alumnos: ") );

    if (alumnos >= 100) {
        Costo_x_alumno = 65 ; 
        CosTotal = Costo_x_alumno * alumnos;
    } else if (alumnos >= 50) {
        Costo_x_alumno = 70;
        CosTotal = Costo_x_alumno * alumnos;
    } else if (alumnos >= 30) {
        Costo_x_alumno = 95;
        CosTotal = Costo_x_alumno * alumnos;
    } else {
        CosTotal = 4000;
        Costo_x_alumno = CosTotal / alumnos;
    }
    console.log(`Costo por alunmo: ${Costo_x_alumno}`);
    console.log(`Pago a la compañia: ${CosTotal}`);
}

CalCosto();