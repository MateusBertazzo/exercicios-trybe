let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaAngulo = anguloA + anguloB + anguloC;

let somaAnguloPositive = anguloA > 0 && anguloB > 0 && anguloC > 0

if (somaAnguloPositive) {
   if (somaAngulo == 180) {
    console.log(true)
   } else {
    console.log(false)
   }

} else {
    console.log("Erro")
}