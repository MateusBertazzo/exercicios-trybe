

function indiceDoMaior(numeros) {
  let maiorIndice = 0;
  for(let key in numeros){
    if(numeros[key] > maiorIndice){
      maiorIndice = key
    }
  }
  return maiorIndice
}
console.log(indiceDoMaior([2,3,6,7,10,12]))