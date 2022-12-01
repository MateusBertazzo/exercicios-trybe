// let mcItems = {
//   'Big Mac': 20,
//   'Big Tasty': 30, 
// };

let person = {
  firstName: 'Amanda',
  lastName: 'Aragao',
  canDrive: true,
  age: 19,
  favoriteMovies: ['Interestelar', 'Harry Potter','Senhor dos aneis'],
  adress: { 
    city: 'São Paulo',
    street: 'Rua Dalvo Trombeta',
    number: 357,
  }
};

// ache o terceiro filme da amanda
// console.log(person.favoriteMovies[2])

// E se eu quiser adicionar uma propriedade ? 
// city nao existia antes, e quando eu precisar adicionar, basta chamar a chave e reatribuir a um novo valor
// como descobrir o tipo de uma propriedade usando o typeof()
for (let key in person.adress) {
  console.log(`${key} + ${person[key]}`)
}

// console.log(`${person[key]}`)
