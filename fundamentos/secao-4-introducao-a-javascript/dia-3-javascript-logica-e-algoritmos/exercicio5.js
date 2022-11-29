let array = ['java', 'javascript', 'python', 'html', 'css'];

let highString =  array[0];
let smallString = array[0];

for(index = 0; index < array.length; index +=1){
  if(array[index].length > highString.length) {
    highString = array[index];
  }
}

for(index = 0; index < array.length; index +=1){
  if(array[index].length < smallString.length){
    smallString = array[index];
  }
}
console.log(highString);
console.log(smallString);