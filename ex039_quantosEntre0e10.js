var input = require('readline-sync')
let valorEntre0e10 = 0
let somaImpar = 0
let valores = 0

console.log(`------------------------------`)
console.log(`    ex039_quantosEntre0e10`)
console.log(`------------------------------`)

for (let contador = 1; contador <= 6; contador++) {
  valores = Number(input.question(`Digite o ${contador}º valor: `))
  if (valores >= 0 && valores <= 10) {
    valorEntre0e10++
    if (valores % 2 == 1) {
      somaImpar += valores
    }
  }
}

console.log(`------------------------------`)
console.log(`Foram digitados ${valorEntre0e10} valores entre 0 e 10!`)
console.log(`A soma dos valores ímpares entre 0 e 10 é igual a ${somaImpar}!`)
console.log(`------------------------------`)
