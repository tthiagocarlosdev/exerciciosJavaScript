var input = require('readline-sync')

let numero = 0
let contador = 0
let fatorial = 0
let repetir = 0

do {

  console.log(`------------------------------`)
  console.log(`  ex032_fatorialRepeticao`)
  console.log(`------------------------------`)
  numero = Number(input.question(`Digite um número: `))
  contador = numero - 1
  fatorial = numero
  

  do {

    fatorial *= contador
    contador--

  } while (contador != 0)

  console.log(`------------------------------`)
  console.log(`  ex032_fatorialRepeticao`)
  console.log(`------------------------------`)
  console.log(`O fatorial de ${ numero } é igual a ${ fatorial }`)
  console.log(`------------------------------`)

  console.log(`Repetir?`)
  console.log(`[1] Sim`)
  console.log(`[2] Não`)
  repetir = Number(input.question(``))
  

} while (repetir == 1)


console.log(`------------------------------`)
console.log(`  ex032_fatorialRepeticao`)
console.log(`------------------------------`)
console.log(`Programa encerrado!`)
console.log(`------------------------------`)