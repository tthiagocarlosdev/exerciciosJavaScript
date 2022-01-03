var input = require('readline-sync')
console.log("=====================")
console.log(" SOMADOR NUMÉRICO ")
console.log("=====================")
let contador = 1
let somaValores = 0
while(contador <= 5) {
  somaValores += Number(input.question(`Digite o ${contador}° valor: `))
  contador++
}
console.clear()
console.log("=====================")
console.log(" SOMADOR NUMÉRICO ")
console.log("=====================")
console.log(`Total de valores: ${somaValores}`)
console.log("=====================")