var readlineSync = require('readline-sync')
var numeroA = Number(readlineSync.question("Digite um número: "))
var numeroB = Number(readlineSync.question("Digite outro número: "))
console.log(`A média entre ${numeroA} e ${numeroB} é igual a ${((numeroA + numeroB) / 2)}`)
