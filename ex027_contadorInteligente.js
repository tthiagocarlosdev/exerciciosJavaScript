var input = require('readline-sync')
console.log("=====================")
console.log(" CONTADOR INTELIGENTE ")
console.log("=====================")
let valorInicial = Number(input.question(`Digite o valor inicial: `))
let valorFinal = Number(input.question(`Digite o valor final: `))
console.log("=====================")
if ( valorInicial < valorFinal ){
  while ( valorInicial <= valorFinal ){
    console.log( valorInicial )
    valorInicial++
  }
} else if ( valorInicial > valorFinal ) {
  while ( valorInicial >= valorFinal ){
    console.log( valorInicial )
    valorInicial--
  }
} else {
  console.log(`Valores iguais!`)
}
console.log("=====================")