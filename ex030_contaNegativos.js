var input = require('readline-sync')
console.log(`------------------------------`)
console.log(`      ex030_contaNegativos`)
console.log(`------------------------------`)

let valorDigitado = 0
let valoresNegativos = 0
let contador = 0

do {

  valorDigitado = Number(input.question(`Digite um valor: `))

  if( valorDigitado < 0 ) {
    valoresNegativos++
  }

  contador++
} while ( contador < 5)

console.log(`------------------------------`)
console.log(`      ex030_contaNegativos`)
console.log(`------------------------------`)

console.log(`Valores negativos digitados: ${ valoresNegativos }`)
console.log(`------------------------------`)