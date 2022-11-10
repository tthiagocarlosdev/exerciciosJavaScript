var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex053_testeVetor`)
  console.log(`------------------------------`)
}

//declaração de variáveis
let array = []

// entrada de dados
cabecalho()
for(let contador = 0; contador < 6; contador++){
  array[contador] = input.question(`Digite o ${contador + 1}º valor: `)
}

//processamento e saída de dados
console.clear()
cabecalho()
for(let contador = 0; contador < 6; contador++){
 console.log( array[contador])
}
console.log(`------------------------------`)