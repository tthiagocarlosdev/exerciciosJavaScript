var input = require('readline-sync')

// declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`   ex045_fazSomaProcedimento`)
  console.log(`------------------------------`)
}

function soma(valorX, valorY){
  console.log(`A soma entre os dois valores é ${valorX + valorY}`)
}

// declaração de variáveis
let valorA = 0
let valorB = 0

// entrada de dados
cabecalho()
valorA = Number(input.question(`Digite o 1 valor: `))
valorB = Number(input.question(`Digite o 2 valor: `))

// processamento e saída de dados
console.clear()
cabecalho()
soma(valorA, valorB)
console.log(`------------------------------`)