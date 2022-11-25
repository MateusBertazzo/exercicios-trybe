let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaAngulo = anguloA + anguloB + anguloC;


if (somaAngulo == 180) {
    console.log(true)
} else if (anguloA < 0) {
    console.log("Erro")
} else if (anguloB < 0) {
    console.log("Erro")
} else if (anguloC < 0) {
    console.log("Erro")
} else {
    console.log(false)
}