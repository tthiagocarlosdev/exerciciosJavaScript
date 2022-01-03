var input = require('readline-sync')
console.log("============================")
console.log(" CONTE DE 0 ATÉ ONDE QUISER ")
console.log("============================")
let valor = Number(input.question("Digite até quanto quer contar: "))
let pulo = Number(input.question("De quanto será o pulo? "))
let contador = 0
console.clear()
console.log("============================")
console.log(" CONTE DE 0 ATÉ ONDE QUISER ")
console.log("============================")
while(contador <= valor){
  console.log(`${contador}`)
  contador += pulo
}
console.log("============================")