var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex051_fibonacciFuncao`)
  console.log(`------------------------------`)
}

function fibonacci(valorA, valorB){
  let string = " "
  let valorC = 0

  for(let contador = 0; contador < 8; contador++){
    valorC = valorA + valorB
    valorA = valorB
    valorB = valorC
    string += valorC + " "
  }

  return string
}

//declaração de variáveis
let numeroA = 0
let numeroB = 0
let meuFibonacci = ""

//entrada de dados
cabecalho()
numeroA = Number(input.question(`Digite um valor: `))
numeroB = Number(input.question(`Digite outro valor: `))

// processamento de dados
meuFibonacci = numeroA + " " + numeroB
meuFibonacci += fibonacci(numeroA, numeroB)

//saída de dados
console.clear()
cabecalho()
console.log(meuFibonacci)
console.log(`------------------------------`)