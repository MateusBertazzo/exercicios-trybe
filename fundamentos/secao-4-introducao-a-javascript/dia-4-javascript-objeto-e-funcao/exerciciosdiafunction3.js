function indiceDoMenor(numeros) {
  let menorIndice = 0;
  for(let key in numeros){
    if(numeros[key] < menorIndice){
      menorIndice = key
    }
  }
  return menorIndice
}
console.log(indiceDoMenor([18,3,6,7,2,-6]))