// Crie um sistema que adicione novas pessoas usuarias nos sistemas da empresa

let novasPessoasUsuarias = ['pedro', 'Arthur', 'Mateus', 'Rodrigo','Zirlene'];

let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack','Zoom'];

let login = 'usuarioTryber'
let senha = 'trybe2022'
let temAcesso = false;

if(login === 'usuarioTryber' && senha === 'trybe2022'){
  temAcesso = true;
  console.log('Acesso permitido')
} else {
  console.log('Acesso negado!')
}

if(temAcesso === true){
  // Código aqui
  for(index = 0; index < novasPessoasUsuarias.length; index +=1){
    // array[index] 
    console.log(`${novasPessoasUsuarias[index]}_${Math.floor(Math.random() * 2015)}`)
    // Math.floor(Math.random() * 2015) para gerar números aleatórios
  }
}

//como verificar que eu tenho acesso
//como passar pelo o array de sistema 
//como passar pelo o array de novas pessoas

if(temAcesso === true){
  for(let indexSistemas = 0; indexSistemas < sistemas.length; indexSistemas += 1){
    console.log(`> Sistemas: ${sistemas[indexSistemas]} `)
    
    for(let indexPessoas = 0; indexPessoas < novasPessoasUsuarias.length; indexPessoas += 1){
      console.log(novasPessoasUsuarias[indexPessoas])
    }
  }
}


