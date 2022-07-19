var input = require('readline-sync')
console.log(`------------------------------`)
console.log(`      ex031_fatorial`)
console.log(`------------------------------`)

let numero = Number(input.question(`Digite um número: `))
let contador = numero - 1
let fatorial = numero

do {

  fatorial *= contador
  contador--

} while (contador != 0)

console.log(`O fatorial de ${ numero } é igual a ${ fatorial }`)
console.log(`------------------------------`)