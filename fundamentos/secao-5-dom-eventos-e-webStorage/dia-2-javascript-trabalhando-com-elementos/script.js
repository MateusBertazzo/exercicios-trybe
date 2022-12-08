const ondeEuEstou = document.getElementById("elementoOndeVoceEsta");

const pai =  ondeEuEstou.parentElement;
pai.style.color = 'red';

console.log(pai)

const corPrimeiroFilho = document.getElementById('primeiroFilho');
corPrimeiroFilho.innerHTML = 'Esse é meu primeiro filho'

console.log(pai.firstElementChild);


console.log(ondeEuEstou.previousElementSibling);

console.log(ondeEuEstou.nextSibling)