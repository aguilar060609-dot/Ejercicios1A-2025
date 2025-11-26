const prompt = require ("prompt-sync");
function Numero(){
    let num = parseInt(prompt("Ingrese un numero: "));
for (let i = 100; i >= 0; i--) {
    num = num - 1;
    console.log(`${num} - ${i} = ${num}`);

}
}
Numero();