var input = require('readline-sync')

//declaração de procedimento
function cabecalho(){
  console.log(`------------------------------`)
  console.log(`     ex044_detectorPesado`)
  console.log(`Maior peso até agora: ${maiorPeso} kg.`)
  console.log(`------------------------------`)
}

//declaração de variáveis
let maiorPeso = 0
let nomeMaiorPeso = ``
let nome = ``
let peso = 0

//entrada de dados
for(let contador = 0; contador < 5; contador++){
  cabecalho()
  nome = String(input.question(`Digite o nome: `))
  peso = Number(input.question(`Digite o peso (kg) de ${nome}: `))
  //processamento de dados
  if(peso > maiorPeso){
    maiorPeso = peso
    nomeMaiorPeso = nome
  }
  console.clear()
}

//saída de dados
cabecalho()
console.log(`A pessoa mais pesada foi ${nomeMaiorPeso} com ${maiorPeso} kg.`)
console.log(`------------------------------`)