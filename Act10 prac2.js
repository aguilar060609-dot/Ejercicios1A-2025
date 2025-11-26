const prompt=require("prompt-sync")
function determinarPar(n) {
  if (n > 0) {
    if (n % 2 === 0) {
      console.log(`El número ${n} es par.`);
    } else {
      console.log(`El número ${n} es impar.`);
    }
  } else {
    console.log("El número debe ser mayor que cero.");
  }
}
determinarPar();