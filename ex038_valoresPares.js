var input = require('readline-sync')

console.log(`------------------------------`)
console.log(`      ex038_valoresPares`)
console.log(`------------------------------`)

let valor = Number(input.question(`Digite um valor: `))
console.clear()

console.log(`------------------------------`)
console.log(`      ex038_valoresPares`)
console.log(`------------------------------`)
console.log(`      CONTAGEM PROGRESSIVA`)
console.log(`------------------------------`)
for (let contador = 0; contador <= valor; contador += 2) {
  console.log(`${ contador }`)
}

console.log(`------------------------------`)
console.log(`      CONTAGEM REGRESSIVA`)
console.log(`------------------------------`)
for (let contador = valor; contador >= 0; contador--) {
  if (contador % 2 == 0) {
    console.log(`${ contador }`)  
  }
}

console.log(`------------------------------`)
console.log(`Valor digitado: ${valor}`)
console.log(`------------------------------`)
