let array = ['java', 'javascript', 'python', 'html', 'css'];

let largerString = array[0]
let smallString = array[0]

for(index = 0; index < array.length; index +=1){
  if(array[index].length > largerString.length) {
    largerString = array[index];
  }
}

for(index = 0; index < array.length; index +=1){
  if(array[index].length < smallString.length){
    smallString = array[index];
  }
}
console.log(largerString);
console.log(smallString);