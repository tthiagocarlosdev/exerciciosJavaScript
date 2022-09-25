var input = require('readline-sync')

let valor = 0

for (let contador = 1;  contador <= 5; contador++) {
  console.log(`------------------------------`)
  console.log(`     ex037_somaValoresFor`)
  console.log(`------------------------------`)

  valor += Number(input.question(`Digite o ${contador}º valor: `))
  console.clear()
}

console.log(`------------------------------`)
console.log(`     ex037_somaValoresFor`)
console.log(`------------------------------`)
console.log(`A soma dos valores digitados é ${valor}`)
console.log(`------------------------------`)