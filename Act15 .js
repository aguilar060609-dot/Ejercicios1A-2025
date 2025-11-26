const prompt = require ("prompt-sync")();
function exponente(){
let nbase , nexponente , resutado = 1 ;
nbase = parseInt(prompt("Ingrese numero base: "));
nexponente = parseInt (prompt("Ingrese numero exponente: "));

if (nexponente > 0 ) {
    for (i=1; i <= nexponente; i++) {
        resultado = resutado* nbase; 
        console.log(`El resultado de ${nbase} elevado a ${nexponente} = ${resutado}`);
    }
}else{
    console.log("Positivo" + resutado)
}
}
exponente();