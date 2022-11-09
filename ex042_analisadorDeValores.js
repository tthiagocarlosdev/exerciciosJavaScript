var input = require('readline-sync')

console.log(`------------------------------`)
console.log(`   ex042_analisadorDeValores`)
console.log(`------------------------------`)

let valor = 0
let valoresDigitados = ""
let somaValores = 0
let mediaValores = 0
let divisivelPorCinco = 0
let nulo = 0
let somaPar = 0

for (let contador = 1; contador <= 5; contador++) {
  valor = Number(input.question(`Digite o ${contador}º valor: `))
  valoresDigitados += " " + valor
  somaValores += valor
  if (valor % 5 === 0) {
    divisivelPorCinco++
  }
  if (valor === 0) {
    nulo++
  }
  if (valor % 2 === 0) {
    somaPar += valor
  }
}

mediaValores = somaValores / 5

console.clear()
console.log(`------------------------------`)
console.log(`   ex042_analisadorDeValores`)
console.log(`------------------------------`)
console.log(`Valores digitados ${valoresDigitados}`)
console.log(`A soma dos valores é igual a ${somaValores}`)
console.log(`A média entre os valores é igual a ${mediaValores}`)
console.log(`Valores divisíveis por 5: ${divisivelPorCinco}`)
console.log(`Valores nulos: ${nulo}`)
console.log(`A soma dos valores pares é igual a ${somaPar}`)
console.log(`------------------------------`)