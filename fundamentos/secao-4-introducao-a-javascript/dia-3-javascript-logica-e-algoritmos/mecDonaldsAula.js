// Imprima duas arrays no console e connect elas

let items = ['Big Mac', 'Big Tasty', 'Batata', 'Refrigerente', 'Suco'];
let price = [20,30,20,5,4];

// Metodo Burro
// console.log(`${items[0]} = ${price[0]} R$ `);
// console.log(`${items[1]} = ${price[1]} R$ `);
// console.log(`${items[2]} = ${price[2]} R$ `);
// console.log(`${items[3]} = ${price[3]} R$ `);
// console.log(`${items[4]} = ${price[4]} R$ `);

let money = 10;
let cart = []
let bigger = 0;

for(let index = 0; index < price.length; index += 1){
  // console.log(`${items[index]} = ${price[index]} R$ `)
  if(price[index] <= money){
    cart.push(`${items[index]}`)
  }
  for(indexVerify = 0; indexVerify < price.length; indexVerify +=1){
    if(index != indexVerify && price[index] + price[indexVerify] <= money){
      cart.push(items[index] + ' + ' + items[indexVerify])
    }
  }


  if(price[index] <= money && price[index] > bigger){
    bigger = price[index];
  }
}
console.log(cart)
