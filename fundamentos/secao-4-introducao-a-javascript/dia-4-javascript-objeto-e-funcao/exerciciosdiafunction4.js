function maiorPalavra(nomes){
  let maiorCaractere = nomes[0];
  for (let key in nomes){
    if(maiorCaractere.length < nomes[key].length){
      maiorCaractere = nomes[key]
    }
  }
  return maiorCaractere
}
console.log(maiorPalavra(['mateus','pedro','titi','joãovitor', 'Fernando Henrique']))