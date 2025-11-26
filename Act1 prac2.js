const prompt=require("prompt-sync");
function medidas(){
let busto = 89;
let cintura = 58; 
let cadera = 89 ;
let estatura = 1.70 ;
let peso = 53;

let pulgadas = 0.3937 ;
let pies = 3.28084 ;
let libras   = 2.20462 ;

busto_a_pul= busto * pulgadas;
cintura_a_pulg = cintura* pulgadas;
cadera_a_pulg = cadera* pulgadas;
estatura_a_pies = estatura * pies;
kg_a_lb = peso * libras ;

console.log(`Medidadas en pulgadas: ${busto_a_pul} , ${cintura_a_pulg} , ${cadera_a_pulg }  `);
console.log(`Medidadas en pies: ${estatura_a_pies}  `);
console.log(`Medidadas en pulgadas: ${kg_a_lb} `);
}
medidas();