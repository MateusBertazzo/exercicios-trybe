function verificaPalindrome(word) {
  for (let index in word){
  if(word[index] === word[(word.length -1)- index]) {
    return true;
  }
  }
  return false;
}
console.log(verificaPalindrome('tenet'))

// OU A MANEIRA SIMPLES USANDO OS METODOS (SPLIT, REVERSE, JOIN)

// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }
