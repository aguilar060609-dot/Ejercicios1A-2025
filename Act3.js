const prompt=require("prompt-sync")();
function Calificacion(){
    let Calificacion=parseInt(prompt("Ingrese la calificaion 0 al 100:  "));
    if ( Calificacion > 90 );
        console.log("Execelente")
    } elseif ( Calificacion > 70 && Calificacion < 89  );
    console.log("Bien")
    {else{
    console.log("Reprobado");
    }
}
    
Calificacion()