var input = require('readline-sync')

//declaração de funções
function cabecalho() {
  console.log(`------------------------------`)
  console.log(` ex046_ParOuImparProcedimento`)
  console.log(`------------------------------`)
}

function parOuImpar(valor) {
  console.clear()
  cabecalho()
  if (valor % 2 == 0) {
    console.log(`${valor} é par!`)
  } else {
    console.log(`${valor} é ímpar!`)
  }
}

//declaração de variáveis
let numero = 0

//entrada de dados
cabecalho()
numero = Number(input.question(`Digite um número: `))

//processamento e saída de dados
parOuImpar(numero)
console.log(`------------------------------`)
