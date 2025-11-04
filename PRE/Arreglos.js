  //Declaracion de arreglos 
/*
Number
String
Boolean 
Null
unidifenea
Tipos de datos 
Object
Function 
*/

function DatosArreglos(){
    let Datos=[3,7,9,3,6,2];
    let Suma=0;
    for(i=0;i<Datos.length;i++){
        if((Datos[i])%2===0) { 
          suma+=Datos[i];  
        }
        //console.log(`La posicion es ${i} y el valor es ${Datos[i]}`);
    }
    console.log(`La suma de los Datos es ${suma}`);
} 

DatosArreglos();


  