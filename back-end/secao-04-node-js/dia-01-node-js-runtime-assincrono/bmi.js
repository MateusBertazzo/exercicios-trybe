const readline = require('readline-sync');

const weightInKg = readline.question("Qual o seu Peso? ");
const heightInCm = readline.question("Qual a sua Altura em Metros? ");


function handleBmi(peso, altura) {
  console.log(`Weight: ${peso}, Height: ${altura}`);

  const heightInMeters = altura / 100;
  const heightInSquared = heightInMeters ** 2;

  const bmi = peso / heightInSquared;
  return bmi;
}

console.log("BMI:", handleBmi(weightInKg, heightInCm).toFixed(2))
