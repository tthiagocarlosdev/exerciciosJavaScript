var input = require('readline-sync')

//declaração de funções
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex050_fatorialFuncao`)
  console.log(`------------------------------`)
}

function fatorial(valor){
  let contador = valor
  let fatorial = 1

  do {
    fatorial *= contador
    contador--
  } while (contador > 0)

  return fatorial
}

//declaração de variáveis
let numero = 0

//entrada de dados
cabecalho()
numero = Number(input.question(`Digite um número: `))

//processamento saída de dados
console.log(`O fatorial de ${numero} é igual a ${fatorial(numero)}`)
console.log(`------------------------------`)