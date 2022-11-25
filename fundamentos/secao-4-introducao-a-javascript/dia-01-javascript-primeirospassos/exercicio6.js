// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let xadres = "TORRE"

switch (xadres.toLowerCase()) {
  case "rei":
    console.log("uma casa pra qualquer direção");
    break;

  case "rainha":
    console.log("Quantas casas quiser, qualquer direção");
    break;

  case "torre":
    console.log("Vertical e Horizontal, quantas casas quiser");
    break

  case "peão":
    console.log("Primeira vez duas casa pra frente, depois só uma")
    break;

  case "bispo":
    console.log("quantas casas quiser, diagonal")
    break

  case "cavalo":
    console.log("3 casas em L")
    break

  default:
    console.log("Erro, peça inválida")
}
