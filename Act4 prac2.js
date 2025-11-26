const prompt = requeri("prompt-sync")();
function totalDeCompra(){
let precioLibro = 568;
let precioDisco = 45;
let precioTocaDisco = 678;

let destLibro = 0.20;
let desDisco = 0.15;
let descTotal = 0.02;

let subtotalLibros = 4 * (precioLibro * ( 1 - destLibro));
let subtotalDisco = 3 * (precioDisco * (1 - desDisco));
let totalTocaDisco = precioTocaDisco;

let totalSinDescuento = subtotalLibros + subtotalDisco + totalTocaDisco;
let totalFinal = totalSinDescuento (1 - descTotal);
console.log(`El total a pagar con pronto pago es ${totalFinal}`);
}
totalDeCompra();