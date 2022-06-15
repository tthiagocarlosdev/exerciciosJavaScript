var input = require('readline-sync')
console.log("=====================")
console.log(" CONVERSOR N VEZES ")
console.log("=====================")
let contador = 0
let valorEmReais = 0
let valorEmDolares = 0
let quantidadeDeConversoes = Number(input.question(`Quantas vezes você quer converter? `))
while(contador < quantidadeDeConversoes){
  console.log("=====================")
  valorEmReais = Number(input.question(`Qual o valor em R$ `))
  valorEmDolares = valorEmReais / 5.14
  console.log(`O valor convertido em US$ ${valorEmDolares.toFixed(2)}`)
  contador += 1
}
console.log("=====================")
console.log(" CONVERSOR N VEZES ")
console.log("=====================")
console.log(`Conversão Finalizada!`)
console.log("=====================")
