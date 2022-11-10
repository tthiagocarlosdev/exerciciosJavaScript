var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`       ex048_somaFuncao`)
  console.log(`------------------------------`)
}

function somaValores(numeroA, numeroB){
  return numeroA + numeroB
}

//declaração de variáveis
let valorA = 0
let valorB = 0
let soma = 0

//entrada de dados
cabecalho()
valorA = Number(input.question(`Digite um valor: `))
valorB = Number(input.question(`Digite outro valor: `))

//processamento e saída de dados
soma = somaValores(valorA, valorB)
console.log(`A soma entre ${valorA} e ${valorB} é igual a ${soma}`)
console.log(`------------------------------`)