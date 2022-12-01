function indiceDoMenor(numeros) {
  let menorIndice = 0;
  for(let indice in numeros){
    if(numeros[menorIndice] > numeros[indice]){
      menorIndice = indice;
    }
  }
  return menorIndice
}
console.log(indiceDoMenor([18,1,6,7,2,]))