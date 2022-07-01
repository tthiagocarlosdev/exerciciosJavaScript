var input = require('readline-sync')
console.log(`------------------------------`)
console.log(`      ex029_minhaTabuada`)
console.log(`------------------------------`)

let contador  = 1
let numeroDigitado = 0

numeroDigitado = Number(input.question(`Digite um número: `))
console.log(`------------------------------`)

do {

  console.log(`${ numeroDigitado } x ${ contador } = ${ numeroDigitado * contador}`)
  contador++

} while ( contador <= 9 )
console.log(`------------------------------`)
