var input = require('readline-sync')
console.log("=====================")
console.log(" SOMADOR MAIOR MENOR ")
console.log("=====================")
let contador = 1
let somaValores = 0
let maiorValor = 0
let menorValor = 0
while(contador <= 5){
  let valor = Number(input.question(`Digite o ${contador}° valor: `))
  if(valor > maiorValor){
    maiorValor = valor
  }
  if(contador == 1){
    menorValor = valor
  }
  if(valor < menorValor){
    menorValor = valor
  }
  somaValores += valor
  contador++
}
//console.clear()
console.log("=====================")
console.log(" SOMADOR MAIOR MENOR ")
console.log("=====================")
console.log(`Total dos valores: ${somaValores}`)
console.log(`Maior valor: ${maiorValor}`)
console.log(`Menor valor: ${menorValor}`)
console.log("=====================")