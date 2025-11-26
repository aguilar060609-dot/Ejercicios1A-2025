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
    let Datos = [3,7,9,3,6,2];
 /*    let Suma=0;
    for(i=0;i<Datos.length;i++){
        if((Datos[i]) % 2 ===0 ) { 
          Suma+=Datos[i];  
        }
        //console.log(`La posicion es ${i} y el valor es ${Datos[i]}`);
    }
    console.log(`La suma de los Datos es ${Suma}`); */
// For..of
/* for(let numeros of Datos){
  console.log(`Los Datos del arreglo son: ${numeros} `);
}
  }  */

/* 
// for..in 
for(let numeros in Datos )
  console.log(`Los Datos del arreglo son: ${Datos[numeros]} `);  */

//For..each
/* Datos.forEach(function (numeros)  {
  console.log(numeros)
}); */

//Funcion flecha
/* Datos.forEach(numeros=>console.log(numeros)) */
let i=0;
/* while(i<Datos.length){
  console.log(Datos[i]);
  i++;
} */
do{
  console.log(Datos[i]);
  i++;
}while(i)
}
 
DatosArreglos();